/**
 * Autor: Santiago Chaparro
 * Fecha: 19/07/2024
 * Bingo
 */
let bingo = [];
let Resultados = [];

let iteracion1;
let iteracion2;
let contador = 0;
let tabla = 3;
let salida;

for(iteracion1=0;iteracion1<5;iteracion1++){
    Resultados = [];
    for(iteracion2=0;iteracion2<5;iteracion2++){
        contador++;
        salida = contador * tabla;
        Resultados.push(salida);
    }
    bingo.push(Resultados);
}
console.log(bingo)

// Tabajo de saludo
function recibirValor(){
    let mensaje = document.getElementById('txtMensaje').value;


    let mensajePantalla = `Su mensaje fue: ${mensaje}`;

    let enviar 
    enviar = document.getElementById('resultado').innerHTML = mensajePantalla

    return false
}

// Trabajo de Sumar
function funcionSuma(){
    let primerN = parcefloat(document.getElementById('primer').value);
    let segundoN = parcefloat(document.getElementById('segundo').value);
    let resultado = primerN+segundoN;
    let mesnajePantalla = `Su resultado es: ${resultado}`
    let envia;
    envia = document.getElementById('result').innerHTML = mesnajePantalla;
    return
}