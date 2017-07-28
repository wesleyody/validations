"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdentificationValidation = function IdentificationValidation(locale) {
        return new IdentificationValidationFactory(locale);
};
exports.default = IdentificationValidation;

var IdentificationValidationFactory = function () {
        function IdentificationValidationFactory(locale) {
                _classCallCheck(this, IdentificationValidationFactory);

                switch (locale) {
                        case "pt":
                                this.validator = new IdentificationValidationPtBR();
                                break;
                        default:
                                this.validator = null;
                                break;
                }
        }

        _createClass(IdentificationValidationFactory, [{
                key: "isSSNValid",
                value: function isSSNValid(value) {
                        return this.validator.isSSNValid(value);
                }
        }, {
                key: "isEINValid",
                value: function isEINValid(value) {
                        return this.validator.isEINValid(value);
                }
        }]);

        return IdentificationValidationFactory;
}();

var IdentificationValidationPtBR = function () {
        function IdentificationValidationPtBR() {
                _classCallCheck(this, IdentificationValidationPtBR);
        }

        _createClass(IdentificationValidationPtBR, [{
                key: "isSSNValid",
                value: function isSSNValid(value) {
                        // Regexes CPF
                        var cpfPunctuation = /[\.\-]/g;
                        var cpfPlain = /^\d{11}$/;

                        var sumDV = void 0,
                            modDV = void 0,
                            valDV = void 0;

                        // Converte pra se for passado um Number
                        value = String(value).trim();

                        // Remove as pontuações permitidas
                        value = value.replace(cpfPunctuation, "");

                        // Valida o CPF plano e retorna false caso não seja válido
                        if (!cpfPlain.test(value)) {
                                return false;
                        }

                        // Transforma em array pra facilitar manipulação
                        value = value.split("");

                        // Faz a soma dos primeiros 9 dígitos com peso aplicado
                        sumDV = value.slice(0, 9).reduce(function (prev, char, i) {
                                return prev + (10 - i) * +char;
                        }, 0);

                        // Faz a divisão e guarda o resto da mesma
                        modDV = sumDV % 11;

                        // Calcula o valor que o dígito verificador deve ter
                        valDV = modDV < 2 ? 0 : 11 - modDV;

                        // Valida o valor do primeiro dígito verificador
                        if (+value[9] !== valDV) {
                                return false;
                        }

                        // Faz a soma dos primeiros 10 dígitos com peso aplicado
                        sumDV = value.slice(0, 10).reduce(function (prev, char, i) {
                                return prev + (11 - i) * +char;
                        }, 0);

                        // Faz a divisão e guarda o resto da mesma
                        modDV = sumDV % 11;

                        // Calcula o valor que o dígito verificador deve ter
                        valDV = modDV < 2 ? 0 : 11 - modDV;

                        return +value[10] === valDV;
                }
        }, {
                key: "isEINValid",
                value: function isEINValid(value) {
                        // Regexes CNPJ
                        var cnpjPunctuation = /[\.\-\/]/g;
                        var cnpjPlain = /^\d{14}$/;

                        var sumDV = void 0,
                            modDV = void 0,
                            valDV = void 0;

                        // Converte pra String, caso tenha sido passado um Number
                        value = String(value).trim();

                        // Remove as pontuações permitidas
                        value = value.replace(cnpjPunctuation, "");

                        // Valida o CNPJ plano e retorna false caso não seja válido
                        if (!cnpjPlain.test(value)) {
                                return false;
                        }

                        // Transforma em array pra facilitar manipulação
                        value = value.split("");

                        // Faz a soma dos primeiros 12 dígitos com peso aplicado
                        sumDV = value.slice(0, 12).reduce(function (prev, char, i) {
                                var weight = i < 4 ? 5 - i : 9 - (i - 4);
                                return prev + weight * +char;
                        }, 0);

                        // Faz a divisão e guarda o resto da mesma
                        modDV = sumDV % 11;

                        // Calcula o valor que o dígito verificador deve ter
                        valDV = modDV < 2 ? 0 : 11 - modDV;

                        // Valida o valor do primeiro dígito verificador
                        if (+value[12] !== valDV) {
                                return false;
                        }

                        // Faz a soma dos primeiros 13 dígitos com peso aplicado
                        sumDV = value.slice(0, 13).reduce(function (prev, char, i) {
                                var weight = i < 5 ? 6 - i : 9 - (i - 5);
                                return prev + weight * +char;
                        }, 0);

                        // Faz a divisão e guarda o resto da mesma
                        modDV = sumDV % 11;

                        // Calcula o valor que o dígito verificador deve ter
                        valDV = modDV < 2 ? 0 : 11 - modDV;

                        // Retorna a validade do CPF.
                        return +value[13] === valDV;
                }
        }]);

        return IdentificationValidationPtBR;
}();