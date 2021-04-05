function clique() {
  
var nome = parseFloat(prompt("Digite 1 para Pikachu \nDigite 2 para Charmander \nDigite 3 para Bulbassauro"))

if(nome == 3) {
var nome = document.querySelector(".nome").innerHTML = "Parabéns, você acertou";
  
}
  
  else if(nome != 3) {

  var nome = document.querySelector(".nome").innerHTML = "Você errou, tente novamente";
}
}
//Troca de imagens//////////////////

function trocar() {
  
var troca1 = parseFloat(prompt("Acertou? \nTrocar de imagem? \n1 Para sim \n2 Para não"))

  if(troca1 == 1){
  
    document.getElementById('img').src = "https://i.imgur.com/uuehF0P.png";
  
}else if(troca1 != 1) {
  return


}
}

function trocar2() {

    var nome1 = parseFloat(prompt("Digite 1 para Pikachu \nDigite 2 para Eevee \nDigite 3 para Onix"));

if(nome1 == 2) {
var nome1 = document.querySelector(".nome").innerHTML = "Parabéns, você acertou";

}else if(nome1 != 2) {

  var nome1 = document.querySelector(".nome").innerHTML = "Você errou, tente novamente";
}
  
}
