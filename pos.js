// Function to add items to the ordered list
function addToOrder(itemName, itemPrice, quantity) {
    var orderedItemsList = document.querySelector(".ordered-items-list");
    var itemTotal = itemPrice * quantity;
    var itemDisplay = itemName + " (" + quantity + "x)";
    var listItem = document.createElement("p");
    listItem.textContent = itemDisplay;
    orderedItemsList.appendChild(listItem);
    updateTotal(itemTotal); // Update total amount
}

// Function to update the total amount
function updateTotal(amount) {
    var totalAmount = document.getElementById("total-amount");
    var currentTotal = parseFloat(totalAmount.textContent.replace("PHP ", ""));
    totalAmount.textContent = + (currentTotal + amount).toFixed(2); // Fixing the amount to 2 decimal places
}

// Add event listeners to "Add to Order" buttons
var addToOrderButtons = document.querySelectorAll(".menu-item button");
addToOrderButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var menuItem = this.parentElement.parentElement;
        var itemName = menuItem.querySelector("h3").textContent;
        var itemPrice = parseFloat(menuItem.querySelector("p").textContent.replace("Price: PHP ", ""));
        var quantity = parseInt(menuItem.querySelector("input").value);
        if (!isNaN(quantity) && quantity > 0) {
            addToOrder(itemName, itemPrice, quantity);
        } else {
            alert("Please enter a valid quantity.");
        }
    });
});

// Function to handle payment
document.getElementById("pay-btn").addEventListener("click", function () {
    var totalAmount = parseFloat(document.getElementById("total-amount").textContent.replace("PHP ", ""));
    var amountPaid = parseFloat(document.querySelector(".payment input").value);
    var change = amountPaid - totalAmount;
    if (!isNaN(change)) {
        if (change >= 0) {
            alert("Thanks for ordering! Your change is PHP " + change.toFixed(2));
            resetOrderedItems(); // Reset the ordered items list
            updateTotal(-totalAmount); // Update the total amount to 0 after resetting
        } else {
            alert("Insufficient amount paid.");
        }
    } else {
        alert("Error: Unable to calculate change.");
    }
});

// Function to reset the ordered items list
function resetOrderedItems() {
    var orderedItemsList = document.querySelector(".ordered-items-list");
    orderedItemsList.innerHTML = ""; // Clear the content of the list
}

function resetReceipt() {
    var receiptItemsList = document.querySelector(".receipt-items-list");
    receiptItemsList.innerHTML = ""; // Clear the content of the receipt
}