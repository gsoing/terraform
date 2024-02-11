# Site web exemple
Ici on a un site web très basique qui appelle API Gateway qui expose notre service Cloud Run

Ici c'est très simple on va modifier le fichier [list-users.js](list-users.js) pour renseigner l'url de notre gateway
```javascript
const API_URL = '[URL API GATEWAY]'
```

Ensuite on le copie dans la bucket
```shell
gsutil cp ./index.html ./list-users.js gs://front-manga-[student]
```