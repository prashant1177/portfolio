// Slideshow Resume
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

showSlide(slideIndex);

// Resume
function resumeHover(params) {
  element = document.getElementById(params);
  element.classList.add("outerBlockResumeHover");
  console.log(params);
}

function resumeLeave(params) {
  element = document.getElementById(params);
  element.classList.remove("outerBlockResumeHover");
  console.log(params);
}
