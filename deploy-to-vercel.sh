#!/bin/bash

echo "Vercel Deployment Script"
echo "========================"
echo ""
echo "This script will help you deploy your website to Vercel."
echo ""

# Check if we're in the correct directory
if [ -d "nextjs-app" ]; then
    echo "Found nextjs-app directory. Changing to it..."
    cd nextjs-app
elif [ ! -f "package.json" ]; then
    echo "Error: No package.json found. Make sure you're in the correct directory."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo ""
echo "Step 1: Login to Vercel"
echo "-----------------------"
echo "Please follow the prompts to login to Vercel."
echo "Choose 'Continue with GitHub' if you have a GitHub account."
echo ""
vercel login

echo ""
echo "Step 2: Deploy to Vercel"
echo "-----------------------"
echo "Now we'll deploy your application."
echo ""

# Deploy to production
vercel --prod

echo ""
echo "Deployment complete!"
echo ""
echo "Your site should now be live on Vercel."
echo "Check the output above for your deployment URL."