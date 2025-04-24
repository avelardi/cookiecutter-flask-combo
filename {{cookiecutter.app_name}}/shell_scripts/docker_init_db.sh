docker compose run --rm manage db init
docker compose run --rm manage db migrate
docker compose run --rm manage db upgrade