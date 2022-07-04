// Podemos definir o tipo de retorno de uma função

// Dessa forma estou garantindo que a funçao terá um retorno de tipo number
function somaValoresNumericos(n1: number, n2: number): number {
    return n1 + n2;
}

// Dessa forma estou garantindo que a funçao terá um retorno de tipo number
function somaValores(n1: string, n2: string): string {
    return n1 + n2;
}

console.log(somaValoresNumericos(1, 3));
console.log(somaValores('1', '3'));

// Funçoes com ausencia de retorno: void
function printaNumeros(n1: number, n2: number): void {
    console.log(n1 + n2);
}

// Incluindo callback em funçoes
function multiplicaValoresNumericos(n1: number, n2: number, callback: (numero: number) => number ): number {
    let result = n1 * n2;

    return callback(result);
}

// Essa é a funçao callback que passaremos como parametro
function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(multiplicaValoresNumericos(1, 3, aoQuadrado));