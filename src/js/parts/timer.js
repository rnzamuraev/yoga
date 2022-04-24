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
