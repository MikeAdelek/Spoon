function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  const menuIcon = document.querySelector(".menu-icon");

  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

const gallerySlider = document.querySelector(".gallery-slider");
const navDots = document.querySelectorAll(".nav-dot");

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".gallery-slide").length;

function showSlide(n) {
  gallerySlider.style.transform = `translateX(-${n * 33.33}%)`;
  navDots.forEach((dot, i) => dot.classList.toggle("active", i === n));
  currentSlide = n;
}

navDots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    showSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

gallerySlider.addEventListener("mouseover", stopAutoPlay);
gallerySlider.addEventListener("mouseout", startAutoPlay);

startAutoPlay();
