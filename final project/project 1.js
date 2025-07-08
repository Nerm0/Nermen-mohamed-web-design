
  $(document).ready(function () {
    $("#testimonial-carousel").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
      ],
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 }
      }
    });
  });

   document.querySelectorAll('.team-card').forEach(card => {
    var overlay = card.querySelector('.overlay-panel');
    var details = card.querySelector('.details');
    card.addEventListener('mouseenter', () => {
      overlay.style.height = '50%';
      details.classList.remove('opacity-0');
    });
    card.addEventListener('mouseleave', () => {
      overlay.style.height = '50px';
      details.classList.add('opacity-0');
    });
  });
/////////////////////////////////////////////////////////

  let alreadyCounted = false;

  function startCountUp(counter, target, duration) {
    let current = 0;
    let steps = 100;
    let increment = target / steps;
    let intervalTime = duration / steps;

    let counterInterval = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(counterInterval);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, intervalTime);
  }

  window.addEventListener("scroll", () => {
    if (alreadyCounted) return;

    const section = document.querySelector(".bg-light"); // نختار البلوك كله
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight) {
      const counters = document.querySelectorAll(".counter");

      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        startCountUp(counter, target, 2000); // 2000ms = 2 ثواني
      });

      alreadyCounted = true;
    }
  });

 
  (function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();     
        }

        form.classList.add('was-validated'); 
      }, false);
    });
  })();

