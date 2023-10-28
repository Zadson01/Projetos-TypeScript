"use strict";
function somaT(a, b) {
    return a + b;
}
function divisao(c, d) {
    return c / d;
}
function subtracao(e, f) {
    return e - f;
}
function multiplicacao(g, h) {
    return g * h;
}
let opcao = 4;
let num1 = 10;
let num2 = 3;
switch (opcao) {
    case 1:
        console.log(somaT(num1, num2));
        break;
    case 2:
        console.log(divisao(num1, num2));
        break;
    case 3:
        console.log(subtracao(num1, num2));
        break;
    case 4:
        console.log(multiplicacao(num1, num2));
}
