// EXERCICIO 04 - COLLECTION SET

// IMPORTAÇÃO DA BIBLIOTECA PARA ENTRADA DE DADOS
import readlinesync = require('readline-sync')

// CRIEI UMA COLEÇÃO set CHAMADA numeros / Set<number> = CONTEM VALORES NUMÉRICOS / Set = NÃO PERMITE VALOES REPETIDOS
const numeros: Set<number> = new Set<number>();

// CRIE COLLECTION Set COM 10 NÚMEROS INTEIROS
numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6);

// EXIBE OS NÚMEROS DO Set
console.log("LIST");
console.table(numeros);

// SOLICITA QUE DIGITE UM NÚMERO
const num: number = readlinesync.questionInt("DIGITE UM NUMERO: "); // ARMAZENA O NÚMERO NA VARIÁVEL num

// O MÉTODO .has = VERIFICAR SE O NÚMERO DIGITADO EXISTE NO Set
if (numeros.has(num)) {
    console.log(`O NUMERO ${num} FOI ENCONTRADO!`);
} else {
    console.log(`O NUMERO ${num} NAO FOI ENCONTRADO!`);
}