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


