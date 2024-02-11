# Exemple de déploiment terraform
Ce repo est un exemple simple pour déployer l'infrastructure suivante dans GCP :
 * [un site web hébergé dans un bucket](sample-front/README.md)
 * [un backend qui expose une API dans un cloud run basé sur une base de données de type firestore](sample-back/README.md)
 * API Gateway qui permet d'appeler le cloud run

## Prérequis
### Gcloud
Il faut créer (ou sélectionner un projet GCP).

Les apis suivantes sont nécessaires : 
 * Artifact Registry :  artifactregistry.googleapis.com
 * Stockage Firestore : firestore.googleapis.com
 * Cloud Run: run.googleapis.com
 * API Gateway : apigateway.googleapis.com
 * Pour débug API Gateway : servicecontrol.googleapis.com et servicemanagement.googleapis.com 

### Authentification Google
Il est nécessaire d'authentifier la ligne de commande google :
```shell
gcloud auth login
# On doit ensuite sélectionner l'id du projet que l'on veut utiliser
gcloud projects list
gcloud config set project [project id]
```

### Repository Docker 
Il est également nécessaire de créer un repository docker `manga`. Un repository mono-region est suffisant

## Déroulement du TD
Il est nécessaire de d'abord compiler et publier le projet [back](sample-back/README.md) puis on peut déployer [l'infrastructure](terraform-sample/README.md) et enfin on publie le [site web](sample-front/README.md)
