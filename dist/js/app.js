import { Negociacao } from "./models/Negociacao.js";

const negocio = new Negociacao(new Date(), 10, 20);

console.log(negocio);
console.log(negocio.volume);