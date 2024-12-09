// EXERCICIO 01 - COLLECTION ARRAY

// IMPORTAÇÃO DA BIBLIOTECA PARA ENTRADA DE DADOS
import readlinesync = require('readline-sync')

// CRIEI UMA COLEÇÃO ARRAY VAZIA CHAMADA cores / Array<string> = CONTEM VALORES DO TIPO TEXTO
const cores: Array<string> = new Array<string>();

//LOOP PARA ADICIONAR 5 CORES AO ARRAY
for (let c = 0; c < 5; c++) {       // VAI FICAR ADICIONANDO CORES ENQUANTO c FOR MENOR QUE 5.
    cores.push(readlinesync.question(`DIGITE A COR ${c}: `));
}

// LISTAM TODAS AS CORES ADICIONADAS
console.log("\nTODAS AS CORES ADICIONADAS:");
for ( let cor of cores) {       // LAÇO for PERCORRE CADA COR NO ARRAY
    console.log(cor);
}

// MOSTRA AS CORES EM ORDEM CRESCENTE
console.log("\nCORES EM ORDEM CRESCENTE:");
console.log(cores.sort());      // sort() ORDENA AS CORES EM ORDEM CRESCENTE.