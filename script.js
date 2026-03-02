const products = [
    {
        id: 1,
        name: "MacBook Pro 16\"",
        category: "professional",
        brand: "Apple",
        price: 2499,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: {
            processor: "Apple M3 Pro",
            ram: "18GB",
            storage: "512GB SSD",
            display: "16.2\" Liquid Retina XDR"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 2,
        name: "MacBook Air 15\"",
        category: "ultrabook",
        brand: "Apple",
        price: 1299,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        specs: {
            processor: "Apple M3",
            ram: "8GB",
            storage: "256GB SSD",
            display: "15.3\" Liquid Retina"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 3,
        name: "Dell XPS 15",
        category: "ultrabook",
        brand: "Dell",
        price: 1899,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-13700H",
            ram: "16GB",
            storage: "1TB SSD",
            display: "15.6\" OLED"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 4,
        name: "Dell Alienware m18",
        category: "gaming",
        brand: "Dell",
        price: 2899,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i9-13900HX",
            ram: "32GB",
            storage: "2TB SSD",
            display: "18\" QHD+ 480Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 5,
        name: "ASUS ROG Strix G16",
        category: "gaming",
        brand: "ASUS",
        price: 1599,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i9-13980HX",
            ram: "32GB",
            storage: "1TB SSD",
            display: "16\" 165Hz QHD+"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 6,
        name: "ASUS ZenBook 14",
        category: "ultrabook",
        brand: "ASUS",
        price: 999,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: {
            processor: "AMD Ryzen 7 7735U",
            ram: "16GB",
            storage: "512GB SSD",
            display: "14\" OLED"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 7,
        name: "Lenovo ThinkPad X1 Carbon",
        category: "business",
        brand: "Lenovo",
        price: 1799,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1365U",
            ram: "16GB",
            storage: "512GB SSD",
            display: "14\" WUXGA"
        },
        icon: "fa-briefcase",
        availability: "instock"
    },
    {
        id: 8,
        name: "Lenovo Legion 7i",
        category: "gaming",
        brand: "Lenovo",
        price: 2199,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i9-13900HX",
            ram: "32GB",
            storage: "1TB SSD",
            display: "16\" WQXGA 165Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 9,
        name: "HP Spectre x360",
        category: "ultrabook",
        brand: "HP",
        price: 1649,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1355U",
            ram: "16GB",
            storage: "1TB SSD",
            display: "13.5\" OLED 3K2K"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 10,
        name: "HP Omen 16",
        category: "gaming",
        brand: "HP",
        price: 1399,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-13700HX",
            ram: "16GB",
            storage: "1TB SSD",
            display: "16.1\" QHD 165Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 11,
        name: "MSI Titan GT77",
        category: "gaming",
        brand: "MSI",
        price: 3499,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i9-13980HX",
            ram: "64GB",
            storage: "2TB SSD",
            display: "17.3\" 4K 144Hz"
        },
        icon: "fa-gamepad",
        availability: "preorder"
    },
    {
        id: 12,
        name: "MSI Prestige 14",
        category: "professional",
        brand: "MSI",
        price: 1299,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-13700H",
            ram: "16GB",
            storage: "1TB SSD",
            display: "14\" QHD+"
        },
        icon: "fa-briefcase",
        availability: "instock"
    },
    {
        id: 13,
        name: "Razer Blade 15",
        category: "gaming",
        brand: "Razer",
        price: 2399,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i9-13900H",
            ram: "32GB",
            storage: "1TB SSD",
            display: "15.6\" QHD 240Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 14,
        name: "Razer Blade 14",
        category: "gaming",
        brand: "Razer",
        price: 1999,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "AMD Ryzen 9 7940HS",
            ram: "16GB",
            storage: "1TB SSD",
            display: "14\" QHD 165Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 15,
        name: "Microsoft Surface Laptop 5",
        category: "ultrabook",
        brand: "Microsoft",
        price: 1299,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1255U",
            ram: "16GB",
            storage: "512GB SSD",
            display: "13.5\" PixelSense"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 16,
        name: "Microsoft Surface Pro 9",
        category: "professional",
        brand: "Microsoft",
        price: 1499,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1255U",
            ram: "16GB",
            storage: "256GB SSD",
            display: "13\" PixelSense Flow"
        },
        icon: "fa-tablet-alt",
        availability: "instock"
    },
    {
        id: 17,
        name: "Dell Latitude 7440",
        category: "business",
        brand: "Dell",
        price: 1499,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1365U",
            ram: "16GB",
            storage: "512GB SSD",
            display: "14\" FHD+"
        },
        icon: "fa-briefcase",
        availability: "instock"
    },
    {
        id: 18,
        name: "HP EliteBook 860 G10",
        category: "business",
        brand: "HP",
        price: 1699,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1365U",
            ram: "32GB",
            storage: "1TB SSD",
            display: "16\" WUXGA"
        },
        icon: "fa-briefcase",
        availability: "instock"
    },
    {
        id: 19,
        name: "LG Gram 17",
        category: "ultrabook",
        brand: "LG",
        price: 1499,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1360P",
            ram: "16GB",
            storage: "1TB SSD",
            display: "17\" WQXGA"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 20,
        name: "Samsung Galaxy Book3 Pro",
        category: "ultrabook",
        brand: "Samsung",
        price: 1399,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1360P",
            ram: "16GB",
            storage: "512GB SSD",
            display: "14\" AMOLED"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 21,
        name: "Acer Swift X",
        category: "student",
        brand: "Acer",
        price: 849,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        specs: {
            processor: "AMD Ryzen 7 5800U",
            ram: "16GB",
            storage: "512GB SSD",
            display: "14\" FHD"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 22,
        name: "Lenovo ThinkPad E14",
        category: "business",
        brand: "Lenovo",
        price: 899,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i5-1335U",
            ram: "8GB",
            storage: "256GB SSD",
            display: "14\" FHD"
        },
        icon: "fa-briefcase",
        availability: "instock"
    },
    {
        id: 23,
        name: "HP Envy x360",
        category: "student",
        brand: "HP",
        price: 899,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        specs: {
            processor: "AMD Ryzen 5 7535U",
            ram: "16GB",
            storage: "512GB SSD",
            display: "15.6\" FHD"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 24,
        name: "Dell Inspiron 16",
        category: "student",
        brand: "Dell",
        price: 799,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i5-1335U",
            ram: "8GB",
            storage: "512GB SSD",
            display: "16\" FHD+"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 25,
        name: "HP Pavilion 15",
        category: "student",
        brand: "HP",
        price: 699,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        specs: {
            processor: "AMD Ryzen 5 7535U",
            ram: "8GB",
            storage: "512GB SSD",
            display: "15.6\" FHD"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 26,
        name: "Lenovo IdeaPad Gaming 3",
        category: "gaming",
        brand: "Lenovo",
        price: 999,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "AMD Ryzen 7 6800H",
            ram: "16GB",
            storage: "512GB SSD",
            display: "15.6\" FHD 165Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 27,
        name: "ASUS TUF Gaming F15",
        category: "gaming",
        brand: "ASUS",
        price: 899,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i5-11400H",
            ram: "16GB",
            storage: "512GB SSD",
            display: "15.6\" FHD 144Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 28,
        name: "Acer Nitro 5",
        category: "gaming",
        brand: "Acer",
        price: 849,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i5-12500H",
            ram: "16GB",
            storage: "512GB SSD",
            display: "15.6\" FHD 144Hz"
        },
        icon: "fa-gamepad",
        availability: "instock"
    },
    {
        id: 29,
        name: "Huawei MateBook X Pro",
        category: "professional",
        brand: "Huawei",
        price: 1599,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        specs: {
            processor: "Intel Core i7-1360P",
            ram: "16GB",
            storage: "1TB SSD",
            display: "13.9\" 3K"
        },
        icon: "fa-laptop",
        availability: "instock"
    },
    {
        id: 30,
        name: "MacBook Air 13\"",
        category: "student",
        brand: "Apple",
        price: 1099,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
        specs: {
            processor: "Apple M2",
            ram: "8GB",
            storage: "256GB SSD",
            display: "13.6\" Liquid Retina"
        },
        icon: "fa-laptop",
        availability: "instock"
    }
];

let cart = [];
let wishlist = [];
let currentView = 'grid';
let currentUser = null;
let userOrders = [];

function renderProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = filteredProducts.length;
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-actions">
                <button class="product-action-btn ${wishlist.includes(product.id) ? 'wishlisted' : ''}" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="product-action-btn" onclick="openQuickView(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
            <div class="product-image">
                ${product.availability === 'preorder' ? '<span class="product-badge">Pre-Order</span>' : ''}
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-specs">
                    <div class="product-spec">
                        <i class="fas fa-microchip"></i>
                        <span>${product.specs.processor}</span>
                    </div>
                    <div class="product-spec">
                        <i class="fas fa-memory"></i>
                        <span>${product.specs.ram}</span>
                    </div>
                    <div class="product-spec">
                        <i class="fas fa-hdd"></i>
                        <span>${product.specs.storage}</span>
                    </div>
                    <div class="product-spec">
                        <i class="fas fa-desktop"></i>
                        <span>${product.specs.display}</span>
                    </div>
                </div>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const selectedCategories = getCheckedValues('category');
    const selectedBrands = getCheckedValues('brand');
    const selectedRAM = getCheckedValues('ram');
    const selectedStorage = getCheckedValues('storage');
    const selectedAvailability = getCheckedValues('availability');
    
    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                              product.brand.toLowerCase().includes(searchTerm) ||
                              product.category.toLowerCase().includes(searchTerm);
        const matchesPrice = product.price <= maxPrice;
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesRAM = selectedRAM.length === 0 || selectedRAM.some(ram => product.specs.ram.includes(ram));
        const matchesStorage = selectedStorage.length === 0 || selectedStorage.some(storage => product.specs.storage.includes(storage));
        const matchesAvailability = selectedAvailability.length === 0 || selectedAvailability.includes(product.availability);
        
        return matchesSearch && matchesPrice && matchesCategory && matchesBrand && matchesRAM && matchesStorage && matchesAvailability;
    });
    
    const sortBy = document.getElementById('sortSelect').value;
    filtered = sortProducts(filtered, sortBy);
    
    renderProducts(filtered);
}

function getCheckedValues(filterType) {
    const checkboxes = document.querySelectorAll(`input[data-filter="${filterType}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

function sortProducts(products, sortBy) {
    switch(sortBy) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name-asc':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return [...products].sort((a, b) => b.name.localeCompare(a.name));
        case 'newest':
            return [...products].reverse();
        default:
            return products;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    }
    updateWishlistUI();
    renderProducts(getCurrentFilteredProducts());
}

function updateWishlistUI() {
    const wishlistCount = document.querySelector('.wishlist-count');
    wishlistCount.textContent = wishlist.length;
}

function getCurrentFilteredProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const selectedCategories = getCheckedValues('category');
    const selectedBrands = getCheckedValues('brand');
    const selectedRAM = getCheckedValues('ram');
    const selectedStorage = getCheckedValues('storage');
    const selectedAvailability = getCheckedValues('availability');
    
    return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                              product.brand.toLowerCase().includes(searchTerm) ||
                              product.category.toLowerCase().includes(searchTerm);
        const matchesPrice = product.price <= maxPrice;
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesRAM = selectedRAM.length === 0 || selectedRAM.some(ram => product.specs.ram.includes(ram));
        const matchesStorage = selectedStorage.length === 0 || selectedStorage.some(storage => product.specs.storage.includes(storage));
        const matchesAvailability = selectedAvailability.length === 0 || selectedAvailability.includes(product.availability);
        
        return matchesSearch && matchesPrice && matchesCategory && matchesBrand && matchesRAM && matchesStorage && matchesAvailability;
    });
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    
    content.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-details">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h2>${product.name}</h2>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <div class="product-specs">
                    <div class="product-spec">
                        <i class="fas fa-microchip"></i>
                        <span>${product.specs.processor}</span>
                    </div>
                    <div class="product-spec">
                        <i class="fas fa-memory"></i>
                        <span>${product.specs.ram}</span>
                    </div>
                    <div class="product-spec">
                        <i class="fas fa-hdd"></i>
                        <span>${product.specs.storage}</span>
                    </div>
                    <div class="product-spec">
                        <i class="fas fa-desktop"></i>
                        <span>${product.specs.display}</span>
                    </div>
                </div>
                <div class="quick-view-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal()">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-outline" onclick="toggleWishlist(${product.id}); openQuickView(${product.id})">
                        <i class="fas fa-heart"></i> ${wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('quickViewModal');
    modal.classList.remove('active');
}

function clearAllFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('priceRange').value = 4000;
    document.getElementById('priceValue').textContent = '$4000';
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'default';
    renderProducts();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxAmount = totalPrice * 0;
    
    cartCount.textContent = totalItems;
    subtotal.textContent = `$${totalPrice.toLocaleString()}`;
    tax.textContent = `$${taxAmount.toLocaleString()}`;
    total.textContent = `$${totalPrice.toLocaleString()}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="#products" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    updateOrderReview();
}

function updateOrderReview() {
    const orderReviewItems = document.getElementById('orderReviewItems');
    const reviewSubtotal = document.getElementById('reviewSubtotal');
    const reviewTax = document.getElementById('reviewTax');
    const reviewTotal = document.getElementById('reviewTotal');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxAmount = totalPrice * 0;
    
    orderReviewItems.innerHTML = cart.map(item => `
        <div class="review-item">
            <span class="review-item-name">${item.name} x${item.quantity}</span>
            <span class="review-item-price">$${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `).join('');
    
    reviewSubtotal.textContent = `$${totalPrice.toLocaleString()}`;
    reviewTax.textContent = `$${taxAmount.toLocaleString()}`;
    reviewTotal.textContent = `$${totalPrice.toLocaleString()}`;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function getPaymentInfo(paymentMethod) {
    const paymentMethods = {
        jazzcash: {
            name: 'JazzCash',
            details: 'Account: 0300-1234567 (JazzCash)'
        },
        easypaisa: {
            name: 'EasyPaisa',
            details: 'Account: 0345-7654321 (EasyPaisa)'
        },
        bank: {
            name: 'Bank Transfer',
            details: 'Bank: HBL\nAccount Title: TechStore\nAccount Number: 1234-5678-9012'
        },
        card: {
            name: 'Credit/Debit Card',
            details: 'Payment will be processed upon order confirmation'
        }
    };
    return paymentMethods[paymentMethod] || paymentMethods.jazzcash;
}

function updatePaymentDetails() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const paymentDetails = document.getElementById('paymentDetails');
    const paymentInfo = getPaymentInfo(paymentMethod);
    
    paymentDetails.innerHTML = `
        <div class="payment-info-box">
            <h5>Payment Information:</h5>
            <p>${paymentInfo.details.replace(/\n/g, '<br>')}</p>
        </div>
    `;
}

function generateWhatsAppMessage(orderData) {
    const items = orderData.items.map(item => 
        `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const paymentInfo = getPaymentInfo(orderData.paymentMethod);
    
    const message = `🛒 *NEW ORDER - TECHSTORE*

👤 *Customer Details:*
Name: ${orderData.name}
Email: ${orderData.email}
Phone: ${orderData.phone}
Address: ${orderData.address}

📦 *Order Items:*
${items}

💰 *Total: $${orderData.total.toLocaleString()}*

💳 *Payment Method:* ${paymentInfo.name}
${paymentInfo.details}

📝 *Notes:* ${orderData.notes || 'None'}

_Thank you for your order!_`;
    
    return encodeURIComponent(message);
}

function generateEmailSubject(orderData) {
    return `New Order - TechStore - ${orderData.name} - $${orderData.total.toLocaleString()}`;
}

function generateEmailBody(orderData) {
    const items = orderData.items.map(item => 
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const paymentInfo = getPaymentInfo(orderData.paymentMethod);
    
    return `NEW ORDER - TECHSTORE

Customer Details:
-----------------
Name: ${orderData.name}
Email: ${orderData.email}
Phone: ${orderData.phone}
Address: ${orderData.address}

Order Items:
------------
${items}

Total: $${orderData.total.toLocaleString()}

Payment Method: ${paymentInfo.name}
${paymentInfo.details}

Notes: ${orderData.notes || 'None'}

Thank you for your order!`;
}

function placeOrder(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value;
    const orderMethod = document.querySelector('input[name="orderMethod"]:checked').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const orderData = {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        address,
        notes,
        items: cart,
        total: totalPrice,
        paymentMethod
    };
    
    if (orderMethod === 'whatsapp') {
        const message = generateWhatsAppMessage(orderData);
        const whatsappNumber = '923079398190';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    } else if (orderMethod === 'email') {
        const subject = generateEmailSubject(orderData);
        const body = generateEmailBody(orderData);
        const emailURL = `mailto:dockya18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = emailURL;
    }
    
    userOrders.push({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        items: [...cart],
        total: totalPrice,
        status: 'Processing'
    });
    
    showNotification('Order placed successfully!');
    
    cart = [];
    updateCartUI();
    document.getElementById('orderForm').reset();
    
    document.getElementById('checkout').classList.add('hidden');
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    currentUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: email,
        phone: '+923079398190',
        address: 'Karachi, Pakistan'
    };
    
    showNotification('Welcome back! Login successful.');
    
    updateAuthUI();
    document.getElementById('loginForm').reset();
    
    document.getElementById('login').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}

function handleSignup(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!');
        return;
    }
    
    currentUser = {
        firstName,
        lastName,
        email,
        phone,
        address: ''
    };
    
    showNotification('Account created successfully! Welcome to TechStore.');
    
    updateAuthUI();
    document.getElementById('signupForm').reset();
    
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}

function handleLogout() {
    currentUser = null;
    
    showNotification('Logged out successfully.');
    
    updateAuthUI();
    
    document.getElementById('profile').classList.add('hidden');
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userBtn = document.getElementById('userBtn');
    
    if (currentUser) {
        loginBtn.classList.add('hidden');
        userBtn.classList.remove('hidden');
        
        document.getElementById('profileName').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
        document.getElementById('profileEmail').textContent = currentUser.email;
        document.getElementById('totalOrders').textContent = userOrders.length;
        document.getElementById('wishlistCount').textContent = wishlist.length;
        
        document.getElementById('settingsFirstName').value = currentUser.firstName;
        document.getElementById('settingsLastName').value = currentUser.lastName;
        document.getElementById('settingsEmail').value = currentUser.email;
        document.getElementById('settingsPhone').value = currentUser.phone;
        document.getElementById('settingsAddress').value = currentUser.address || '';
    } else {
        loginBtn.classList.remove('hidden');
        userBtn.classList.add('hidden');
    }
}

function handleProfileTabClick(event) {
    event.preventDefault();
    
    const tabName = event.currentTarget.dataset.tab;
    
    document.querySelectorAll('.profile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
    
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(`${tabName}Tab`).classList.add('active');
    
    if (tabName === 'wishlist') {
        renderWishlistProducts();
    }
}

function renderWishlistProducts() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-heart"></i>
                <h3>Your wishlist is empty</h3>
                <p>Start adding products you love!</p>
                <a href="#products" class="btn btn-primary">Browse Products</a>
            </div>
        `;
    } else {
        const wishlistProducts = products.filter(product => wishlist.includes(product.id));
        wishlistGrid.innerHTML = wishlistProducts.map(product => `
            <div class="product-card">
                <div class="product-actions">
                    <button class="product-action-btn wishlisted" onclick="toggleWishlist(${product.id}); renderWishlistProducts()">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="product-action-btn" onclick="openQuickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">$${product.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function handleSettingsSave(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('settingsFirstName').value;
    const lastName = document.getElementById('settingsLastName').value;
    const email = document.getElementById('settingsEmail').value;
    const phone = document.getElementById('settingsPhone').value;
    const address = document.getElementById('settingsAddress').value;
    
    currentUser = {
        ...currentUser,
        firstName,
        lastName,
        email,
        phone,
        address
    };
    
    showNotification('Settings saved successfully!');
    
    updateAuthUI();
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm.length < 2) {
        renderProducts();
        return;
    }
    
    const filtered = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) ||
               product.brand.toLowerCase().includes(searchTerm) ||
               product.category.toLowerCase().includes(searchTerm);
    });
    
    renderProducts(filtered);
}

function showWishlistSection() {
    document.getElementById('wishlist').classList.remove('hidden');
    document.getElementById('wishlist').scrollIntoView({ behavior: 'smooth' });
}

function showLoginSection() {
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
}

function showSignupSection() {
    document.getElementById('signup').classList.remove('hidden');
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

function showProfileSection() {
    if (!currentUser) {
        showNotification('Please login first!');
        showLoginSection();
        return;
    }
    
    document.getElementById('profile').classList.remove('hidden');
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    
    document.getElementById('priceRange').addEventListener('input', (e) => {
        document.getElementById('priceValue').textContent = `$${e.target.value}`;
    });
    
    document.getElementById('sortSelect').addEventListener('change', () => {
        handleSearch();
    });
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            handleSearch();
        });
    });
    
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    
    document.getElementById('loginBtn').addEventListener('click', showLoginSection);
    
    document.getElementById('userBtn').addEventListener('click', showProfileSection);
    
    document.getElementById('wishlistBtn').addEventListener('click', showWishlistSection);
    
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    document.getElementById('settingsForm').addEventListener('submit', handleSettingsSave);
    
    document.querySelectorAll('.profile-nav-link').forEach(link => {
        link.addEventListener('click', handleProfileTabClick);
    });
    
    document.querySelectorAll('a[href="#login"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginSection();
        });
    });
    
    document.querySelectorAll('a[href="#signup"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSignupSection();
        });
    });
    
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);
    
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            const productsGrid = document.getElementById('productsGrid');
            if (currentView === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
        });
    });
    
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        document.getElementById('cart').classList.add('hidden');
        document.getElementById('checkout').classList.remove('hidden');
        document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('backToCart').addEventListener('click', () => {
        document.getElementById('checkout').classList.add('hidden');
        document.getElementById('cart').classList.remove('hidden');
        document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('orderForm').addEventListener('submit', placeOrder);
    
    const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', updatePaymentDetails);
    });
    updatePaymentDetails();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const brand = card.dataset.brand;
            document.querySelectorAll('input[data-filter="brand"]').forEach(cb => {
                cb.checked = cb.value === brand;
            });
            applyFilters();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNavLinks = document.querySelector('.main-nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        mainNavLinks.classList.toggle('active');
    });
    
    document.getElementById('closeQuickView').addEventListener('click', closeModal);
    
    document.getElementById('quickViewModal').addEventListener('click', (e) => {
        if (e.target.id === 'quickViewModal') {
            closeModal();
        }
    });
    
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully! We will get back to you soon.');
        contactForm.reset();
    });
    
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
});