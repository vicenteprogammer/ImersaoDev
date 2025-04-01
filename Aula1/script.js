op = prompt("Você quer converter para doláres[1] ou euros[2]?");
valor = prompt("Digite o valor a ser convertido");
const dolar = 5.74;
const euro = 6.16;
let valConvert;

if(op == 1){
    valConvert = valor / dolar;
}else{
    valConvert = valor / euro;
}
alert("O valor convertido é: " + valConvert.toFixed(2))