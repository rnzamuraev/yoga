function timer() {
  const deadline = "2023-02-13";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      second: seconds,
      minute: minutes,
      hour: hours,
      day: days,
    };
  }
  function setClock(id, endtime) {
    // const timer = document.getElementById(id);
    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    const timeInterval = setInterval(apdateClock, 1000);

    function apdateClock() {
      const t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num < 10) {
          return "0" + num;
        } else {
          return num;
        }
      }

      days.textContent = addZero(t.day);
      hours.textContent = addZero(t.hour);
      minutes.textContent = addZero(t.minute);
      seconds.textContent = addZero(t.second);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }
  setClock("timer", deadline);
}

export default timer;
