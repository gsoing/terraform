// Front end infra
resource "google_storage_bucket" "manga-front" {
  name     = "front-manga-${local.student}"
  location = local.location
  versioning {
    enabled = true
  }
  cors {
    origin          = ["*"]
    method          = ["GET"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
  lifecycle_rule {
    condition {
      num_newer_versions = 2
    }
    action {
      type = "Delete"
    }
  }
}

resource "google_storage_default_object_access_control" "manga-front" {
  bucket = google_storage_bucket.manga-front.name
  role   = "READER"
  entity = "allUsers"
}

output "bucket_location" {
  value = google_storage_bucket.manga-front
}
