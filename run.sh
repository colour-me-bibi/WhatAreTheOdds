#!/usr/bin/env sh
# set -euo pipefail

if [ "${1}" = "start" ]; then
    echo "Starting"
    exec docker-compose up --env-file=./.env.local
elif [ "${1}" = "dev" ]; then
    echo "Starting dev"
    exec docker-compose up --env-file=./.env.dev.local
elif [ "${1}" = "test" ]; then
    echo "Starting test"
    exec docker-compose up --env-file=./.env.test.local
else
    echo "You must specify start, dev, or test"
    exit 1
fi
