// Podemos definir um tipo personalizado para uma variavel
type variavel = number | string; 

function somarValores(input1: variavel, input2: variavel){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }else{
        return input1 + input2;
    }
}

console.log(somarValores(1, 5));
console.log(somarValores('olá', 'mundo !'));
console.log(somarValores('1', 1));