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
            expect( validator ).to.be.empty;
        });
    });

    describe( "deve validar um CPF", () => {
        const value = "34513872713";
        const validator = IdentificationValidation( "pt-BR" );
        expect( validator.isSSNValid( value ) ).to.be.equal( new IdentificationValidationPtBR().isSSNValid( value ) );
    });

    describe( "deve validar um CNPJ", () => {
        const value = "39621351000155";
        const validator = IdentificationValidation( "pt-BR" );
        expect( validator.isEINValid( value ) ).to.be.equal( new IdentificationValidationPtBR().isEINValid( value ) );
    });
});