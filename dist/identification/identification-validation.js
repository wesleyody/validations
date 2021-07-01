"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validation = require("./pt-BR/validation");

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IdentificationValidation = function IdentificationValidation(locale) {
    return IdentificationValidationFactory(locale);
};
exports.default = IdentificationValidation;


var IdentificationValidationFactory = function IdentificationValidationFactory(locale) {
    switch (locale) {
        case "pt-BR":
            return new _validation2.default();
        default:
            return {
                isSSNValid: function isSSNValid() {
                    return true;
                },
                isEINValid: function isEINValid() {
                    return true;
                }
            };
    }
};