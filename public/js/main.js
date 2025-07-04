document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }
    
    // Animation pour les éléments de service
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
    
    console.log("KuyengaTech Solutions - Prêt à coder l'avenir!");
});
// Ajoutez ceci à la fin du fichier main.js
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    sectionObserver.observe(section);
});

// Ajoutez cette classe dans style.css
section.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});