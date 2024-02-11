resource "google_service_account" "manga-api" {
  account_id   = "manga-api-${local.student}"
  display_name = "Manga API"
}

resource "google_cloud_run_v2_service" "manga-api" {
  provider = google
  name     = "manga-back-${local.student}"
  location = local.region

  template {
    containers {
      image = "europe-west1-docker.pkg.dev/${local.project}/manga/manga-back"
      env {
        name  = "NODE_ENV"
        value = "prod"
      }
      ports {
        container_port = 3000
      }
    }
  }
}

resource "google_firestore_database" "database" {
  project     =  local.project
  name        = "(default)"
  location_id = local.region
  type        = "FIRESTORE_NATIVE"
}

resource "google_cloud_run_service_iam_member" "manga-api" {
  provider = google-beta
  service  = google_cloud_run_v2_service.manga-api.name
  location = google_cloud_run_v2_service.manga-api.location
  role     = "roles/run.invoker"
  member   = "serviceAccount:${google_service_account.manga-api.email}"
}

resource "google_api_gateway_api" "manga-api" {
  provider = google-beta
  api_id   = "manga-api-${local.student}"
  depends_on = [
    google_cloud_run_v2_service.manga-api
  ]
}
resource "google_api_gateway_api_config" "manga-api" {
  provider             = google-beta
  api                  = google_api_gateway_api.manga-api.api_id
  api_config_id_prefix = "manga-api-${local.student}-"
  openapi_documents {
    document {
      path     = "manga.yaml"
      contents = base64encode(templatefile("manga.yaml.tftpl", { CLOUD_RUN_URL = google_cloud_run_v2_service.manga-api.uri }))
    }
  }
  gateway_config {
    backend_config {
      google_service_account = google_service_account.manga-api.id
    }
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "google_api_gateway_gateway" "manga-api" {
  provider   = google-beta
  region     = local.region
  api_config = google_api_gateway_api_config.manga-api.id
  gateway_id = "manga-api-${local.student}"
}

output "service_url" {
  value = google_cloud_run_v2_service.manga-api
}

output "gateway_url" {
  value = google_api_gateway_gateway.manga-api
}