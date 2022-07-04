//Objetos
const Pessoa = {
    nome: 'Filipe',
    idade: 25,
    profissao: 'Desenvolvedor'
}

//Podemos declarar objetos dessa forma tambem
const Filipe: {nome: string, idade: number, profissao: string} = {
    nome: 'Filipe',
    idade: 25,
    profissao: 'Desenvolvedor'
}

//O enum é basicamente um grupo de constantes
enum Profissao {
    Professor,
    Desenvolvedor,
    Estudante
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudantes extends Pessoa {
    materias: string[]
}

const João: Pessoa = {
    nome: 'João',
    idade: 24,
    profissao: Profissao.Desenvolvedor
}

const Maycon: Pessoa = {
    nome: 'Maycon',
    idade: 24,
    profissao: Profissao.Estudante
}

const Igor: Estudantes = {
    nome: 'Igor',
    idade: 27,
    materias: ['Programação, Algoritmos']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(Igor.materias);