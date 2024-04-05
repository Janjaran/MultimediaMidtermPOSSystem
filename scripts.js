// JavaScript code for the POS system

// Function to add item to the order list
function addToOrder(itemName, itemPrice, quantity) {
    const orderedItemsList = document.querySelector('.ordered-items-list');
    const totalPriceSpan = document.getElementById('total-amount');
  
    const itemTotalPrice = parseFloat(itemPrice) * parseInt(quantity);
    
    // Create a new item element
    const newItem = document.createElement('div');
    newItem.classList.add('ordered-item');
    newItem.innerHTML = `
      <p>${itemName} x ${quantity}</p>
      <p>$${itemTotalPrice.toFixed(2)}</p>
    `;
    
    // Append the new item to the ordered items list
    orderedItemsList.appendChild(newItem);
    
    // Update the total amount
    let totalPrice = parseFloat(totalPriceSpan.innerText);
    totalPrice += itemTotalPrice;
    totalPriceSpan.innerText = totalPrice.toFixed(2);
  }
  
  // Function to calculate change and display it
  function calculateChange(totalAmount, paidAmount) {
    const changeDisplay = document.getElementById('change');
    const change = parseFloat(paidAmount) - parseFloat(totalAmount);
    if (change >= 0) {
      changeDisplay.innerText = `Change: $${change.toFixed(2)}`;
    } else {
      changeDisplay.innerText = 'Insufficient payment!';
    }
  }
  
  // Event listener for 'Add to Order' button
  document.querySelectorAll('.menu-item').forEach((item) => {
    const addButton = item.querySelector('button');
    addButton.addEventListener('click', () => {
      const itemName = item.querySelector('h3').innerText;
      const itemPrice = item.querySelector('p').innerText.split(':')[1].trim();
      const quantity = parseInt(item.querySelector('input').value);
      addToOrder(itemName, itemPrice, quantity);
    });
  });
  
  // Event listener for 'Pay' button
  document.getElementById('pay-btn').addEventListener('click', () => {
    const totalAmount = document.getElementById('total-amount').innerText;
    const paidAmount = document.querySelector('.payment input').value;
    calculateChange(totalAmount, paidAmount);
  });
  