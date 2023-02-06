function calc() {
  const peoplesInput = document.getElementsByClassName(
    "counter-block-input"
  )[0];
  const daysInput = document.getElementsByClassName(
    "counter-block-input"
  )[1];
  const choose = document.getElementById("select");
  const totalValue = document.getElementById("total");

  let peoples = 0;
  let days = 0;
  let total = 0;

  totalValue.innerHTML = 0;

  peoplesInput.addEventListener("input", function () {
    peoples = this.value;

    if (daysInput.value == "") {
      totalValue.innerHTML = 0;
    } else {
      total = peoples * days * 3000;
    }
    const n = total;

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
    const n = total;

    totalValue.innerHTML =
      n * choose.options[choose.selectedIndex].value;
  });

  choose.addEventListener("change", function () {
    const n = total;

    totalValue.innerHTML =
      n * this.options[this.selectedIndex].value;
  });
}

export default calc;
