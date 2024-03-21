/*
    Quando clicar na seta para avançar temos 
    que esconder todas as imagens e mostrar a proxima.

    a imagem atual começa em 0 porque é a primeira imagem assim que for clicando no avançar  eu preciso
    adicionar mais 1 no contador de imagem pra poder saber que agora vou mostrar a segunda imagem  

    Esconder imagems 
        pegar todas as imagens usando DOM e remover a classe mostrar

    Mostrar a proxima imagem 
    pegar todas as imagens, descobrir qual a proxima, e colocar a classe mostrar nela 
*/

const imagemPainel = document.querySelectorAll(".imagemPainel");
const setaAvancar = document.getElementById("btnAvancar");
const setaVoltar = document.getElementById("btnVoltar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  const totalDeImagens = imagemPainel.length - 1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  imagemAtual++;

  imagemPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });

  imagemPainel[imagemAtual].classList.add("mostrar");
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  imagemPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });

  imagemPainel[imagemAtual].classList.add("mostrar");
});
