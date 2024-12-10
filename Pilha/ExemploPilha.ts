import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("PRATO AZUL");
pilha.push("PRATO VERDE");
pilha.push("PRATO VERMELHO");

pilha.printStack();

console.log(pilha.contains("Prato branco"));

pilha.pop();

pilha.printStack();