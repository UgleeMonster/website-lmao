// Function to handle the Add to Cart action with animation
document.getElementById('addToCartBtn').addEventListener('click', function() {
  // Create the floating ball of light element
  const ball = document.createElement('div');
  ball.classList.add('floating-ball');
  ball.style.left = `${this.getBoundingClientRect().left + this.offsetWidth / 2}px`;
  ball.style.top = `${this.getBoundingClientRect().top + this.offsetHeight / 2}px`;
  
  // Append the ball to the body and animate it
  document.body.appendChild(ball);
  
  // Start the animation of the ball going to the cart
  const cartButton = document.getElementById('cartBtn');
  const cartRect = cartButton.getBoundingClientRect();

  ball.style.animation = `moveToCart 1s ease-in-out forwards`;

  // Set the final position of the ball (where the cart button is)
  ball.style.left = `${cartRect.left + cartButton.offsetWidth / 2}px`;
  ball.style.top = `${cartRect.top + cartButton.offsetHeight / 2}px`;

  // After the animation is finished, remove the ball and update the cart
  setTimeout(() => {
    ball.remove();
    updateCart();  // Function to update cart
  }, 1000);
});

// Function to update the cart
function updateCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartBadge = document.getElementById('cartBadge');
  
  // Add the new item to the cart (in this case, a placeholder item)
  cartItems.push({
    item: 'Royal Blood',
    price: '$19.99'
  });

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cartItems));

  // Update cart icon (badge or item count)
  cartBadge.innerText = cartItems.length;
}

// Buy Now Button (redirecting to another page)
document.getElementById('buyNowBtn').addEventListener('click', function() {
  window.location.href = 'checkout.html';  // Redirects to checkout page (to be created later)
});

// Load cart from localStorage when the page loads
window.addEventListener('load', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartBadge = document.getElementById('cartBadge');
  
  cartBadge.innerText = cartItems.length;
});

