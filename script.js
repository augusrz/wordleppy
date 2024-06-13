let intentos = 6;
let palabra = "APPLE";
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
function intentar(){
    const INTENTO = leerIntento();
    console.log(INTENTO)
}
const input = document.getElementById("guess-input");
const valor = input.value;
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
