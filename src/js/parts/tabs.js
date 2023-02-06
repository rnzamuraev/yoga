function tabs() {
  const tabs = document.querySelectorAll(
    ".info-header-tab"
  );
  const tabContents = document.querySelectorAll(
    ".info-tabcontent"
  );
  const infoHeader = document.querySelector(".info-header");

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

export default tabs;
