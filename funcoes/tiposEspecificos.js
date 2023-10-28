"use strict";
//Array com implementação igual ao JS.
let hobbies = ["Ler", "filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies);
//Implementação exclusiva do TS
let contato = ['Paulo', 'psilva@gmail.com', 1121211212, true];
console.log(contato);
console.log(typeof contato);
//Implementação de um array contralado
let endereco = ["Av. da paz", 7715, "Zona Rural"];
console.log(endereco);
//Implementação de um Enum(Lista de tipo)
var semafora;
(function (semafora) {
    semafora[semafora["Verde"] = 0] = "Verde";
    semafora[semafora["Amarelo"] = 1] = "Amarelo";
    semafora[semafora["Vermelho"] = 2] = "Vermelho";
})(semafora || (semafora = {}));
const siga = semafora.Verde;
const atencao = semafora.Amarelo;
const pare = semafora.Vermelho;
console.log(siga);
console.log(atencao);
console.log(pare);
