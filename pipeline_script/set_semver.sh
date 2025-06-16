#!/bin/bash
set -o errexit
#echo "======================================================="
version_from_file=$(head -n 1 ./pipeline_script/semver.txt)
#app_version="${version_from_file/\#/}"
app_version=$(echo ${version_from_file/?})
export appVersion=${app_version}
echo ${appVersion}