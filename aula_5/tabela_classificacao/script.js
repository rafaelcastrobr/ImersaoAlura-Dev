var time2 = {
  nome: "Corinthians",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
}

var time1 = {
  nome: "Palmeiras",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
}


function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [time1, time2]

jogadores[0].nome = document.getElementById("tabelaJogadores").innerHTML = jogadores[0].nome + "<br><img width='40%' src='https://i.pinimg.com/originals/53/04/aa/5304aa8890adedc14ae704c07fc2b064.png'>"

jogadores[1].nome = document.getElementById("tabelaJogadores").innerHTML = jogadores[1].nome + "<br><img width='40%' src='https://futebafc.com.br/wp-content/uploads/2018/12/CORINTHIANS.png'>"


exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela (jogadores) {
  var html = "" 
  for(var i=0;i<jogadores.length;i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + " <button onClick='adicionarVitoria(" + i + ")'>+</button>" + " <button onClick='tirarVitoria(" + i + ")'>-</button></td>"
    html += "<td>" + jogadores[i].empates + " <button onClick='adicionarEmpate(" + i + ")'>+</button>" + " <button onClick='tirarEmpate(" + i + ")'>-</button></td>"
    html += "<td>" + jogadores[i].derrotas + " <button onClick='adicionarDerrota(" + i + ")'>+</button>" + " <button onClick='tirarDerrota(" + i + ")'>-</button></td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
    
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function tirarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias--
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
 
function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  
}

function tirarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates--
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}


function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

function tirarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas--
  exibirJogadoresNaTela(jogadores)
}

