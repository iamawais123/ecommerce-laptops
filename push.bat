@echo off
echo Creating README.md...
echo # e-comerce_laptop_website > README.md

echo Initializing Git repository...
git init

echo Adding files...
git add README.md
git add index.html
git add script.js
git add styles.css

echo Committing changes...
git commit -m "Initial commit"

echo Creating main branch...
git branch -M main

echo Adding remote...
git remote add origin https://github.com/iamawais123/e-comerce_laptop_website.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo Deployment complete!
pause