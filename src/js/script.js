// require("es6-promise").polyfill();
// require("nodelist-foreach-polyfill");
// require("formdata-polyfill");

// const { default: calc } = require("./parts/calc");
// const { default: form } = require("./parts/form");
// const { default: modal } = require("./parts/modal");
// const { default: slider } = require("./parts/slider");
// const { default: tabs } = require("./parts/tabs");
// const { default: timer } = require("./parts/timer");
import "../css/style";

import tabs from "./parts/tabs";
import timer from "./parts/timer";
import slider from "./parts/slider";
import calc from "./parts/calc";
import form from "./parts/form";
import modal from "./parts/modal";
import mask from "./parts/mask";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  tabs();
  timer();
  slider();
  calc();
  form("form");
  modal(".more");
  modal(".description-btn");
  form("popup-form");
  mask("[name='phone']");
});
