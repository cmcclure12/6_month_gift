// Floating hearts animation
document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('heartsContainer');

    if (!heartsContainer) return;

    // Heart styles and emojis
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';

        // Random heart emoji
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        // Random starting position (horizontal)
        const startPosition = Math.random() * 100;
        heart.style.left = startPosition + '%';

        // Random size
        const size = 20 + Math.random() * 30; // 20-50px
        heart.style.fontSize = size + 'px';

        // Random animation duration (how fast it floats up)
        const duration = 3 + Math.random() * 4; // 3-7 seconds
        heart.style.animationDuration = duration + 's';

        // Random delay before starting
        const delay = Math.random() * 2;
        heart.style.animationDelay = delay + 's';

        // Random horizontal drift
        const drift = -20 + Math.random() * 40; // -20px to 20px
        heart.style.setProperty('--drift', drift + 'px');

        // Add to container
        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }

    // Create hearts at intervals
    function startHeartAnimation() {
        // Create initial hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createHeart(), i * 400);
        }

        // Continue creating hearts
        setInterval(() => {
            createHeart();
        }, 800); // New heart every 800ms
    }

    // Start the animation
    startHeartAnimation();
});
