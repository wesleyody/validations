import { expect } from "chai";

import IdentificationValidation from "./identification-validation";
import IdentificationValidationPtBR from "./pt-BR/validation";

describe( "identification/identification-validation", () => {

    describe( "para locale pt-BR", () => {
        it( "deve retornar um objeto IdentificationValidationPtBR", () => {
            const validator = IdentificationValidation( "pt-BR" );
            console.log( validator );
            expect( validator instanceof IdentificationValidationPtBR ).to.be.true;
        });
    });

    describe( "para locale não implementado", () => {
        it( "deve retornar null", () => {
            const validator = IdentificationValidation( "xxx" );
            console.log( validator );
            expect( validator ).to.be.null;
        });
    });

});