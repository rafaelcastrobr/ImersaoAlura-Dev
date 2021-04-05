function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme")
  var filmeFavorito = campoFilmeFavorito.value
  campoFilmeFavorito.value = ""
  
  verificarImg(filmeFavorito)
  }

function verificarImg(filmeFavorito) { 
  if (filmeFavorito.endsWith(".jpg")) {
    imprimirImagemNaTela(filmeFavorito)
  }
  else {
    alert("Tente novamente")
      
  }
}

function imprimirImagemNaTela(filmeFavorito) {
  var listaFilmes = document.querySelector("#listaFilmes")
  var elementoFilme = "<img src=" + filmeFavorito + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme

}
