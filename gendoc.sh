#!/bin/bash
cname_file=$(pwd)/CNAME
depoly_dir=$(pwd)/docs
source_dir=$(pwd)/src
dist_dir=$source_dir/docs/.rcpress/dist

function befroeGen() {
    echo "remove generated doc ..."
    rm -rf $depoly_dir
}

function generateDoc() {
    echo "start generate doc for Gofi..."
    cd $source_dir
    if ! [ -x "$(command -v cross-env)" ]; then
        yarn install
    fi

    if ! [ -x "$(command -v rcpress)" ]; then
        yarn install
    fi

    yarn install && yarn generate
}

function copyDoc() {
    echo copy dist to $depoly_dir
    mv $dist_dir $depoly_dir
    cp $cname_file $depoly_dir
}

befroeGen
generateDoc
copyDoc
