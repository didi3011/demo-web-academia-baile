import './style.css';

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manifesto Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxImg = document.getElementById('parallax-img');
    if (parallaxImg) {
        const scrolled = window.pageYOffset;
        const val = scrolled * 0.05;
        parallaxImg.style.transform = `translateY(${val}px)`;
    }
});
