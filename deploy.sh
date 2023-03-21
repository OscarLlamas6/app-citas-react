# Iniciando deploy

docker compose -f ./docker-compose.yaml down --remove-orphans

CLOUD_COMPUTING_PROVIDER=$1

echo "Setting environment variables"
echo "CLOUD_COMPUTING_PROVIDER=$CLOUD_COMPUTING_PROVIDER" > docker.env 

docker compose -f ./docker-compose.yaml up -d