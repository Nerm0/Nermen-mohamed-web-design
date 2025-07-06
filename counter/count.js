

  let alreadyCounted = false;

  function countUp(element, finalNumber, speed) {
    let current = 0;
    let steps = 100;
    let increment = finalNumber / steps;
    let timePerStep = speed / steps;

    let counter = setInterval(() => {
      current += increment;
      if (current >= finalNumber) {
        element.textContent = finalNumber;
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(current);
      }
    }, timePerStep);
  }

  window.addEventListener("scroll", () => {
    let box = document.getElementById("counter-box");
    let boxTop = box.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (boxTop < windowHeight && !alreadyCounted) {
      let allCounters = document.querySelectorAll(".count");

      countUp(allCounters[0], 8000, 2000);
      countUp(allCounters[1], 810, 2000);
      countUp(allCounters[2], 3000, 2000);
      countUp(allCounters[3], 20, 2000);

      alreadyCounted = true;
    }
  });
