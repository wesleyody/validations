const IdentificationValidation = locale => new IdentificationValidationFactory( locale );
export default IdentificationValidation;

class IdentificationValidationFactory {

    constructor ( locale ) {
        switch ( locale ) {
            case "pt":
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

class IdentificationValidationPtBR {

    isSSNValid ( value ) {
        // Regexes CPF
        const cpfPunctuation = /[\.\-]/g;
        const cpfPlain = /^\d{11}$/;

        let sumDV, modDV, valDV;

        // Converte pra se for passado um Number
        value = String( value ).trim();

        // Remove as pontuações permitidas
        value = value.replace( cpfPunctuation, "" );

        // Valida o CPF plano e retorna false caso não seja válido
        if ( !cpfPlain.test( value ) ) {
            return false;
        }

        // Transforma em array pra facilitar manipulação
        value = value.split( "" );

        // Faz a soma dos primeiros 9 dígitos com peso aplicado
        sumDV = value.slice( 0, 9 ).reduce(function( prev, char, i ) {
            return prev + ( 10 - i ) * +char;
        }, 0 );

        // Faz a divisão e guarda o resto da mesma
        modDV = sumDV % 11;

        // Calcula o valor que o dígito verificador deve ter
        valDV = modDV < 2 ? 0 : 11 - modDV;

        // Valida o valor do primeiro dígito verificador
        if ( +value[ 9 ] !== valDV ) {
            return false;
        }

        // Faz a soma dos primeiros 10 dígitos com peso aplicado
        sumDV = value.slice( 0, 10 ).reduce(function( prev, char, i ) {
            return prev + ( 11 - i ) * +char;
        }, 0 );

        // Faz a divisão e guarda o resto da mesma
        modDV = sumDV % 11;

        // Calcula o valor que o dígito verificador deve ter
        valDV = modDV < 2 ? 0 : 11 - modDV;

        return +value[ 10 ] === valDV;
    }

    isEINValid ( value ) {
        // Regexes CNPJ
        const cnpjPunctuation = /[\.\-\/]/g;
        const cnpjPlain = /^\d{14}$/;

        let sumDV, modDV, valDV;

        // Converte pra String, caso tenha sido passado um Number
        value = String( value ).trim();

        // Remove as pontuações permitidas
        value = value.replace( cnpjPunctuation, "" );

        // Valida o CNPJ plano e retorna false caso não seja válido
        if ( !cnpjPlain.test( value ) ) {
            return false;
        }

        // Transforma em array pra facilitar manipulação
        value = value.split( "" );

        // Faz a soma dos primeiros 12 dígitos com peso aplicado
        sumDV = value.slice( 0, 12 ).reduce(function( prev, char, i ) {
            var weight = i < 4 ? 5 - i : 9 - ( i - 4 );
            return prev + weight * +char;
        }, 0 );

        // Faz a divisão e guarda o resto da mesma
        modDV = sumDV % 11;

        // Calcula o valor que o dígito verificador deve ter
        valDV = modDV < 2 ? 0 : 11 - modDV;

        // Valida o valor do primeiro dígito verificador
        if ( +value[ 12 ] !== valDV ) {
            return false;
        }

        // Faz a soma dos primeiros 13 dígitos com peso aplicado
        sumDV = value.slice( 0, 13 ).reduce(function( prev, char, i ) {
            var weight = i < 5 ? 6 - i : 9 - ( i - 5 );
            return prev + weight * +char;
        }, 0 );

        // Faz a divisão e guarda o resto da mesma
        modDV = sumDV % 11;

        // Calcula o valor que o dígito verificador deve ter
        valDV = modDV < 2 ? 0 : 11 - modDV;

        // Retorna a validade do CPF.
        return +value[ 13 ] === valDV;
    }
}