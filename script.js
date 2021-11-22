function select() {
    var oldSelected = document.getElementByClass("selected");
    var currentSelected = document.this;

    oldSelected.classList.remove("selected");

    currentSelected.classList.add("selected");
}

function color() {
    var color = document.getElementByClass("selected").style.backgroundColor;

    document.this.style.backgroundColor = color;
}

window.onload = () => {
    document.getElementByClass("cor1") = select();
}
