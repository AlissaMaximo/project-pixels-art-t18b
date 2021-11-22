function select() {
    var oldSelected = document.getElementByClass("selected");
    var currentSelected = document.this;

    oldSelected.classList.remove("selected");

    currentSelected.classList.add("selected");
}

document.getElementByClass("cor1").onload = select()



