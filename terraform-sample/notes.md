gcloud beta compute network-endpoint-groups create manga-api \
  --global
  --network-endpoint-type=serverless \
  --serverless-deployment-platform=apigateway.googleapis.com \
  --serverless-deployment-resource=manga-api


gcloud compute backend-services add-backend BACKEND_SERVICE_NAME \
  --global \
  --network-endpoint-group=SERVERLESS_NEG_NAME \
  --network-endpoint-group-region=REGION_ID

gcloud beta compute backend-services add-backend manga-api \
  --global \
  --network-endpoint-group=manga-api \
  --network-endpoint-group-region=europe-west1

gcloud compute backend-services add-backend manga-api \
  --network-endpoint-group=manga-api \
  --network-endpoint-group-region=europe-west1 

gcloud beta compute backend-services create manga-api --global

gcloud beta compute backend-services create manga-api \
  --region=europe-west1

gcloud beta compute backend-services delete manga-api

gcloud compute url-maps create api-gateway-url-map \
  --default-service api-gateway-backend-service