import readlinesync = require('readline-sync');
import { Stack } from "./Stack";

const pilha = new Stack<string>();

// Declaração de variáveis no início do código
let menu: number = 1;
let nomeLivro: string;
let livroRetirado: string | undefined;

while (menu !== 0) {
    console.log("*********************************************");
    console.log("\n1 - ADICIONAR LIVRO NA PILHA");
    console.log("2 - LISTAR TODOS OS LIVROS");
    console.log("3 - RETIRAR LIVRO DA PILHA");
    console.log("0 - SAIR\n");
    console.log("*********************************************");

    menu = readlinesync.questionInt("\nENTRE COM A OPCAO DESEJADA: ");

    if (menu === 1) {
        nomeLivro = readlinesync.question("\nDIGITE O NOME DO LIVRO: ");
        pilha.push(nomeLivro);
    } 
    else if (menu === 2) {
        if (pilha.isEmpty()) {
            console.log("A PILHA ESTA VAZIA.");
        }   else {
            pilha.printStack();
        }
    } 
    else if (menu === 3) {
        if (pilha.isEmpty()) {
            console.log("\nA PILHA ESTÁ VAZIA.");
        } else {
            livroRetirado = pilha.pop();
            console.log(`\nLIVRO ${livroRetirado} FOI RETIRADO(A) DA PILHA.`);
        }
    }
    else if (menu === 0) {
        console.log("\nPROGRAMA FINALIZADO");
    } 
}
