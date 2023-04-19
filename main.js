const sliderContainer = document.querySelector('.slider-container');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
const slideWidth = document.querySelector('.slide').clientWidth;

let slidePosition = 0;

function slideNext() {
  slidePosition -= slideWidth;
  if (slidePosition < -(slideWidth * (sliderContainer.children.length - 1))) {
    slidePosition = 0;
  }
  sliderContainer.style.transform = `translateX(${slidePosition}px)`;
}

function slidePrev() {
  slidePosition += slideWidth;
  if (slidePosition > 0) {
    slidePosition = -(slideWidth * (sliderContainer.children.length - 1));
  }
  sliderContainer.style.transform = `translateX(${slidePosition}px)`;
}

nextSlide.addEventListener('click', slideNext);
prevSlide.addEventListener('click', slidePrev);
