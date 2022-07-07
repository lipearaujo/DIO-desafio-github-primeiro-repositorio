"use strict";
/*
Desafio 1
Como podemos rodar isso em um arquivo .ts sem causar erros?
let employee = {};
employee.code = 10;
employee.name = "John";

//Ex 1
let employee: { code: number, name: string } = {
    code: 10,
    name: "John"
}

//Ex 2
let funcionario = {
    codigo: 10,
    nome: 'John'
}
funcionario.codigo = 10;
funcionario.nome = 'John';

//Ex 3
interface Func {
    code: number,
    name: string
}
let funcionrio2: Func = {
    code: 200,
    name: 'Filipe'
}


Desafio 2
Como podemos melhorar o esse código usando TS?
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}

enum Profissao {
    Atriz,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number
    profissao?: Profissao
}

const Maria: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

const Roberto: Pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

const Laura: Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}

const Carlos: Pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}

Desafio 3
 O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let result: number;
result = 0;

if(campoSaldo){
    campoSaldo.innerHTML = '0';
};

function somarAoSaldo(num: number) {
    if(campoSaldo){
        result += num;
        campoSaldo.innerHTML = result.toString();
    };
};

function limparSaldo() {
    result = 0;
    if(campoSaldo){
        campoSaldo.innerHTML = '';
    };
};

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        if(soma){
            console.log(somarAoSaldo(Number(soma.value)));
        };
    });
};

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
};
*/
