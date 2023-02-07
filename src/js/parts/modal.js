function modal(open) {
  const overlay = document.querySelector(".overlay");
  const btns = document.querySelectorAll(open);
  const popupClose = document.querySelector(".popup-close");

  function openModal(btn) {
    btn.addEventListener("click", function () {
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
      this.classList.add("more-splash");
    });
    popupClose.addEventListener("click", function () {
      overlay.style.display = "none";
      document.body.style.overflow = "";
      btn.classList.remove("more-splash");
    });
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "";
        btn.classList.remove("more-splash");
      }
    });
  }

  btns.forEach((btn) =>
    btn.addEventListener("click", openModal(btn))
  );
}

export default modal;
