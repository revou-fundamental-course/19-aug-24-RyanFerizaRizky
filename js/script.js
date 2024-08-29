// Get the form and userInfo elements
const form = document.getElementById('contactForm');
const userInfo = document.getElementById('userInfo');

// Get the display elements
const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');
const displayPhone = document.getElementById('displayPhone');
const displayMessage = document.getElementById('displayMessage');
const timeDisplay = document.getElementById('time');

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone number (simple validation for demonstration)
function isValidPhone(phone) {
    const phoneRegex = /^\d{10,12}$/; // Assumes 10-12 digit phone number
    return phoneRegex.test(phone);
}

// Function to update time
function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
}

// Update time every second
setInterval(updateTime, 1000);

// Add submit event listener to the form
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number (10-12 digits).');
        return;
    }

    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    // If all validations pass, update the userInfo section
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayMessage.textContent = message;

    // Show the userInfo section
    userInfo.style.display = 'block';

    // Clear the form
    form.reset();
});

// Initialize time display
updateTime();