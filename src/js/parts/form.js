/* eslint-disable for-direction */
function form(selector) {
  const message = {
    loading: "Загрузка...",
    success: "Спасибо, Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так...",
  };
  const form = document.getElementById(selector);
  const inputsForm = form.getElementsByTagName("input");
  const modal = document.querySelector(".overlay");
  const statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.append(statusMessage);

    const formData = new FormData(form);

    const recuest = new XMLHttpRequest();

    recuest.open("POST", "server.php", true);
    recuest.send(formData);

    recuest.addEventListener("readystatechange", () => {
      statusMes();

      if (recuest.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (
        recuest.readyState === 4 &&
        recuest.status == 200
      ) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
      // statusMes();
    });

    function statusMes() {
      toggleFormChild("none");

      if (
        !statusMessage.parentElement.classList.contains(
          "main-form"
        )
      ) {
        statusMessage.style.justifyContent = "start";
      }

      statusMessage.style.display = "";

      setTimeout(() => {
        if (modal.style.display !== "none") {
          modal.style.display = "none";
          document.body.style.overflow = "";
          document
            .querySelector(".more")
            .classList.remove("more-splash");
        }

        statusMessage.remove();
        toggleFormChild("");
      }, 6000);
    }

    function toggleFormChild(display) {
      for (let i = 0; i < form.children.length; i++) {
        form.children[i].style.display = display;
        console.log(form.children[i]);
      }
    }

    for (let i = 0; i < inputsForm.length; i++) {
      inputsForm[i].value = "";
    }
  });
}

export default form;
