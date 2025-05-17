document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".card");

  let currentIndex = 0;

  function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      updateCarousel(currentIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel(currentIndex);
  }, 4000);
});
document.addEventListener('DOMContentLoaded', function() {
  const countdownDate = new Date().getTime() + 3600 * 1000; // 1 giờ đếm ngược

  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(interval);
      return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
