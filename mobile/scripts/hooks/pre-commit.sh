#!/usr/bin/env bash

## ----------------------------------------------------------------------------------
## init script
cd "$(dirname "$0")/../../" || exit 1
if [[ "$(command -v realpath)" != "" ]]; then
  ROOT_DIR="$(realpath "$PWD")"
else
  ROOT_DIR="$PWD"
fi

function check_exit() {
  if [[ $1 != 0 ]]; then
    exit $1
  fi
}

## ----------------------------------------------------------------------------------
## format code

npm run code:format
check_exit $?

## ----------------------------------------------------------------------------------
## execute lint

npm run code:lint:prod
check_exit $?

## ----------------------------------------------------------------------------------
## build production release

npm run build
check_exit $?

## ----------------------------------------------------------------------------------
## add re-formatted files to git

git add .
