document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      let isValid = true;
  
      // Check if name field is empty
      if (name === '') {
        isValid = false;
        alert('Please enter your name.');
      }
  
      // Check if email field is empty or not a valid email format
      if (email === '') {
        isValid = false;
        alert('Please enter your email.');
      } else if (!isValidEmail(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
      }
  
      // Check if message field is empty
      if (message === '') {
        isValid = false;
        alert('Please enter your message.');
      }
  
      return isValid;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  