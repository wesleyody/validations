# validations [![Build Status](https://travis-ci.org/wesleyody/validations.svg?branch=master)](https://travis-ci.org/wesleyody/validations)
Validação de valores de acordo com a localidade

## Instalação
```shell
  npm install locale-validations --save
  ```
  
## Utilização

```js
import { IdentificationValidation } from "locale-validations";

export const validate = value => {
  const localeValidations = new IdentificationValidation( "pt-BR" );
  
  return localeValidations.isSSNValid( value );
};
```

### Locales
- `pt-BR`

### Métodos

#### isSSNValid( value:String ) : boolean
 - Verifica se é um CPF válido
 
 #### isEINValid( value:String ) : boolean
 - Verifica se é um CNPJ válido
