#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn
chmod +x bin/*

bundle exec rake assets:precompile
bundle exec rake assets:clean
