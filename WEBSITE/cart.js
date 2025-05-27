// Get the cart items from localStorage (if any)
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Display the cart items
const cartItemsList = document.getElementById('cartItemsList');

if (cartItems.length === 0) {
  cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
} else {
  cartItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.textContent = item;
    cartItemsList.appendChild(itemDiv);
  });
}

// Handle checkout
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
  alert('Proceeding to checkout...');
});
