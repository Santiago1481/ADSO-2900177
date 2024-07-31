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





function marcarX() {
    // console.log('marcarX() llamado');
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

function marcarLetraB() {
    let tabla = document.querySelector('#tabla-bingo');
    let filas = tabla.querySelectorAll('tr');

    // Limpia cualquier color previo de las celdas
    for (let iteracionUno = 0; iteracionUno < filas.length; iteracionUno++) {
        let celdas = filas[iteracionUno].querySelectorAll('td');
        for (let iteracionDos = 0; iteracionDos < celdas.length; iteracionDos++) {
            celdas[iteracionDos].style.backgroundColor = ''; 
        }
    }

    for (let iteracion = 0; iteracion < filas.length; iteracion++) {
        let celdas = filas[iteracion].querySelectorAll('td');
            celdas[0].style.backgroundColor = 'yellow';
        
    }
}

function marcarLetraI() {
    let tabla = document.querySelector('#tabla-bingo');
    let filas = tabla.querySelectorAll('tr');

    // Limpia cualquier color previo de las celdas
    for (let iteracionUno = 0; iteracionUno < filas.length; iteracionUno++) {
        let celdas = filas[iteracionUno].querySelectorAll('td');
        for (let iteracionDos = 0; iteracionDos < celdas.length; iteracionDos++) {
            celdas[iteracionDos].style.backgroundColor = ''; 
        }
    }

    for (let iteracion = 0; iteracion < filas.length; iteracion++) {
        let celdas = filas[iteracion].querySelectorAll('td');
            celdas[1].style.backgroundColor = 'yellow';
        
    }
}

function marcarPrimeraX() {
    // console.log('marcarX() llamado');
    let tabla = document.querySelector('#tabla-bingo');
    let filas = tabla.querySelectorAll('tr');

    // Limpia cualquier color previo de las celdas
    for (let iteracion44 = 0; iteracion44 < filas.length; iteracion44++) {
        let celdas = filas[iteracion44].querySelectorAll('td');
        for (let iteracion55 = 0; iteracion55 < celdas.length; iteracion55++) {
            celdas[iteracion55].style.backgroundColor = ''; 
        }
    }


    for (let iteracion66 = 0; iteracion66 < 3; iteracion66++) {
        let celdas = filas[iteracion66].querySelectorAll('td');
        if (iteracion66 < celdas.length) {
            celdas[iteracion66 + 1].style.backgroundColor = 'yellow';
        }

        if (celdas.length - 1 - iteracion66 >= 0) {
            celdas[celdas.length - 1 - (iteracion66+1)].style.backgroundColor = 'yellow';
        }
    }
}

