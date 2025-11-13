// Sidebar Navigation
function openNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("open");
    sidebar.style.width = ""; // Let CSS control the width
}

function closeNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
    sidebar.style.width = "0";
}

// Scroll effect for header
window.addEventListener('scroll', function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Hero Carousel
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    // Hide all slides
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselIndicators.forEach(indicator => indicator.classList.remove('active'));

    // Show the selected slide
    carouselItems[index].classList.add('active');
    carouselIndicators[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % carouselItems.length;
    showSlide(nextIndex);
}

// Set up automatic sliding
let slideTimer = setInterval(nextSlide, slideInterval);

// Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
});

carousel.addEventListener('mouseleave', () => {
    slideTimer = setInterval(nextSlide, slideInterval);
});

// Indicator click events
carouselIndicators.forEach(indicator => {
    indicator.addEventListener('click', function () {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        showSlide(slideIndex);
        // Reset timer when manually changing slide
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});

// Testimonial Slider
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentTestimonial = 0;
const testimonialInterval = 7000; // 7 seconds

function showTestimonial(index) {
    // Hide all testimonials
    testimonialItems.forEach(item => item.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));

    // Show the selected testimonial
    testimonialItems[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    let nextIndex = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(nextIndex);
}

// Set up automatic sliding for testimonials
let testimonialTimer = setInterval(nextTestimonial, testimonialInterval);

// Dot click events for testimonials
testimonialDots.forEach(dot => {
    dot.addEventListener('click', function () {
        const testimonialIndex = parseInt(this.getAttribute('data-index'));
        showTestimonial(testimonialIndex);
        // Reset timer when manually changing testimonial
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(nextTestimonial, testimonialInterval);
    });
});

// Scroll animations
const animateOnScroll = function () {
    const elements = document.querySelectorAll('.about-image, .about-text, .product-card, .feature-item');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// Initialize animations on load
window.addEventListener('load', function () {
    // Show first elements immediately
    document.querySelector('.about-image').classList.add('visible');
    document.querySelector('.about-text').classList.add('visible');

    // Set up scroll animations
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// FAQ functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email && email.includes('@')) {
            // Here you would typically send the email to your server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}