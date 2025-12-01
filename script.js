// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.hero-overlay nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    // Toggle icon between hamburger and X
    menuToggle.innerHTML = nav.classList.contains('open') ? '&times;' : '&#9776;';
});

// Optional: Close menu when a nav link is clicked (for better UX)
const navLinks = document.querySelectorAll('.hero-overlay nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            menuToggle.innerHTML = '&#9776;';
        }
    });
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    let valid = true;

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset previous errors
    form.querySelectorAll('input, textarea').forEach(field => {
        field.style.border = '';
    });

    // Name validation
    if (name === '') {
        alert("Please enter your name.");
        form.querySelector('input[type="text"]').style.border = '2px solid red';
        valid = false;
        return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        form.querySelector('input[type="email"]').style.border = '2px solid red';
        valid = false;
        return;
    }

    // Message validation
    if (message === '') {
        alert("Please enter a message.");
        form.querySelector('textarea').style.border = '2px solid red';
        valid = false;
        return;
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset(); // Clear form
    }
});
