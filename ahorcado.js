var palabras = ["javascript", "programacion", "computadora", "desarrollo", "tecnologia"];
var palabra = palabras[Math.floor(Math.random() * palabras.length)];
var letrasAdivinadas = [];
var intentosRestantes = 6;

function mostrarPalabra() {
    var palabraMostrada = "";
    for (var i = 0; i < palabra.length; i++) {
        if (letrasAdivinadas.indexOf(palabra[i]) !== -1) {
            palabraMostrada += palabra[i] + " ";
        } else {
            palabraMostrada += "_ ";
        }
    }
    document.getElementById("palabra").innerHTML = palabraMostrada;
}

function mostrarLetras() {
    document.getElementById("letras").innerHTML = letrasAdivinadas.join(", ");
}

function mostrarIntentos() {
    document.getElementById("intentos").innerHTML = intentosRestantes;
}

function adivinar() {
    var letra = document.getElementById("letra").value.toLowerCase();
    if (letra.length !== 1 || letrasAdivinadas.indexOf(letra) !== -1) {
        return;
    }
    letrasAdivinadas.push(letra);
    if (palabra.indexOf(letra) === -1) {
        intentosRestantes--;
    }
    mostrarPalabra();
    mostrarLetras();
    mostrarIntentos();
    if (intentosRestantes === 0) {
        alert("Perdiste. La palabra era " + palabra + ".");
        location.reload();
    }
    if (palabraAdivinada()) {
        alert("Ganaste!");
        location.reload();
    }
}

function palabraAdivinada() {
    for (var i = 0; i < palabra.length; i++) {
        if (letrasAdivinadas.indexOf(palabra[i]) === -1) {
            return false;
        }
    }
    return true;
}

mostrarPalabra();
mostrarLetras();
mostrarIntentos();