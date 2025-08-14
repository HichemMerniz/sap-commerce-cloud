#!/bin/bash

# Spartacus Storefront Deployment Script for SAP Commerce Cloud
# This script builds and prepares the storefront for deployment

echo "🚀 Starting Spartacus Storefront deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.x or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18.x or higher. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm 8.x or higher."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the application with SSR
echo "🔨 Building application with SSR..."
npm run build:ssr

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Check if build artifacts exist
if [ ! -d "dist/spartacus-storefront" ]; then
    echo "❌ Build artifacts not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# Display deployment information
echo ""
echo "📋 Deployment Information:"
echo "   - Build output: dist/spartacus-storefront"
echo "   - Server port: 4000"
echo "   - Node version: $(node -v)"
echo "   - npm version: $(npm -v)"
echo ""
echo "🚀 Ready for deployment to SAP Commerce Cloud!"
echo ""
echo "Next steps:"
echo "1. Push this folder to your connected repository"
echo "2. Create a build in the SAP Commerce Cloud Portal"
echo "3. Deploy to your environment"
echo "4. Configure the JS Storefront endpoint"
echo ""
echo "For more information, see the README.md file."
