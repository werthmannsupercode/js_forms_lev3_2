let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let ergebnis = document.getElementById('ergebnis');

function changeBackground() {

    ergebnis.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}