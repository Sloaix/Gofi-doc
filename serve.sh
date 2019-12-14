#!/bin/bash
source_dir=$(pwd)/src

function serve() {
    echo "start generate doc for Gofi..."
    cd $source_dir
    if ! [ -x "$(command -v cross-env)" ]; then
        yarn install
    fi

    if ! [ -x "$(command -v rcpress)" ]; then
        yarn install
    fi

    yarn install && yarn dev
}

serve