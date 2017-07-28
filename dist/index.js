"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identificationValidation = require("./identification-validation");

Object.keys(_identificationValidation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _identificationValidation[key];
    }
  });
});