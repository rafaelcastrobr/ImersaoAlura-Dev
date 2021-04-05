

function clicar() {
  var n1 = document.querySelector(".n1").value;
  var n2 = document.querySelector(".n2").value;

  
var resultado10 = parseFloat(prompt("Digite: 1 para Soma \nDigite: 2 para Subtrair \nDigite: 3 para Multiplicar \nDigite: 4 para Dividir"))

if(resultado10 == 1) {
  
  var resultado = parseFloat(n1) + parseFloat(n2);
  document.querySelector(".resultado").innerHTML = n1 + " + " + n2 + " = " + resultado;

}else if(resultado10 == 2) {
  
  var resultado = parseFloat(n1) - parseFloat(n2);
  document.querySelector(".resultado").innerHTML = n1 + " - " + n2 + " = " + resultado;
  
}else if(resultado10 == 3) {
    var resultado = parseFloat(n1) * parseFloat(n2);
  document.querySelector(".resultado").innerHTML = n1 + " x " + n2 + " = " + resultado;
  
}else if(resultado10 == 4) {
    var resultado = parseFloat(n1) / parseFloat(n2);
  document.querySelector(".resultado").innerHTML = n1 + " / " + n2 + " = " + resultado.toFixed(1);
}

}


