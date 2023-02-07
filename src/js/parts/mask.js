function mask(selector) {
  const inputsPhone = document.querySelectorAll(selector);

  function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function createMask(event) {
    const matrix = "+7 (___) ___ __ __";
    let i = 0;

    const def = matrix.replace(/\D/g, "");
    let val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (this.value[1] !== def) {
      console.log("not 7");
      val = def;
    }

    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else if (event.type === "focus") {
      setCursorPosition(this.value.length, this);
      console.log(this.value.length);
      console.log(document.activeElement);
    } else if (
      event.type === "input" &&
      this.value[1] !== def
    ) {
      this.value = "+7 (" + this.value[1];
    }
  }

  inputsPhone.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
}

export default mask;
