/* Criando os pixels. Organizando os pixels. */
  let pixelBoard = document.querySelector('#pixel-board');
  let numLine = 0;

  for (let i = 0; i < 25; i += 1) {
    let pixel = document.createElement('div');

    if (i % 5 === 0) {
      numLine += 1;
    }

    pixel.classList.add('linha' + numLine);
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }

window.onload = function () {
  
/* Deixando a cor de fundo de todos os pixels branca. */
  let allPixels = document.getElementsByClassName('pixel');
  let allPixelsLength = allPixels.length;

  for (let i = 0; i < allPixelsLength; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }

/* Ao clicar numa cor ela é selecionada. */
  function selectColor (theColor) {
    let oldSelected = document.querySelector('.selected');
    let currentSelected = theColor.target;

    oldSelected.classList.remove('selected');
    currentSelected.classList.add('selected');
  }

  let colors = document.getElementById('color-palette').childNodes;

  colors.forEach (theColor => {
    theColor.addEventListener ('click', selectColor)
  })

/* Clicar em um pixel faz com que ele seja colorido com a cor selecionada. */
function colorPixel(event) {
  let selectedColor = document.querySelector('.selected');
  let chosenPixel = event.target;

  let aColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  if (chosenPixel !== pixelBoard) {
    chosenPixel.style.backgroundColor = aColor;
  }
}

pixelBoard.addEventListener('click', colorPixel);

};

/*
REFERÊNCIAS

O Baêta me ajudou em vários pontos pelo Code Review no GitHub.

No requisito 7 alguém na mentoria do Baêta apontou pra aplicar apenas as crianças do color-palette.

No requisito 8 Kesley Muniz e Polyana Sousa me ajudaram ao indicar o event.target, getComputedStyle e o if para pintar apenas os pixels e não o pixelBoard.

*/

