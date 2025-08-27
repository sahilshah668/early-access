#!/bin/bash

echo "🔧 Setting up Ubuntu server for StoresA2Z Early Partner Access..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt install nginx -y

# Install Certbot
echo "📦 Installing Certbot for SSL..."
sudo apt install certbot python3-certbot-nginx -y

# Install Git
echo "📦 Installing Git..."
sudo apt install git -y

# Install Build Essentials
echo "📦 Installing build essentials..."
sudo apt install build-essential -y

# Create web directory
echo "📁 Creating web directory..."
sudo mkdir -p /var/www
cd /var/www

# Clone repository
echo "📥 Cloning repository..."
sudo git clone https://github.com/sahilshah668/early-access.git storesa2z-early-access

# Set permissions
echo "🔐 Setting permissions..."
sudo chown -R $USER:$USER /var/www/storesa2z-early-access
sudo chmod -R 755 /var/www/storesa2z-early-access

# Navigate to project
cd storesa2z-early-access

# Install dependencies
echo "📦 Installing project dependencies..."
npm install

# Build project
echo "🔨 Building project..."
npm run build

# Create logs directory
mkdir -p logs

# Make deploy script executable
chmod +x deploy.sh

echo "✅ Server setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Configure your domain DNS to point to this server"
echo "2. Update nginx configuration with your domain name"
echo "3. Run: sudo certbot --nginx -d your-domain.com"
echo "4. Start the application: pm2 start ecosystem.config.js"
echo "5. Save PM2 config: pm2 save && pm2 startup"
echo ""
echo "🌐 Your app will run on port 6969 (configured in ecosystem.config.js)"
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
