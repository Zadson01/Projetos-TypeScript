//Array com implementação igual ao JS.
let hobbies: string[] = ["Ler", "filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies);

//Implementação exclusiva do TS
let contato: any[] = ['Paulo', 'psilva@gmail.com', 1121211212, true];
console.log(contato);
console.log(typeof contato);

//Implementação de um array contralado
let endereco: [string, number, string] = ["Av. da paz", 7715, "Zona Rural"];
console.log(endereco);

//Implementação de um Enum(Lista de tipo)
enum semafora{
    Verde,
    Amarelo,
    Vermelho
}
const siga: semafora = semafora.Verde;
const atencao: semafora = semafora.Amarelo;
const pare: semafora = semafora.Vermelho;

console.log(siga);
console.log(atencao);
console.log(pare);