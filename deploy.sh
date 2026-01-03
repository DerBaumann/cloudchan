#!/bin/bash

# This is a deployment script for a aws ec2 instance running amazon linux.
# If you want to deploy this on something else, you might have to adjust this file.

# Install Node & NPM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

# Setup
npm ci
npm run db:migrate

# Build & Run
npm run build
node build
