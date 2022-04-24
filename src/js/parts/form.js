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
