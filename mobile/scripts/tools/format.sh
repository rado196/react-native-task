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
## format code

"$BIN_DIR/prettier" \
  --config .prettierrc \
  --log-level error \
  --write \
  'src/**/*.(js|json)'

exit $?
