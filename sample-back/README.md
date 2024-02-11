# Manga Back

Backend JS qui expose une simple API pour la déployer dans Cloud Run avec un stockage Google Firestore

## Builder et publier l'image
Il faut tout d'abord configure docker pour utiliser gcloud pour se logguer

```shell
gcloud auth configure-docker europe-west1-docker.pkg.dev
```

```shell
docker build . -t europe-west1-docker.pkg.dev/[id du projet]/manga/manga-back
docker push europe-west1-docker.pkg.dev/[id du projet]/manga/manga-back
```
