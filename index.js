function score(vitorias, derrotas) {
  return vitorias - derrotas;
}
score;

let ferro = 10;
let bronze = 20;
let prata = 50;
let ouro = 80;
let diamante = 90;
let lendario = 100;
let imortal = 101;
//Informação de quantidade de vitorias e derrotas//
let vitoria = 200;
let derrota = 9;
let playerScore = score(vitoria, derrota);

if (playerScore <= ferro)
  console.log(
    "O herói tem um saldo de " + playerScore + " e está no nível Ferro"
  );
else if (playerScore <= bronze)
  console.log("O herói tem saldo de " + playerScore + " e está no nível prata");
else if (playerScore <= prata)
  console.log("O herói tem saldo de " + playerScore + " e está no nível Ouro");
else if (playerScore <= ouro)
  console.log(
    "O herói tem saldo de " + playerScore + " e está no nível Diamante"
  );
else if (playerScore <= lendario)
  console.log(
    "O herói tem saldo de " + playerScore + " e está no nível Lendário"
  );
else if (playerScore >= imortal)
  console.log(
    "O herói tem saldo de " + playerScore + " e está no nível Imortal"
  );
