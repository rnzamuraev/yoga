function slider() {
  const slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    sliderDots = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  let slideIndex = 1;

  function showSlide(index) {
    if (index > slides.length) {
      slideIndex = 1;
    } else if (index < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
    for (let dot of dots) {
      dot.classList.remove("dot-active");
    }
    dots[slideIndex - 1].classList.add("dot-active");
  }
  showSlide(slideIndex);

  function plusSlide(index) {
    showSlide((slideIndex += index));
  }

  function currentSlide(index) {
    showSlide((slideIndex = index));
  }

  next.addEventListener("click", function () {
    plusSlide(1);
  });

  prev.addEventListener("click", function () {
    plusSlide(-1);
  });

  sliderDots.addEventListener("click", function (event) {
    let target = event.target;

    for (let i = 0; i < dots.length + 1; i++) {
      if (target.classList.contains("dot") && target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
