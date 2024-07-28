// Generar tabla de multiplicar según el número ingresado
function valide() {
    let numero = parseInt(document.getElementById('valideNumero').value);
    return numero;
}

function generarTabla(numero) {
    let bingo = [];
    let contador = 0;
    let lista = [];
    for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        lista = [];
        for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            contador++;
            let multiplicador = contador * numero;
            lista.push(multiplicador);
        }
        bingo.push(lista);
    }
    return bingo;
}

function mostrarBingo(bingo) {
    let pantallaBingo = "<table class='table table-bordered' id='tabla-bingo'>";
    for (let iteracion11 = 0; iteracion11 < bingo.length; iteracion11++) {
        pantallaBingo += "<tr>";
        for (let iteracion22 = 0; iteracion22 < bingo[iteracion11].length; iteracion22++) {
            let numero = bingo[iteracion11][iteracion22];
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

// Función para resaltar una fila específica
function resaltarFila(filaIndex) {
    console.log(`resaltarFila(${filaIndex}) llamado`);
    let filas = document.querySelectorAll('#tabla-bingo tr');
    for (let iteracion33 = 0; iteracion33 < filas.length; iteracion33++) {
        filas[iteracion33].style.backgroundColor = ''; 
    }
    if (filaIndex >= 0 && filaIndex < filas.length) {
        console.log(`Resaltando la fila ${filaIndex + 1}`);
        filas[filaIndex].style.backgroundColor = 'yellow'; 
    } else {
        console.log(`Índice ${filaIndex} no válido. No se puede resaltar.`);
    }
}

// Funciones específicas para cada fila
function resaltarPrimeraFila() {
    resaltarFila(0);
}

function resaltarSegundaFila() {
    resaltarFila(1);
}

function resaltarTerceraFila() {
    resaltarFila(2);
}

function resaltarCuartaFila() {
    resaltarFila(3);
}

function resaltarQuintaFila() {
    resaltarFila(4);
}

function marcarX() {
    console.log('marcarX() llamado');
    let tabla = document.querySelector('#tabla-bingo');
    let filas = tabla.querySelectorAll('tr');

    // Limpia cualquier color previo de las celdas
    for (let iteracion44 = 0; iteracion44 < filas.length; iteracion44++) {
        let celdas = filas[iteracion44].querySelectorAll('td');
        for (let iteracion55 = 0; iteracion55 < celdas.length; iteracion55++) {
            celdas[iteracion55].style.backgroundColor = ''; 
        }
    }


    for (let iteracion66 = 0; iteracion66 < filas.length; iteracion66++) {
        let celdas = filas[iteracion66].querySelectorAll('td');
        if (iteracion66 < celdas.length) {
            celdas[iteracion66].style.backgroundColor = 'yellow';
        }
        if (celdas.length - 1 - iteracion66 >= 0) {
            celdas[celdas.length - 1 - iteracion66].style.backgroundColor = 'yellow';
        }
    }
}