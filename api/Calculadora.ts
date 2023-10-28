function somaT(a:number, b:number){
    return a +  b

}
function divisao(c:number, d:number){
    return c / d
}

function subtracao(e:number, f:number){
    return e - f
}
function multiplicacao( g:number, h:number){
    return g * h
}


let opcao: number = 4
let num1 = 10;
let num2 = 3;

switch(opcao){
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


