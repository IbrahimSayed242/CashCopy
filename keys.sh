#!/bin/bash

# Define variables
SSH_KEY_PATH="$HOME/.ssh/id_rsa"
GITHUB_OWNER="IbrahimSayed242"
GITHUB_REPO="CashCopy"
SECRET_NAME="SSH_PRIVATE_KEY"

# Check if the SSH key exists
if [[ ! -f "$SSH_KEY_PATH" ]]; then
    echo "SSH private key not found at $SSH_KEY_PATH. Please ensure it exists."
    exit 1
fi

# Encode the SSH private key to base64
SSH_PRIVATE_KEY_BASE64=$(base64 "$SSH_KEY_PATH")

# Upload the base64 encoded key to GitHub Secrets
echo "$SSH_PRIVATE_KEY_BASE64" | gh secret set "$SECRET_NAME" --repo "$GITHUB_OWNER/$GITHUB_REPO"

# Optional: Provide feedback
if [[ $? -eq 0 ]]; then
    echo "Successfully uploaded SSH private key to GitHub Secrets."
else
    echo "Failed to upload SSH private key to GitHub Secrets."
fi
