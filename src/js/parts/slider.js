function slider() {
  const slides = document.querySelectorAll(".slider-item");
  const prev = document.querySelector(".slider-prev");
  const next = document.querySelector(".slider-next");
  const sliderDots = document.querySelector(".slider-dots");
  const dots = document.querySelectorAll(".dot");

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
    for (const dot of dots) {
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
    const target = event.target;

    for (let i = 0; i < dots.length + 1; i++) {
      if (
        target.classList.contains("dot") &&
        target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });
}

export default slider;
