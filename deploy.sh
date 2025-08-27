#!/bin/bash

echo "🚀 Starting StoresA2Z Early Partner Access deployment..."

# Navigate to project directory
cd /var/www/storesa2z-early-access

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project for production..."
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart storesa2z-early-access

# Check status
echo "📊 Checking application status..."
pm2 status storesa2z-early-access

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should be live at: https://your-domain.com"
echo "📝 Don't forget to replace 'your-domain.com' with your actual domain"
