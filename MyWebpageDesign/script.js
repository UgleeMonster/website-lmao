window.addEventListener('load', () => {
  spawnFireflies(30); // Spawn fireflies when the page loads
});

// Function to spawn fireflies
function spawnFireflies(count) {
  const container = document.getElementById('fireflies-container');
  
  for (let i = 0; i < count; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    // Randomize size of the fireflies
    const size = Math.random() * 4 + 2; // Random size between 2px and 6px
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;

    // Randomize the position of the fireflies within the viewport
    firefly.style.left = `${Math.random() * window.innerWidth}px`;
    firefly.style.top = `${Math.random() * window.innerHeight}px`;

    // Append the firefly to the container
    container.appendChild(firefly);

    // Start random floating behavior for the firefly
    floatRandomly(firefly);
    randomBlink(firefly);  // Add random blinking
  }
}

// Function to make fireflies float randomly
function floatRandomly(firefly) {
  const move = () => {
    // Randomly determine the next position for the firefly
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    const duration = Math.random() * 8000 + 5000; // Slower movement duration between 5 and 13 seconds

    // Animate the movement of the firefly
    firefly.animate([
      { transform: `translate(${0}px, ${0}px)` },
      { transform: `translate(${newX - firefly.offsetLeft}px, ${newY - firefly.offsetTop}px)` }
    ], {
      duration: duration,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    // Update position after animation completes
    setTimeout(() => {
      firefly.style.left = `${newX}px`;
      firefly.style.top = `${newY}px`;
      floatRandomly(firefly); // Continue to move the firefly randomly
    }, duration);
  };

  move();
}

// Function to make fireflies blink randomly
function randomBlink(firefly) {
  const blinkInterval = Math.random() * 10000 + 5000; // Random blink interval between 5 to 15 seconds

  // Randomize blink duration (slower blinking)
  const blinkDuration = Math.random() * 5000 + 5000; // Random blink duration between 5 to 10 seconds

  setTimeout(() => {
    firefly.style.animation = `blink ${blinkDuration / 1000}s ease-in-out infinite`; // Slow blink over random duration
  }, blinkInterval);
}
