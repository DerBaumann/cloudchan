#!/bin/bash

# This is a deployment script for a aws ec2 instance running amazon linux.
# If you want to deploy this on something else, you might have to adjust this file.

if [[ $EUID -ne 0 ]]; then
  echo "This script must be run as root"
  exit 1
fi

# Nginx
dnf install -y nginx
systemctl start nginx
systemctl enable nginx

echo <<'EOF' >/etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

nginx -t
systemctl reload nginx

# Install Node & NPM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

# Setup
npm ci
npm run db:migrate

# Build & Run
public_ip=$(curl https://ipinfo.io/ip)

npm run build
ORIGIN="http://$public_ip/" node build
