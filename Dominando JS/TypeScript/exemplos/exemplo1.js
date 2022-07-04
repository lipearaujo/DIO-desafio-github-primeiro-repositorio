"use strict";
let button = document.getElementById('btn');
let input1 = document.getElementById('ipt1');
let input2 = document.getElementById('ipt2');
//let frase: string = "O valor é: "; //Variável do tipo string declarada explicitamente
//Variável do tipo string declarada por inferência de tipo
let frase = 'O valor é: ';
let printar = true; //Variável do tipo string declarada por inferência de tipo
//recriando a aplicação validacaoBasica.js com Typescript
function somarNumeros(numero1, numero2, print, frase) {
    let result = numero1 + numero2;
    if (print) {
        console.log(frase + result);
    }
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), printar, frase));
        }
    });
}


