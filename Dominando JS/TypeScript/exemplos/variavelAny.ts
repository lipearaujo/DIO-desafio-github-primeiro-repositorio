// Uma variavel any pode receber qualquer tipo
let valorAny: any;
valorAny = 3;
valorAny = 'Olá';
valorAny = true;

let valorString: string = 'Teste';
valorString = valorAny; // Não ocorrerá um erro pois a variavel valorString está esperando receber uma string e a variavel valorAny pode ser qualquer tipo