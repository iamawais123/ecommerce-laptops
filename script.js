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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
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
        icon: "fa-gamepad"
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
        icon: "fa-gamepad"
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
        icon: "fa-laptop"
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
        icon: "fa-briefcase"
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
        icon: "fa-gamepad"
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
        icon: "fa-laptop"
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
        icon: "fa-gamepad"
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
        icon: "fa-gamepad"
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
        icon: "fa-briefcase"
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
        icon: "fa-gamepad"
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
        icon: "fa-gamepad"
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
        icon: "fa-laptop"
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
        icon: "fa-tablet-alt"
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
        icon: "fa-briefcase"
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
        icon: "fa-briefcase"
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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
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
        icon: "fa-briefcase"
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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
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
        icon: "fa-gamepad"
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
        icon: "fa-gamepad"
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
        icon: "fa-gamepad"
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
        icon: "fa-laptop"
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
        icon: "fa-laptop"
    }
];

let cart = [];

function renderProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
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

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    subtotal.textContent = `$${totalPrice.toLocaleString()}`;
    total.textContent = `$${totalPrice.toLocaleString()}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
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
    const reviewTotal = document.getElementById('reviewTotal');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    orderReviewItems.innerHTML = cart.map(item => `
        <div class="review-item">
            <span class="review-item-name">${item.name} x${item.quantity}</span>
            <span class="review-item-price">$${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `).join('');
    
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

function generateWhatsAppMessage(orderData) {
    const items = orderData.items.map(item => 
        `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = `🛒 *NEW ORDER - TECHSTORE*

👤 *Customer Details:*
Name: ${orderData.name}
Email: ${orderData.email}
Phone: ${orderData.phone}
Address: ${orderData.address}

📦 *Order Items:*
${items}

💰 *Total: $${orderData.total.toLocaleString()}*

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

Notes: ${orderData.notes || 'None'}

Thank you for your order!`;
}

function placeOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value;
    const orderMethod = document.querySelector('input[name="orderMethod"]:checked').value;
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const orderData = {
        name,
        email,
        phone,
        address,
        notes,
        items: cart,
        total: totalPrice
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
    
    showNotification('Order placed successfully!');
    
    cart = [];
    updateCartUI();
    document.getElementById('orderForm').reset();
    
    document.getElementById('checkout').classList.add('hidden');
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProducts(button.dataset.filter);
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
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        renderFilteredProducts(filteredProducts);
    });
    
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const brand = card.dataset.brand;
            const filteredProducts = products.filter(product => product.brand === brand);
            renderFilteredProducts(filteredProducts);
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
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

function renderFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
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