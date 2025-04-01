idade = prompt("Qual a sua idade?")

if(idade < 18){
    alert("Você não pode jogar, tem menos de 18 anos !!!!!")
}else{
    alert("Vamos começar a jogar!!!!!")
}

let escJogador = prompt("1-Pedra, 2 - papel ou 3 - tesoura?")
let escComputer = Math.floor((Math.random() * 3) + 1)

if(escJogador == escComputer){
    alert("Empate")
}else if(escJogador == 1){
    if(escComputer == 2){
        alert("Você perdeu")
    }else{
        alert("Você ganhou!!")
    }
}else if(escJogador == 2){
    if(escComputer == 1){
        alert("Você ganhou!!!")
    }else{
        alert("Você perdeu")
    }
}else if(escJogador == 3){
    if(escComputer = 2){
        alert("Você ganhou!!")
    }else{
        alert("Você perdeu")
    }
}
