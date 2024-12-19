
    // Add to cart function
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product is already in the cart
        const existingProduct = cart.find(p => p.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;  
        } else {
            cart.push({ ...product, quantity: 1 }); 
        }

        localStorage.setItem("cart", JSON.stringify(cart));  // Store updated cart in localStorage
        alert(`${product.name} has been added to the cart!`);
    
        // Update cart count
        updateCartCount();
    }
      
      
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);  // Sum the quantities
    
        const cartCountElement = document.getElementById("cartCount");
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;  // Update the count on the page
        }
    }
    

    document.addEventListener("DOMContentLoaded", function() {
        updateCartCount(); 
    });
      