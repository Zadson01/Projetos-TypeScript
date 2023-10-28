"use strict";
function pizzaria() {
    const pizza = prompt("Qual é o tamanho da pizza ? p, m , g");
    const sabor = prompt("Deseja adcionar Pepperoni ? s / n");
    let valor;
    switch (pizza) {
        case "p":
            return valor = 15.00;
        case "m":
            return valor = 20.00;
        case "g":
            return valor = 25.00;
        default:
            return "Escolha uma opção!";
    }
}
const pedido = pizzaria();
alert(pedido);
