
import promptSync from 'prompt-sync';
import { esPar, esPositivo, esPrimo } from './validaciones.js';

const prompt = promptSync();
const numero = parseInt(prompt("Ingrese un número entero: "));

console.log("¿Es par?:", esPar(numero));
console.log("¿Es positivo?:", esPositivo(numero));
console.log("¿Es primo?:", esPrimo(numero));
