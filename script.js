// Initial balance
let balance = 5000;

// Function to handle form submission
function submitForm() {
  // Get form values
  const firstName = document.getElementById("F-name").value;
  const lastName = document.getElementById("L-name").value;
  const cardNumber = document.getElementById("Card-no").value;
  const cvv = document.getElementById("cvv").value;
  const expirationDate = document.getElementById("Expiration-date").value;
  const amount = document.getElementById("Amount-2").value;

  // check the mendatory fields
  if (
    !firstName ||
    !lastName ||
    !cardNumber ||
    !cvv ||
    !expirationDate ||
    !amount
  ) {
    alert("Please fill in all the mandatory fields.");
    return;
  }

  // Convert the entered amount to a number
  const enteredAmount = Number(amount).toFixed(1);

  // Validate the entered amount
  if (isNaN(enteredAmount) || enteredAmount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  // Check if the entered amount is greater than the current balance
  if (enteredAmount > balance) {
    alert("Insufficient balance. Please enter a smaller amount.");
    return;
  }

  // Update the balance by subtracting the entered amount
  balance -= enteredAmount;

  // Update the balance displayed on the page
  document.getElementById("balanceAmount").innerText = balance;
  alert("Now your balance has been updated according to the transaction");
}

document.querySelector(".button").addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the submitForm function to handle the payment process
  submitForm();
});
