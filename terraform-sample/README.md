# Exemple de terraform

Ce répertoire contient le code terraform nécessaire pour déployer l'infrastructure du TD.
Il est composé de 4 fichiers:
 * (variables.tf)[environments/prod/variables.tf]: il contient les variables pour configurer le projet
 * (main.tf): configuration de terraform
 * (front.tf): création et configuration du bucket pour le front
 * (back.tf): création et configuration de l'infrastructure back

## Configuration
Il faut créer un projet dans GCP et un bucket. Le bucket doit avoir pour nom `episen-${student}-tfstate` ou la variable `student` est le nom de l'étudiant . 
L'ensemble des informations du projet doit être renseigné dans le fichier [variables.tf](environements/prod/variables.tf).
```terraform
locals {
  student  = "[nom de l'étudiant]"
  project  = "[identifiant du projet]"
  location = "[région par défaut]"
}
```

Terraform n'autorise pas les variables dans la déclaration des backend il faut donc modifier le fichier [main.tf](environments/prod/main.tf)
```terraform
terraform {
  required_version = "~> 1.7.2"
  backend "gcs" {
    bucket = "episen-[student]-tfstate"
    prefix = "env/guillaume"
  }
}
```

## Déploiment
Il faut d'abord permettre à Terraform de se connecter à GCP, en temps normal on utilise un compte de service ici on va utilser notre propre compte. Il faut donc configurer notre environnement: 
```shell
gcloud auth application-default login
```
On peut ensuite utiliser terraform
```shell
cd environments/prod
# Initialise terraform
terraform init
# terraform décrit tout ce qu'il va faire
terraform plan
# on applique notre configuration (attention cela peut-être long)
terraform apply
```