import readlinesync = require('readline-sync')
import { Queue } from './Queue'

const fila = new Queue<string>()

fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

//fila.enqueue(readlinesync.question("DIGITE O SEU NOME: "))

//fila.printQueue();

console.log(fila.contains("Alana"))

console.log(fila.count())

console.log("\nFoi Atendido(a): ", fila.dequeue()) // Mostra o elemento que foi retirado.

fila.printQueue()

//console.log("\nProximo Atendido(a): ", fila.peek()) // Mostra qual é o proximo elemento da fila 