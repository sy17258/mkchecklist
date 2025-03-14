#!/bin/bash
# Simple deployment script for InfinityFree

echo "🚀 Building optimized production version..."
npm run build

echo "📝 Checking if index.html has type=module (this can cause MIME type issues)..."
if grep -q "type=\"module\"" dist/index.html; then
  echo "⚠️ Found type=module in index.html, replacing with normal script tags..."
  sed -i '' 's/type="module"//g' dist/index.html
fi

echo "📄 Copying .htaccess to dist folder..."
cp .htaccess dist/

echo "✅ Build ready for deployment!"
echo "Upload ALL contents of the dist folder to your InfinityFree hosting root."
echo "Make sure to include the .htaccess file!" 