#!/bin/bash

cd /www/astro/copy
docker compose pull
docker compose down
docker compose up -d
docker system prune


