import readlinesync = require('readline-sync')
import { Queue } from './Queue'

const fila = new Queue<string>()

let nomeCliente: string
let proximoCliente: string | undefined
let menu: number = 1

while (menu !== 0) {
console.log("*********************************************")
console.log("\n1 - ADICIONAR CLIENTE NA FILA")
console.log("2 - LISTAR TODOS OS CLIENTES")
console.log("3 - RETIRAR CLIENTE DA FILA")
console.log("0 - SAIR\n")
console.log("*********************************************")

menu = readlinesync.questionInt("\nENTRE COM A OPCAO DESEJADA: ")

if (menu === 1) {
    nomeCliente = readlinesync.question("\nDIGITE O NOME DO CLIENTE: ");
    fila.enqueue(nomeCliente);
} 
else if (menu === 2) {
    if (fila.isEmpty()) {
        console.log("A FILA ESTA VAZIA.");
    } else {
        fila.printQueue();
    }
} 
else if (menu === 3) {
    proximoCliente = fila.dequeue();
    if (proximoCliente) {
        console.log(`\nCLIENTE ${proximoCliente} FOI RETIRADO(A) DA FILA.`);
    } else {
        console.log("\nA FILA ESTA VAZIA");
    }
} 
else if (menu === 0) {
    console.log("\nPROGRAMA FINALIZADO");
} 
}