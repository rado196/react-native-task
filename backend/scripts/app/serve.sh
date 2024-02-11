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

## ----------------------------------------------------------------------------------
## start development server

"$BIN_DIR/nodemon" \
  --exec "'$BIN_DIR/babel-node' ./app.js" \
  --config "$ROOT_DIR/nodemon.json" \
  --cwd "$ROOT_DIR"

exit $?
