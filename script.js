    // // Mobile menu toggle
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navMenu = document.querySelector('.nav-menu');

    // menuToggle.addEventListener('click', () => {
    //     navMenu.classList.toggle('active');
    // });

    // // Intersection Observer for workflow items
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible');
    //         }
    //     });
    // }, { threshold: 0.1 });

    // document.querySelectorAll('.workflow-item').forEach(item => {
    //     observer.observe(item);
    // });

    // // FAQ accordion
    // document.querySelectorAll('.faq-question').forEach(question => {
    //     question.addEventListener('click', () => {
    //         const isExpanded = question.getAttribute('aria-expanded') === 'true';
    //         question.setAttribute('aria-expanded', !isExpanded);
    //     });
    // });

    

// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const workflowItems = document.querySelectorAll('.workflow-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    workflowItems.forEach(item => {
        observer.observe(item);
    });

    const faqQuestions = document.querySelectorAll('.faq-question');

});
