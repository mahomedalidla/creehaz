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


window.addEventListener('load', function() {
    var customButton = document.getElementById('agenda-btn');
    customButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la acción por defecto
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ybhsbIY_sf6Y5g7YVogCW05JhDFSmAehnr7AxrZja1mYY_fo_DD_ghd7bVbK9ZYJIujegR9ku?gv=true',
        color: '#EF6C00',
        label: 'Programar una cita',
      });
    });
  });
  

  // Get modal and button elements
var modal = document.getElementById("calendar-modal");
var btn = document.getElementById("agenda-btn");
var span = document.getElementsByClassName("close-btn")[0];

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
