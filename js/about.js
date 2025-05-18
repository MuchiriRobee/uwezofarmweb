  // Sidebar Navigation
  function openNav() {
    document.getElementById("sidebar").style.width = "300px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Scroll animations
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.about-intro-img, .about-intro-text, .value-card, .team-member');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close sidebar if open
            closeNav();
        }
    });
});