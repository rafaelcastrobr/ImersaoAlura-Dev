var numAleatorio = parseInt(Math.random() * 10)

  var tentativa = 3

function clique() {
  var seuNumero = (document.querySelector(".seuNumero").value);

    
  if(seuNumero == numAleatorio) {
    var resultado = document.querySelector(".resultado").innerHTML = "Parabéns você acertou!";
      }else if(seuNumero < numAleatorio) {
        tentativa--
        var resultado = document.querySelector(".resultado").innerHTML = "Você errou! O número é maior. \nVocê tem mais: " + tentativa + ' Tentativas';

      }else if(seuNumero > numAleatorio) {
        tentativa--
        var resultado = document.querySelector(".resultado").innerHTML = "Você errou! O número é menor. \nVocê tem mais: " + tentativa + ' Tentativas';
    
  }if (tentativa < 0) { 
  
      var resultado = document.querySelector(".resultado").innerHTML = "Volte outro dia!"
  }
  
}
/*
if (seuNumero != numAleatorio) {
  var resultado document.querySelector(".resultado").innerHTML = "Acabou suas chances!";
}


if (escolhaNumero != numereroSecreto) {
  alert('Suas tentativas acabaram. O numero secreto era: ' + numereroSecreto)
}

**/
