function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmpassword");
  var phone = document.getElementById("phone");
  var dateOfBirth = document.getElementById("date");

  var nameError = document.getElementById("nameerror");
  var emailError = document.getElementById("emailerror");
  var passwordError = document.getElementById("passworderror");
  var confirmPasswordError = document.getElementById("confirmpassworderror");
  var phoneError = document.getElementById("phoneerror");
  var dateError = document.querySelector(".dateerror");

  var isValid = true;

  // Name validation
  if (name.value.trim() === "") {
      name.classList.add("invalid");
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      isValid = false;
  } else if (!/^[\w\s]{3,}$/.test(name.value.trim())) {
      name.classList.add("invalid");
      nameError.textContent = "Name must be at least 3 characters long"
      
      nameError.style.display = "block";
      isValid = false;
  } else {
      name.classList.remove("invalid");
      nameError.style.display = "none";
  }

  // Email validation
  if (email.value === "") {
      email.classList.add("invalid");
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      email.classList.add("invalid");
      emailError.textContent = "Invalid email format";
      emailError.style.display = "block";
      isValid = false;
  } else {
      email.classList.remove("invalid");
      emailError.style.display = "none";
  }

  // Password validation
  if (password.value === "") {
      password.classList.add("invalid");
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password.value)) {
      password.classList.add("invalid");
      passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      passwordError.style.display = "block";
      isValid = false;
  } else {
      password.classList.remove("invalid");
      passwordError.style.display = "none";
  }

  // Confirm Password validation
  if (confirmPassword.value === "") {
      confirmPassword.classList.add("invalid");
      confirmPasswordError.textContent = "Confirm Password is required";
      confirmPasswordError.style.display = "block";
      isValid = false;
  } else if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add("invalid");
      confirmPasswordError.textContent = "Passwords do not match";
      confirmPasswordError.style.display = "block";
      isValid = false;
  } else {
      confirmPassword.classList.remove("invalid");
      confirmPasswordError.style.display = "none";
  }

  // Phone validation
  if (phone.value === "") {
      phone.classList.add("invalid");
      phoneError.textContent = "Phone is required";
      phoneError.style.display = "block";
      isValid = false;
  } else if (!/^\d{10}$/.test(phone.value)) {
      phone.classList.add("invalid");
      phoneError.textContent = "Invalid phone number format";
      phoneError.style.display = "block";
      isValid = false;
  } else {
      phone.classList.remove("invalid");
      phoneError.style.display = "none";
  }

  // Date of Birth validation
  var today = new Date();
  var dob = new Date(dateOfBirth.value);
  if (dateOfBirth.value === "") {
      dateOfBirth.classList.add("invalid");
      dateError.textContent = "Date Of Birth is required";
      dateError.style.display = "block";
      isValid = false;
  } else if (dob >= today) {
      dateOfBirth.classList.add("invalid");
      dateError.textContent = "Invalid Date Of Birth";
      dateError.style.display = "block";
      isValid = false;
  } else {
      dateOfBirth.classList.remove("invalid");
      dateError.style.display = "none";
  }

  return isValid;
}
function calculatePasswordStrength(password) {
  // Define the regular expressions to check for various aspects of password strength
  var hasLowercase = /[a-z]/.test(password);
  var hasUppercase = /[A-Z]/.test(password);
  var hasNumbers = /\d/.test(password);
  var hasSpecialChars = /[^A-Za-z0-9]/.test(password);

  // Calculate the number of criteria fulfilled
  var criteriaCount = hasLowercase + hasUppercase + hasNumbers + hasSpecialChars;

  // Calculate the strength based on criteria fulfilled
  var strength = criteriaCount * 25;

  return strength;
}




// Attach the updatePasswordStrength function to the password field's input event
// Initialize password strength indicator when the page loads




function updatePasswordStrength() {
  var password = document.getElementById("password").value;
  var strength = calculatePasswordStrength(password);
  var strengthIndicator = document.getElementById("password-strength-indicator");

  if (password === "") {
      strengthIndicator.style.display = "none";
  } else {
      strengthIndicator.style.display = "block";
      // Update the strength indicator text based on the calculated strength
      if (strength < 50) {
          strengthIndicator.textContent = "Weak";
      } else if (strength < 75) {
          strengthIndicator.textContent = "Moderate";
      } else if (strength < 100) {
          strengthIndicator.textContent = "Strong";
      } else {
          strengthIndicator.textContent = "Very Strong";
      }
  }
}

// Attach the updatePasswordStrength function to the password field's input event
document.getElementById("password").addEventListener("input", updatePasswordStrength);

var countdownDuration = 60; // 60 seconds

// Get the countdown element
var countdownElement = document.getElementById('countdown');

// Function to update the countdown timer
function updateCountdown() {
  countdownElement.textContent = 'Session expires in ' + countdownDuration + ' seconds';
   
  if (countdownDuration === 0) {
    clearInterval(countdownTimer); // Stop the countdown timer
    // Reload the page when the timer expires
    location.reload();
  } else {
    countdownDuration--; // Decrement the countdown duration
  }
}

// Call the updateCountdown function initially
updateCountdown();

// Set up an interval to update the countdown every second
var countdownTimer = setInterval(updateCountdown, 1000);