function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.querySelector(".cart-page .col-lg-8");
    const cartSummary = document.querySelector(".cart-summary");
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty!</p>";
      cartSummary.style.display = "none";
      return;
    }
  
    let subtotal = 0;
    cartContainer.innerHTML = "";
  
    cart.forEach(item => {
      subtotal += item.price * item.quantity;
      cartContainer.innerHTML += `
        <div class="cart-item d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex align-items-center">
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
            <div class="ms-3">
              <h5>${item.name}</h5>
              <p class="text-muted">$${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <input 
              type="number" 
              value="${item.quantity}" 
              class="form-control w-25 me-3" 
              onchange="updateQuantity(${item.id}, this.value)">
            <p class="fw-bold mt-3">$${(item.price * item.quantity).toFixed(2)}</p>
            <button class="btn btn-danger btn-sm ms-2 rounded-4" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `;
    });
  
    // Update Cart Summary
    cartSummary.style.display = "block";
    const shipping = 1.00;
    cartSummary.innerHTML = `
      <h4>Cart Summary</h4>
      <div class="d-flex justify-content-between">
        <p>Subtotal</p>
        <p class="fw-bold">$${subtotal.toFixed(2)}</p>
      </div>
      <div class="d-flex justify-content-between">
        <p>Shipping</p>
        <p class="fw-bold">$${shipping.toFixed(2)}</p>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <p>Total</p>
        <p class="fw-bold">$${(subtotal + shipping).toFixed(2)}</p>
      </div>
      <button class="btn btn-primary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#checkoutModal">
        Proceed to Checkout
      </button>

    `;
  }
  
  // Update Quantity
  function updateQuantity(productId, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const product = cart.find(item => item.id === productId);
  
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
  
    product.quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
  }
  
  // Remove Item
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
  }
  
  // Load Cart on Page Load
  document.addEventListener("DOMContentLoaded", loadCart);


  document.getElementById("submitPayment").addEventListener("click", function () {
const cardName = document.getElementById("cardName").value;
const cardNumber = document.getElementById("cardNumber").value;
const cardExpiry = document.getElementById("cardExpiry").value;
const cardCVC = document.getElementById("cardCVC").value;
const billingAddress = document.getElementById("billingAddress").value;

// Basic Validation
if (!cardName || !cardNumber || !cardExpiry || !cardCVC || !billingAddress) {
alert("Please fill in all fields.");
return;
}

if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
alert("Invalid card number. Please enter a 16-digit number.");
return;
}

if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
alert("Invalid expiry date format. Use MM/YY.");
return;
}

if (!/^\d{3}$/.test(cardCVC)) {
alert("Invalid CVC. Enter a 3-digit number.");
return;
}

// Show Success Animation
document.getElementById("checkoutForm").classList.add("d-none");
document.getElementById("successAnimation").classList.remove("d-none");

setTimeout(() => {
// Close Modal
const modal = bootstrap.Modal.getInstance(document.getElementById("checkoutModal"));
modal.hide();

// Clear Cart
localStorage.removeItem("cart");
updateCartCount();

// Reset Form
document.getElementById("checkoutForm").reset();
document.getElementById("checkoutForm").classList.remove("d-none");
document.getElementById("successAnimation").classList.add("d-none");

// Redirect (optional)
window.location.href = "index.html";
}, 4000); // 4 seconds for the animation
});