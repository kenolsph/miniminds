// Initialize feather icons
feather.replace();

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    // You would implement mobile menu functionality here
    console.log('Mobile menu clicked');
});

// Initialize Vanta.js waves effect
VANTA.WAVES({
    el: "#animated-background",
    color: 0x0066cc,
    waveHeight: 20,
    shininess: 50,
    waveSpeed: 1.2,
    zoom: 0.8
});
