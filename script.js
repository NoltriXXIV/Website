// Contact form submission script
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation check
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contact-form').reset();
    }
});
