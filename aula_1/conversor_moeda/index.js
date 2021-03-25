var valorDolarHoje = parseFloat(prompt("Qual o valor do dólar hoje?"))
var valorEmDolar = parseFloat(prompt("Qual o valor em dólar quer converter?"))


var valorEmReal = valorEmDolar * valorDolarHoje
var valorEmReal = valorEmReal.toFixed(2)

alert("O valor é: R$ " + valorEmReal)
