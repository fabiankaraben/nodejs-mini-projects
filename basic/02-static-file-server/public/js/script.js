// Simple JavaScript for demo purposes
document.getElementById('clickMe').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = 'Hello from the static file server!';
    message.style.color = 'green';
});
