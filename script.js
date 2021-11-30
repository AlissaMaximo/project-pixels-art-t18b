window.onload = () => {
/* Deixando a cor de fundo de todos os pixels branca. */
  let allPixels = document.getElementsByClassName('pixel');
  let allPixelsLength = allPixels.length;
  for (let i = 0; i < allPixelsLength; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
  
/* Definindo a cor preta como cor inicial. */
  let blackColor = document.getElementsByClassName('cor1');
  blackColor[0].classList.add('selected');

/* Ao clicar numa cor ela é selecionada. */
  function selectColor (e) {
    let oldSelected = document.getElementsByClassName('selected')[0];
    let currentSelected = e.target;

    oldSelected.classList.remove('selected');
    currentSelected.classList.add('selected');
  }

  document.getElementById('color-palette').addEventListener('click', selectColor);

/* Clicar em um pixel faz com que ele seja colorido com a cor selecionada. */

  let selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;

  function showMessage() {
    console.log(document.getElementsByClassName('selected')[0]);
  }
  document.addEventListener('click', showMessage);

  document.querySelectorAll('.pixel').forEach (singlePixel =>
    {singlePixel.addEventListener ('click', event => {
        singlePixel.style.backgroundColor = selectedColor;
      }
      )
    }
  )

}
