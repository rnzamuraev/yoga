function calc() {
  const peoplesInput = document.getElementsByClassName(
      "counter-block-input"
    )[0],
    daysInput = document.getElementsByClassName("counter-block-input")[1],
    choose = document.getElementById("select"),
    totalValue = document.getElementById("total");

  let peoples = 0,
    days = 0,
    total = 0;

  totalValue.innerHTML = 0;

  peoplesInput.addEventListener("input", function () {
    peoples = this.value;

    if (daysInput.value == "") {
      totalValue.innerHTML = 0;
    } else {
      total = peoples * days * 3000;
    }
    let n = total;

    totalValue.innerHTML = n * choose.options[choose.selectedIndex].value;
  });

  daysInput.addEventListener("input", function () {
    days = this.value;

    if (peoplesInput.value == "") {
      totalValue.innerHTML = 0;
    } else {
      total = peoples * days * 3000;
    }
    let n = total;

    totalValue.innerHTML = n * choose.options[choose.selectedIndex].value;
  });

  choose.addEventListener("change", function () {
    let n = total;

    totalValue.innerHTML = n * this.options[this.selectedIndex].value;
  });
}

module.exports = calc;
