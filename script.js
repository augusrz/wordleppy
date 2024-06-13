let intentos = 6;
const palabra = "APPLE";
let intentosRealizados = 0;
const grid = document.getElementById("grid");

window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
    crearGrid();
}

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar(){
    if (intentosRealizados < intentos) {
        const INTENTO = leerIntento();
        if (INTENTO.length === palabra.length) {
            mostrarIntento(INTENTO);
            intentosRealizados++;
            if (INTENTO === palabra) {
                alert("¡Felicidades! Adivinaste la palabra.");
                button.disabled = true;
            } else if (intentosRealizados === intentos) {
                alert("¡Lo siento! Se te acabaron los intentos. La palabra era " + palabra + ".");
                button.disabled = true;
            }
        } else {
            alert("La palabra debe tener " + palabra.length + " letras.");
        }
    }
}

function leerIntento(){
    const intento = document.getElementById("guess-input").value.toUpperCase();
    return intento;
}

function crearGrid() {
    for (let i = 0; i < intentos; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < palabra.length; j++) {
            const cell = document.createElement("span");
            cell.classList.add("letter");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function mostrarIntento(intento) {
    const row = grid.children[intentosRealizados];
    for (let i = 0; i < intento.length; i++) {
        const cell = row.children[i];
        cell.textContent = intento[i];
        if (intento[i] === palabra[i]) {
            cell.style.backgroundColor = "green";
        } else if (palabra.includes(intento[i])) {
            cell.style.backgroundColor = "yellow";
        } else {
            cell.style.backgroundColor = "grey";
        }
    }
    document.getElementById("guess-input").value = "";
}




