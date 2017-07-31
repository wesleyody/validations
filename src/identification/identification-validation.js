import IdentificationValidationPtBR from "./pt-BR/validation";

const IdentificationValidation = locale => new IdentificationValidationFactory( locale );
export default IdentificationValidation;

class IdentificationValidationFactory {

    constructor ( locale ) {
        switch ( locale ) {
            case "pt-BR":
                this.validator = new IdentificationValidationPtBR();
                break;
            default:
                this.validator = null;
                break;
        }
    }

    isSSNValid ( value ) {
        return this.validator.isSSNValid( value );
    }

    isEINValid ( value ) {
        return this.validator.isEINValid( value );
    }

}