import IdentificationValidationPtBR from "./pt-BR/validation";

const IdentificationValidation = locale => IdentificationValidationFactory( locale );
export default IdentificationValidation;

const IdentificationValidationFactory = locale => {
    switch ( locale ) {
        case "pt-BR":
            return new IdentificationValidationPtBR();
        default:
            return {
                isSSNValid: () => true,
                isEINValid: () => true,
            };
    }
};