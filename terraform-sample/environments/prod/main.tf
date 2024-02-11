terraform {
  required_version = "~> 1.7.2"
  backend "gcs" {
    bucket = "episen-guillaume-tfstate"
    prefix = "env/guillaume"
  }
}

provider "google" {
  project = local.project
  region = local.region
  
}
provider "google-beta" {
  project = local.project
  region = local.region
}