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
