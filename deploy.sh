#!/bin/bash

# Deploy script for Vercel
echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
cd apps/www
npm install
npm run build

echo "✅ Build completed successfully!" 