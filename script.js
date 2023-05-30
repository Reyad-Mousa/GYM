let slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// setInterval(nextSlide, 7000);
function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  document.querySelector(".next-button").addEventListener("click", nextSlide);
  document.querySelector(".prev-button").addEventListener("click", prevSlide);
  
  showSlide(currentSlide);


  const btn = document.getElementById("btn");
  const SCROLL_THRESHOLD = 500;
  
  // Check button state on page load
  window.onload = () => {
    if (scrollY >= SCROLL_THRESHOLD) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Check button state when user scrolls
  window.addEventListener("scroll", () => {
    if (scrollY >= SCROLL_THRESHOLD) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
  
  // Scroll to top when button is clicked
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });