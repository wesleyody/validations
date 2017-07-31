import { expect } from "chai";

import IdentificationValidationPtBR from "./validation";

describe( "identification/pt-BR/validation", () => {

    const validation = new IdentificationValidationPtBR();

    describe( ".isSSNValid()", () => {
        it( "deve retornar true se for um CPF válido", () => {
            const isValid = validation.isSSNValid( "34513872713" );
            expect( isValid ).to.be.true;
        });

        it( "deve retornar false se for um CPF inválido", () => {
            const isValid = validation.isSSNValid( "34513872714" );
            expect( isValid ).to.be.false;
        });
    });

    describe( ".isEINValid()", () => {
        it( "deve retornar true se for um CNPJ válido", () => {
            const isValid = validation.isEINValid( "39621351000155" );
            expect( isValid ).to.be.true;
        });

        it( "deve retornar false se for um CNPJ inválido", () => {
            const isValid = validation.isEINValid( "39621351000156" );
            expect( isValid ).to.be.false;
        });
    });

});