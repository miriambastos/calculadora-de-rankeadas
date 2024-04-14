
function calculadoraDeNivel(vitorias, derrotas) {

    //criar as variaveis de vitoria e nivel
let saldoDeVitorias = vitorias - derrotas;
let nivel;

switch (true) {
    case (vitorias < 10):
        nivel = "Ferro";
        break;

    case (vitorias >= 11 && vitorias <= 20):
        nivel = "Bronze";
        break;

    case (vitorias >= 21 && vitorias <= 50):
        nivel = "Prata";
        break;

    case (vitorias >= 51 && vitorias <= 80):
        nivel = "Ouro";
        break;

    case (vitorias >= 81 && vitorias <= 90):
        nivel = "Diamante";
        break;

      case (vitorias >= 91 && vitorias <= 100):
        nivel = "Lendário";
        break;

    case (vitorias >= 101):
        nivel = "Imortal";
        break;
}
console.log("O heroi tem um saldo de " + saldoDeVitorias + " e esta no nível " + nivel);
}

calculadoraDeNivel (65 , 34); //primeiro valor vitoria e segundo derrota
