function pizzaria(){
  const pizza = prompt("Qual é o tamanho da pizza ? p, m , g");

  let PizzaP = 15;
  let PizzaM = 20;
  let PizzaG = 25;
  let valorP = 2;
  let valorM = 3;

switch(pizza){
    case "p":
        return PizzaP + valorP;
    case "m":
         return PizzaM + valorM;
    case  "g":
        return PizzaG = 25.00;
    default:
    
  }
  const sabor = prompt("Deseja adcionar Pepperoni? s/n");
  if (sabor || "s") {
    PizzaP = 15.00 + 2;
  } 
  if (sabor || "s") {
    20.00 + 3;
 } 
}
const  pedido =  pizzaria();
alert(pedido );