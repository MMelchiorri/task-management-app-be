#!/bin/bash

# Get the absolute path of the script
script_path=$(readlink -f "$0")

# Get the directory name from the absolute path
script_dir=$(dirname "$script_path")

absolute_path="$script_dir/.."

docker run -ti \
    -w /app \
    -v ${absolute_path}/src:/app \
    node:20 npm $@
    