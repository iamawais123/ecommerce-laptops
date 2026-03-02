@echo off
echo Adding all files...
git add index.html
git add script.js
git add styles.css
git add README.md

echo Committing changes...
git commit -m "Update - E-commerce laptops website with brand logos and hero image"

echo Pushing to GitHub...
git push -u origin main

echo.
echo Deployment complete!
echo Your code is now on GitHub at: https://github.com/iamawais123/ecommerce-laptops
echo Next: Deploy to Vercel by visiting https://vercel.com/new and importing this repository
pause