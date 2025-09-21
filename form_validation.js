// Form Validation for contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Reset error messages
            document.querySelectorAll('.error').forEach(error => {
                error.style.display = 'none';
            });
            
            // Validate name
            if (name.value.trim() === '') {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate message
            if (message.value.trim() === '') {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }

            // If valid, submit the form
            if (isValid) {
                contactForm.submit();
            }
        });
    }
});