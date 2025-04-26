document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const inputField = document.getElementById('github-repo');
    const clickableLink = document.getElementById('clickable-link');
  
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // For this basic example, we'll just display a message
            formMessage.textContent = 'Message sent successfully!';
            formMessage.classList.remove('hidden');
            contactForm.reset(); // Clear the form
        });
    }
});