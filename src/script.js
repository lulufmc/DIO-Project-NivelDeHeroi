console.log("Qual o nome do seu personagem?")
let nome = "Luiz"
console.log("Seja bem vindo ao DIOlorant, " + nome)
console.log("No início do jogo, você começará no Elo Ferro com 0 de XP.")
console.log("Conforme for ganhando partidas, você ganha XP e consequentemente sobe de elo.")
let xp = 1000
let elo = "Ferro"

switch(true){    
    case xp >= 1000 && xp < 2000:
        elo = "Bronze"
        break       
        
    case xp >= 2000 && xp < 3000:
       elo = "Prata"
       break   

    case xp >= 3000 && xp < 4000:
       elo = "Ouro"
       break
       
    case xp >= 4000 && xp < 5000:
        elo = "Platina"
        break
        
    case xp >= 5000 && xp < 6000:
        elo = "Diamante"
        break
        
    case xp >= 6000 && xp < 7000:
        elo = "Ascendente"
        break         

    case xp >= 7000 && xp < 8000:
        elo = "Imortal"
        break
        
    case xp >= 8000:
        elo = "Radiante"
        break    
}

console.log("O herói de nome " + nome + " está no nível de " + elo)