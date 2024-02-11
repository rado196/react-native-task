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
## start ios

export NODE_OPTIONS="--max-old-space-size=6144"
"$BIN_DIR/react-native" run-ios -- --reset-cache

exit $?
