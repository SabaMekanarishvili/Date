// Function to move the "NO" button
function moveButton() {
    var button = document.getElementById('noBtn');
    var newX = Math.random() * (window.innerWidth - button.clientWidth);
    var newY = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

// Event listener for "YES" button click
document.getElementById('yesBtn').addEventListener('click', function() {
    // Show the result section
    document.getElementById('result').style.display = 'block';
    
    // Initialize particles.js with fireworks configuration
    particlesJS('particles-js', {
        "particles": {
            // Fireworks configuration
        },
        "interactivity": {
            // Fireworks interactivity configuration
        },
        "retina_detect": true
    });
});
