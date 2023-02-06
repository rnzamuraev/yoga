function form() {
  const message = {
    loading: "Загрузка...",
    success: "Спасибо, Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так...",
  };
  const form = document.getElementById("form");
  // const mainForm = document.querySelector(".main-form");
  const inputForm = form.getElementsByTagName("input");
  // const inputMainForm =
  //   mainForm.getElementsByTagName("input");
  const statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);

    const formData = new FormData(form);

    const recuest = new XMLHttpRequest();

    recuest.open("POST", "server.php", true);
    recuest.send(formData);

    recuest.addEventListener("readystatechange", () => {
      if (recuest.readyState < 4) {
        console.log(message.loading);
        // statusMessage.innerHTML = message.loading;
      } else if (
        recuest.readyState === 4 &&
        recuest.status == 200
      ) {
        console.log(message.success);
      } else {
        console.log(message.failure);
      }
      // {
      //   statusMessage.innerHTML = message.success;
      // } else {
      //   statusMessage.innerHTML = message.failure;
      // }
    });

    for (let i = 0; i < inputForm.length; i++) {
      inputForm[i].value = "";
    }
  });
}

export default form;
