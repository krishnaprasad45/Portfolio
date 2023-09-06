function validation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;
  var nameValidation = /^[A-Za-z]+$/;

  var errorContainer = document.getElementById('error-container');
  errorContainer.innerHTML = ''; // Clear previous error messages

  if (name === '' || email === '' || phone === '' || message === '') {
      showError("All fields are required");
      return false;
  }

  if (name.indexOf(" ") >= 0) {
      showError("Name should not contain spaces");
      return false;
  }

  if (!nameValidation.test(name)) {
      showError("Invalid characters in name");
      return false;
  }

  if (name.length < 3) {
      showError("Name must be at least 3 characters");
      return false;
  }

  if (email.length < 10 || !isValidEmail(email)) {
      showError("Please enter a valid email address");
      return false;
  }

  if (phone.length !== 10 || !isValidPhone(phone)) {
      showError("Please enter a valid 10-digit phone number");
      return false;
  }

  if (message.length < 5) {
      showError("Message must be at least 5 characters");
      return false;
  }

  // No validation errors, clear the error container
  errorContainer.innerHTML = '';
  return true;
}

function showError(message) {
  var errorContainer = document.getElementById('error-container');
  var errorParagraph = document.createElement('p');
  errorParagraph.className = 'error-message';
  errorParagraph.textContent = message;
  errorContainer.appendChild(errorParagraph);
}

function isValidEmail(email) {
  // Add your email validation logic here (e.g., regex)
  return true; // Replace with your actual validation
}

function isValidPhone(phone) {
  // Add your phone validation logic here (e.g., regex)
  return true; // Replace with your actual validation
}

$(document).ready(function () {
  $("#submit-form").submit(function (e) {
      e.preventDefault();
      if (validation()) {
          $.ajax({
              url: "https://script.google.com/macros/s/AKfycbySyp0A7muiS75f_41H6joI6xIWt7U6dsW7P--r4ySpI3d2gcf0UZ4RpfDjZ-VIDPAw/exec",
              data: $("#submit-form").serialize(),
              method: "post",
              success: function (response) {
                  alert("Form submitted successfully");
                  window.location.reload();
              },
              error: function (err) {
                  alert("Something went wrong");
              }
          });
      }
  });
});
