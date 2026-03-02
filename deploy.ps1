# Configure Git identity
git config --global user.name "Awais"
git config --global user.email "awais@example.com"

# Remove existing remote if exists
git remote remove origin

# Add files and commit
git add .
git commit -m "Initial commit - E-commerce laptops website"

# Add GitHub remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-laptops.git

# Push to GitHub
git push -u origin main