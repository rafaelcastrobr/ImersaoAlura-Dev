var paulo = {
  nome: "paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
}

var rafa = {
  nome: "rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
}


function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [rafa, paulo]

jogadores[0].nome = document.getElementById("tabelaJogadores").innerHTML = jogadores[0].nome + "<br><img width='40%' src='https://media-exp1.licdn.com/dms/image/C4D03AQE3T9SwW5oPGw/profile-displayphoto-shrink_200_200/0/1612878972645?e=1619049600&v=beta&t=pUjean3-lags7aHRhqDxbPwJzey46TVJQ8d1cSFBaK4'>"

jogadores[1].nome = document.getElementById("tabelaJogadores").innerHTML = jogadores[1].nome + "<br><img width='40%' src='https://media-exp1.licdn.com/dms/image/C4D03AQHNUGchMAa-Yw/profile-displayphoto-shrink_200_200/0/1556583729599?e=1622678400&v=beta&t=EnBoscF_pr3UJOPwgb3cz354Smw4HStPzBbqbQJqa30'>"


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

