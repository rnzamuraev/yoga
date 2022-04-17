window.addEventListener("DOMContentLoaded", () => {
  "use strict";

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

  more.addEventListener("click", () => {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
    this.classList.add("more-splash");
  });
  popupClose.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
    this.classList.remove("more-splash");
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
      document.body.style.overflow = "";
      this.classList.remove("more-splash");
    }
  });
});
