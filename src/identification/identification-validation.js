import IdentificationValidationPtBR from "./pt-BR/validation";

const IdentificationValidation = locale => new IdentificationValidationFactory( locale );
export default IdentificationValidation;

class IdentificationValidationFactory {

    constructor ( locale ) {
        switch ( locale ) {
            case "pt-BR":
                return new IdentificationValidationPtBR();
            default:
                return;
        }
    }

}