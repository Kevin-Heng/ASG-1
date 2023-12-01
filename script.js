
  // script.js

  // Initialize quantity variable
  let quantity = 1;

  // Function to increase quantity
  function increaseQuantity() {
    quantity++;
    updateQuantity();
  }

  // Function to decrease quantity
  function decreaseQuantity() {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  }

  // Function to update the displayed quantity
  function updateQuantity() {
    document.getElementById('quantity').textContent = quantity;
  }



