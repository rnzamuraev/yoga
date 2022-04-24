/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/parts/calc.js":
      /*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
      /***/ (module) => {
        function calc() {
          const peoplesInput = document.getElementsByClassName(
              "counter-block-input"
            )[0],
            daysInput = document.getElementsByClassName(
              "counter-block-input"
            )[1],
            choose = document.getElementById("select"),
            totalValue = document.getElementById("total");

          let peoples = 0,
            days = 0,
            total = 0;

          totalValue.innerHTML = 0;

          peoplesInput.addEventListener("input", function () {
            peoples = this.value;

            if (daysInput.value == "") {
              totalValue.innerHTML = 0;
            } else {
              total = peoples * days * 3000;
            }
            let n = total;

            totalValue.innerHTML =
              n * choose.options[choose.selectedIndex].value;
          });

          daysInput.addEventListener("input", function () {
            days = this.value;

            if (peoplesInput.value == "") {
              totalValue.innerHTML = 0;
            } else {
              total = peoples * days * 3000;
            }
            let n = total;

            totalValue.innerHTML =
              n * choose.options[choose.selectedIndex].value;
          });

          choose.addEventListener("change", function () {
            let n = total;

            totalValue.innerHTML = n * this.options[this.selectedIndex].value;
          });
        }

        module.exports = calc;

        /***/
      },

    /***/ "./src/js/parts/form.js":
      /*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
      /***/ (module) => {
        function form() {
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
        }

        module.exports = form;

        /***/
      },

    /***/ "./src/js/parts/modal.js":
      /*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
      /***/ (module) => {
        function modal() {
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
        }

        module.exports = modal;

        /***/
      },

    /***/ "./src/js/parts/slider.js":
      /*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/js/parts/tabs.js":
      /*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
      /***/ (module) => {
        function tabs() {
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
            if (
              event.target &&
              event.target.classList.contains("info-header-tab")
            ) {
              for (let i = 0; i < tabs.length; i++) {
                if (event.target == tabs[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;
                }
              }
            }
          });
        }

        module.exports = tabs;

        /***/
      },

    /***/ "./src/js/parts/timer.js":
      /*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
      /***/ (module) => {
        function timer() {
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
        }

        module.exports = timer;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
    window.addEventListener("DOMContentLoaded", function () {
      "use strict";
      let tabs = __webpack_require__(
          /*! ./parts/tabs.js */ "./src/js/parts/tabs.js"
        ),
        timer = __webpack_require__(
          /*! ./parts/timer.js */ "./src/js/parts/timer.js"
        ),
        modal = __webpack_require__(
          /*! ./parts/modal.js */ "./src/js/parts/modal.js"
        ),
        form = __webpack_require__(
          /*! ./parts/form.js */ "./src/js/parts/form.js"
        ),
        slider = __webpack_require__(
          /*! ./parts/slider.js */ "./src/js/parts/slider.js"
        ),
        calc = __webpack_require__(
          /*! ./parts/calc.js */ "./src/js/parts/calc.js"
        );

      tabs();
      timer();
      modal();
      form();
      slider();
      calc();
    });
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
