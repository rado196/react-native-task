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
## paths

ROOT_SOURCE="$ROOT_DIR/src"
ROOT_DIST="$ROOT_DIR/dist"
ROOT_BUILD="$ROOT_DIR/build"

## ----------------------------------------------------------------------------------
## start production build

"$BIN_DIR/babel" \
  --out-dir "$ROOT_DIST" \
  --copy-files \
  --out-file-extension '.js' \
  --extensions '.js' \
  --source-maps false \
  "$ROOT_SOURCE"

exit $?
