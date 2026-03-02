@echo off
echo Cleaning up...
if exist .git rmdir /s /q .git

echo Creating README.md...
echo # e-comerce_laptop_website > README.md

echo Initializing Git repository...
git init

echo Adding website files...
git add index.html
git add script.js
git add styles.css
git add README.md

echo Committing changes...
git commit -m "Initial commit - E-commerce laptops website"

echo Creating main branch...
git branch -M main

echo Setting up remote...
git remote add origin https://github.com/iamawais123/ecommerce-laptops.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo Deployment complete!
echo Your website will be available at: https://iamawais123.github.io/e-comerce_laptop_website/
pause