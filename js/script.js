window.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  // Tabs

  const tabs = document.querySelectorAll(".info-header-tab"),
    tabContents = document.querySelectorAll(".info-tabcontent"),
    infoHeader = document.querySelector(".info-header");

  function hideTabContent(a) {
    for (let i = a; i < tabContents.length; i++) {
      tabContents[i].classList.remove("show");
      tabContents[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContents[b].classList.contains("hide")) {
      tabContents[b].classList.remove("hide");
      tabContents[b].classList.add("show");
    }
  }

  infoHeader.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tabs.length; i++) {
        if (event.target == tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  const deadline = "2022-04-18";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      second: seconds,
      minute: minutes,
      hour: hours,
    };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds"),
      timeInterval = setInterval(apdateClock, 1000);

    function apdateClock() {
      let t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num < 10) {
          return "0" + num;
        } else {
          return num;
        }
      }

      hours.textContent = addZero(t.hour);
      minutes.textContent = addZero(t.minute);
      seconds.textContent = addZero(t.second);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }
  setClock("timer", deadline);

  // Pop-ap

  const overlay = document.querySelector(".overlay"),
    more = document.querySelector(".more"),
    popupClose = document.querySelector(".popup-close");

  more.addEventListener("click", function () {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
    this.classList.add("more-splash");
  });
  popupClose.addEventListener("click", function () {
    overlay.style.display = "none";
    document.body.style.overflow = "";
    more.classList.remove("more-splash");
  });
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.style.display = "none";
      document.body.style.overflow = "";
      more.classList.remove("more-splash");
    }
  });

  // form

  let message = {
    loading: "Загрузка...",
    success: "Спасибо, Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так...",
  };
  const form = document.getElementById("form"),
    mainForm = document.querySelector(".main-form"),
    inputForm = form.getElementsByTagName("input"),
    inputMainForm = mainForm.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);

    let recuest = new XMLHttpRequest();
    recuest.open("GET", "server.php");
    recuest.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    let formData = new FormData(form);
    recuest.send(formData);

    recuest.addEventListener("readystatechange", () => {
      if (recuest.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (recuest.readyState === 4 && recuest.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < inputForm.length; i++) {
      inputForm[i].value = "";
    }
  });
  // slider

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
});
