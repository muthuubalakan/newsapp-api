VERSION=1.0.0
IMAGE_NAME=newsapp:${VERSION}


run: compose-build migrations migrate

migrate:
	docker-compose run web python /app/manage.py migrate --noinput
	docker-compose run web python /app/manage.py migrate newsapp --noinput

migrations:
	docker-compose run web python /app/manage.py makemigrations --noinput
	docker-compose run web python /app/manage.py makemigrations newsapp --noinput

setuser:
	docker-compose run web python /app/manage.py createsuperuser

compose-build:
	docker-compose up -d --build

build_run:
	docker-compose up -d