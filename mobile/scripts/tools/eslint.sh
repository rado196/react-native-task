#!/usr/bin/env bash

## ----------------------------------------------------------------------------------
## init script

cd "$(dirname "$0")/../../" || exit 1
if [[ "$(command -v realpath)" != "" ]]; then
  ROOT_DIR="$(realpath "$PWD")"
else
  ROOT_DIR="$PWD"
fi

BIN_DIR="$ROOT_DIR/node_modules/.bin"
CACHE_DIR="$ROOT_DIR/node_modules/.cache"

## ----------------------------------------------------------------------------------
## remove cache folder

if [[ -d node_modules ]]; then
  rm -rf "$CACHE_DIR/eslint*"
fi

## ----------------------------------------------------------------------------------
## lint code

ESLINT_FILE=""
if [[ "prod" == "$1" ]]; then
  ESLINT_FILE=".eslintrc.prod"
else
  ESLINT_FILE=".eslintrc"
fi

"$BIN_DIR/eslint" \
  --ext js \
  --config "$ESLINT_FILE" \
  --fix \
  src

exit $?
