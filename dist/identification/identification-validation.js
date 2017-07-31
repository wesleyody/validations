"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validation = require("./pt-BR/validation");

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdentificationValidation = function IdentificationValidation(locale) {
    return new IdentificationValidationFactory(locale);
};
exports.default = IdentificationValidation;

var IdentificationValidationFactory = function IdentificationValidationFactory(locale) {
    _classCallCheck(this, IdentificationValidationFactory);

    switch (locale) {
        case "pt-BR":
            return new _validation2.default();
        default:
            return;
    }
};