# 🚀 StoresA2Z Early Partner Access - Ubuntu Server Deployment Guide

## 📋 **Prerequisites**
- Ubuntu 20.04+ server with root/sudo access
- Domain name pointing to your server
- SSH access to your server

---

## 🔧 **Step 1: Server Setup & Dependencies**

### **1.1 Update System & Install Dependencies**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+ (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install Certbot for SSL
sudo apt install certbot python3-certbot-nginx -y

# Install Git
sudo apt install git -y

# Install Build Essentials (for native modules)
sudo apt install build-essential -y
```

### **1.2 Verify Installations**
```bash
# Check versions
node --version    # Should be v18.x.x
npm --version     # Should be 8.x.x+
pm2 --version     # Should be 5.x.x+
nginx -v          # Should be 1.18+
```

---

## 📁 **Step 2: Clone & Setup Project**

### **2.1 Clone Repository**
```bash
# Navigate to web directory
cd /var/www

# Clone your repository
sudo git clone https://github.com/sahilshah668/early-access.git storesa2z-early-access

# Set proper permissions
sudo chown -R $USER:$USER /var/www/storesa2z-early-access
sudo chmod -R 755 /var/www/storesa2z-early-access

# Navigate to project
cd storesa2z-early-access
```

### **2.2 Install Dependencies**
```bash
# Install npm dependencies
npm install

# Build the project
npm run build
```

---

## ⚙️ **Step 3: PM2 Process Management**

### **3.1 Create PM2 Ecosystem File**
Create `ecosystem.config.js` in your project root:

```javascript
module.exports = {
  apps: [{
    name: 'storesa2z-early-access',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/storesa2z-early-access',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 6969
    }
  }]
}
```

### **3.2 Start Application with PM2**
```bash
# Start the application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the instructions provided by the above command
```

---

## 🌐 **Step 4: Nginx Configuration**

### **4.1 Create Nginx Site Configuration**
Create `/etc/nginx/sites-available/storesa2z-early-access`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;

    # Proxy to Node.js app
    location / {
        proxy_pass http://localhost:6969;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:6969;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Favicon and manifest
    location = /favicon.ico {
        proxy_pass http://localhost:6969;
        expires 1y;
        add_header Cache-Control "public";
    }

    location = /site.webmanifest {
        proxy_pass http://localhost:6969;
        expires 1y;
        add_header Cache-Control "public";
    }
}
```

### **4.2 Enable Site & Test Configuration**
```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/storesa2z-early-access /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

---

## 🔒 **Step 5: SSL Certificate (Let's Encrypt)**

### **5.1 Obtain SSL Certificate**
```bash
# Replace 'your-domain.com' with your actual domain
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Follow the prompts:
# - Enter your email
# - Agree to terms
# - Choose redirect option (recommend option 2 for HTTPS redirect)
```

### **5.2 Auto-renewal Setup**
```bash
# Test auto-renewal
sudo certbot renew --dry-run

# Add to crontab for auto-renewal
sudo crontab -e
# Add this line:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

---

## 🔄 **Step 6: Deployment Automation**

### **6.1 Create Deployment Script**
Create `deploy.sh` in your project root:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/storesa2z-early-access

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart storesa2z-early-access

echo "✅ Deployment completed!"
```

### **6.2 Make Script Executable**
```bash
chmod +x deploy.sh
```

---

## 📊 **Step 7: Monitoring & Maintenance**

### **7.1 PM2 Monitoring**
```bash
# View application status
pm2 status

# View logs
pm2 logs storesa2z-early-access

# Monitor in real-time
pm2 monit
```

### **7.2 Nginx Logs**
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### **7.3 System Monitoring**
```bash
# Check system resources
htop

# Check disk usage
df -h

# Check memory usage
free -h
```

---

## 🔧 **Step 8: Environment Variables (If Needed)**

### **8.1 Create Environment File**
```bash
# Create .env.local file
nano .env.local

# Add any environment variables
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### **8.2 Update PM2 to Use Environment File**
Update your `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'storesa2z-early-access',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/storesa2z-early-access',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_file: '.env.local',
    env: {
      NODE_ENV: 'production',
      PORT: 6969
    }
  }]
}
```

---

## 🚨 **Step 9: Security Hardening**

### **9.1 Firewall Setup**
```bash
# Install UFW
sudo apt install ufw

# Allow SSH
sudo ufw allow ssh

# Allow HTTP and HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Enable firewall
sudo ufw enable
```

### **9.2 Fail2Ban Setup**
```bash
# Install Fail2Ban
sudo apt install fail2ban

# Create local config
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Start and enable
sudo systemctl start fail2ban
sudo systemctl enable fail2ban
```

---

## 📈 **Step 10: Performance Optimization**

### **10.1 Nginx Optimization**
Add to your nginx config:

```nginx
# Worker processes
worker_processes auto;

# Events
events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}

# HTTP settings
http {
    # Basic settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    
    # Buffer sizes
    client_body_buffer_size 128k;
    client_max_body_size 10m;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 4k;
    
    # Gzip settings
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;
}
```

---

## 🔄 **Step 11: Update Process**

### **11.1 Manual Update**
```bash
# Run deployment script
./deploy.sh
```

### **11.2 Automated Updates (Optional)**
Set up GitHub Actions or cron jobs for automatic deployments.

---

## 📞 **Step 12: Troubleshooting**

### **Common Issues:**

1. **Port 6969 already in use:**
   ```bash
   sudo lsof -i :6969
   sudo kill -9 <PID>
   ```

2. **Nginx 502 Bad Gateway:**
   ```bash
   # Check if app is running
   pm2 status
   
   # Check app logs
   pm2 logs storesa2z-early-access
   ```

3. **SSL Certificate Issues:**
   ```bash
   # Renew certificate
   sudo certbot renew
   
   # Check certificate status
   sudo certbot certificates
   ```

4. **Permission Issues:**
   ```bash
   # Fix ownership
   sudo chown -R $USER:$USER /var/www/storesa2z-early-access
   ```

---

## ✅ **Final Checklist**

- [ ] Node.js 18+ installed
- [ ] PM2 installed and configured
- [ ] Nginx configured and running
- [ ] SSL certificate obtained
- [ ] Application deployed and running
- [ ] Domain pointing to server
- [ ] Firewall configured
- [ ] Monitoring set up
- [ ] Backup strategy in place

---

## 🎯 **Your Website Should Now Be Live At:**
**https://your-domain.com**

Replace `your-domain.com` with your actual domain name.

---

## 📞 **Support**

If you encounter any issues:
1. Check PM2 logs: `pm2 logs storesa2z-early-access`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Check system resources: `htop`
4. Verify SSL: `sudo certbot certificates`
