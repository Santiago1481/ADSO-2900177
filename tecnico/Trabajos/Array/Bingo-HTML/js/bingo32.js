// Generar tabla de multiplicar según el número ingresado
function valide() {
    let numero = parseInt(document.getElementById('valideNumero').value);
    return numero;
}

function generarTabla(numero) {
    let bingo = [];
    let contador = 0;
    let lista = [];
    let iteracion1;
    let iteracion2;
    let multiplicador;
    for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        lista = [];
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            contador++;
            multiplicador = contador * numero;
            lista.push(multiplicador);
        }
        bingo.push(lista);
    }
    return bingo;
}

function mostrarBingo(bingo) {
    let pantallaBingo = "<table class='table table-bordered'>";
    for (let iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
        pantallaBingo += "<tr>";
        for (let iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
            let numero = bingo[iteracion1][iteracion2];
            pantallaBingo += `<td class="td-numero">${numero}</td>`;
        }
        pantallaBingo += "</tr>";
    }
    pantallaBingo += "</table>";
    return pantallaBingo;
}

function actualizarTablaBingo() {
    let numero = valide();
    let bingo = generarTabla(numero);
    document.getElementById('tablaBingo').innerHTML = mostrarBingo(bingo);
    document.getElementById('numero21').innerHTML = `La tabla del bingo es del ${numero}`;
}

// Función para resetear la selección de la tabla (si se implementa en el futuro)
function resetearSeleccion() {
    let todasLasCeldas = document.querySelectorAll('.td-numero');
    todasLasCeldas.forEach(td => {
        td.classList.remove('bg-success');
    });
}