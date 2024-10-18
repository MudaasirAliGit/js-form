// Create a user registration form using HTML and JavaScript,
// where users can fill in their details. The form should have
// validation for each input field to ensure that users enter 
// the correct data before submitting.
// Design a registration form with the following fields:
// Name
// Email
// Phone Number (10 digits)
// Date of Birth (use date picker)
// Gender (dropdown menu: Male, Female, Other)
// Age
// Password (minimum 6 characters)
// Confirm Password (must match the password)
// Address
// City
// Use JavaScript to add validation to the form:
// All fields should be required.
// Ensure the email is in a valid format.
// Validate that the phone number is exactly 10 digits.
// Ensure passwords match.
// Age should be a valid number between 1 and 120.
// Display error messages under each field if the input is incorrect.
// Keep the design basic and clear.
// Ensure users get feedback when they enter incorrect data.
// Use easy-to-understand error messages and make sure users can easily navigate the form.

let Name = document.getElementById('name').value;
let Email = document.getElementById('email').value;
let Num = document.getElementById('pnumber').value;
let DateOfBirth = document.getElementById('date').value;
let Gender = document.getElementById('gender').value;
let Age = document.getElementById('age').value;
let Password = document.getElementById('password').value;
let ConfirmPassword = document.getElementById('confirm-password').value;
let Address = document.getElementById('address').value;
let CityName = document.getElementById('city-name').value;


function getInputValue(){
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Num = document.getElementById('pnumber').value;
    let DateOfBirth = document.getElementById('date').value;
    let Gender = document.getElementById('gender').value;
    let Age = document.getElementById('age').value;
    let Password = document.getElementById('password').value;
    let ConfirmPassword = document.getElementById('confirm-password').value;
    let Address = document.getElementById('address').value;
    let CityName = document.getElementById('city-name').value;
}

console.log(getInputValue(Name));

function show(){
    let check = document.getElementById('show')
    let inputPassword = document.getElementById('password');
    let inputPassword2 = document.getElementById('confirm-password');
    if(check.checked){
        inputPassword.type = 'text';
        inputPassword2.type = 'text';
    }
    else{
        inputPassword.type = 'password';
        inputPassword2.type = 'password';
    }
}

function validateEmail() {
    // Regular expression for basic email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Test the email against the pattern
    if (!emailPattern.test(email)) {
        
    }
  }
  
  // Example usage:
  let email = "example@example.com";
  if (validateEmail(email)) {
    console.log("Valid email address!");
  } else {
    console.log("Invalid email address!");
  }
  
// Function to validate the registration form
function validateForm() {
    let valid = true;

    // Get all input values again
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('pnumber').value.trim();
    let age = document.getElementById('age').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm-password').value.trim();

    // Clear previous error messages
    clearErrors();

    // Name validation
    if (name === "") {
        showError('nameError', 'Name is required');
        valid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Invalid email format');
        valid = false;
    }

    // Phone number validation (exactly 10 digits)
    if (phone.length !== 10 || isNaN(phone)) {
        showError('pnumberError', 'Phone number must be exactly 10 digits');
        valid = false;
    }

    // Age validation (between 1 and 120)
    if (age < 1 || age > 120 || isNaN(age)) {
        showError('ageError', 'Age must be a number between 1 and 120');
        valid = false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long');
        valid = false;
    }

    // Confirm Password validation (must match the password)
    if (password !== confirmPassword) {
        showError('confirmpasswordError', 'Passwords do not match');
        valid = false;
    }

    return valid;
}

// Helper function to display error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
    document.getElementById(elementId).style.display = 'block'; // Ensure it becomes visible
}

// Helper function to clear all error messages
function clearErrors() {
    let errorElements = document.querySelectorAll('p[id$="Error"]');
    errorElements.forEach(function(el) {
        el.textContent = '';
        el.style.display = 'none'; // Hide the element when there's no error
    });
}

// Adding validation to the form submission
document.getElementById('submit').addEventListener('click', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Chatgpt code
// Function to validate the registration form
function validateForm() {
  let valid = true;

  // Get all input values again
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('pnumber').value.trim();
  let age = document.getElementById('age').value.trim();
  let password = document.getElementById('password').value.trim();
  let confirmPassword = document.getElementById('confirm-password').value.trim();

  // Clear previous error messages
  clearErrors();

  // Name validation
  if (name === "") {
      showError('nameError', 'Name is required');
      valid = false;
  }

  // Email validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      showError('emailError', 'Invalid email format');
      valid = false;
  }

  // Phone number validation (exactly 10 digits)
  if (phone.length !== 10 || isNaN(phone)) {
      showError('pnumberError', 'Phone number must be exactly 10 digits');
      valid = false;
  }

  // Age validation (between 1 and 120)
  if (age < 1 || age > 120 || isNaN(age)) {
      showError('ageError', 'Age must be a number between 1 and 120');
      valid = false;
  }

  // Password validation (minimum 6 characters)
  if (password.length < 6) {
      showError('passwordError', 'Password must be at least 6 characters long');
      valid = false;
  }

  // Confirm Password validation (must match the password)
  if (password !== confirmPassword) {
      showError('confirmpasswordError', 'Passwords do not match');
      valid = false;
  }

  return valid;
}

// Helper function to display error messages
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
  document.getElementById(elementId).style.display = 'block'; // Ensure it becomes visible
}

// Helper function to clear all error messages
function clearErrors() {
  let errorElements = document.querySelectorAll('p[id$="Error"]');
  errorElements.forEach(function(el) {
      el.textContent = '';
      el.style.display = 'none'; // Hide the element when there's no error
  });
}

// Adding validation to the form submission
document.getElementById('submit').addEventListener('click', function(event) {
  if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
  }
});
