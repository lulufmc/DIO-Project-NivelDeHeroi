function subtraction(wins, loss){
    let result = wins - loss
    return result
}

let winBalance = subtraction(10, 5)
let level = ""

switch(true){
    case winBalance <= 10:
    level = "Ferro"
    break
    
    case winBalance >= 11 && winBalance <= 20:
    level = "Bronze"
    break
    
    case winBalance >= 21 && winBalance <= 50:
    level = "Prata"
    break

    case winBalance >= 51 && winBalance <= 80:
    level = "Ouro"
    break

    case winBalance >= 81 && winBalance <= 90:
    level = "Diamante"
    break

    case winBalance >= 91 && winBalance <= 100:
    level = "Lendário"
    break

    case winBalance >= 101:
    level = "Imortal"
}

console.log(`O Herói tem saldo de ${winBalance} vitórias e está no nível de ${level}`)

