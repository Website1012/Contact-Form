
    const form = document.getElementById('contactForm');

    function validateForm() {
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Invalid email address';
            isValid = false;
        }

        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }