window.onload = () => {
  function select() {
    let oldSelected = document.getElementsByClass("selected");
    let currentSelected = event.target;

    if (oldSelected != null) {
      oldSelected.classList.remove("selected");
    }
    currentSelected.classList.add("selected");
  }

  function color() {
    let color = document.getElementByClass("selected").style.backgroundColor;

    event.target.style.backgroundColor = color;
  }
  /* Definindo a cor preta como cor inicial */
  document.body.getElementsByClass("cor1") = select();


}
