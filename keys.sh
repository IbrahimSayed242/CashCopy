#!/bin/bash

# Encode the SSH private key to base64
SSH_PRIVATE_KEY_BASE64=$(base64 ~/.ssh/id_rsa)

# Replace the following variables with your repository details
GITHUB_OWNER="IbrahimSayed242"
GITHUB_REPO="CashCopy"
SECRET_NAME="SSH_PRIVATE_KEY"

# Upload the base64 encoded key to GitHub Secrets
echo "$SSH_PRIVATE_KEY_BASE64" | gh secret set "$SECRET_NAME" --repo "$GITHUB_OWNER/$GITHUB_REPO"
