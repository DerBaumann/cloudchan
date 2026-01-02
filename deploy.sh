#!/bin/bash

# This is a deployment script for a aws ec2 instance running amazon linux.
# If you want to deploy this on something else, you might have to adjust this file.

if [[ $EUID -ne 0 ]]; then
  echo "This script must be run as root"
  exit 1
fi

# Dependencies
dnf install nodejs

# Setup
npm ci
npm run db:migrate

# Build & Run
npm run build
node build
