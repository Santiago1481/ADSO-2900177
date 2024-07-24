function valide() {
    let numero = parseInt(document.getElementById('valideNumero').value);
    let numerito = `La tabla del bingo es de: ${numero}`;
    document.getElementById('numero21').innerHTML = numerito;
    return false;
}

function mostrarBingo(pbingo) {
    let bingo = pbingo;
    let pantallaBingo = "<table class='table table-bordered'>";

    for (let iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
        pantallaBingo += "<tr>";
        for (let iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
            pantallaBingo += `<td id="cuadro-${iteracion1}-${iteracion2}" class="td-numero">${bingo[iteracion1][iteracion2]}</td>`;
        }
        pantallaBingo += "</tr>";
    }

    pantallaBingo += "</table>";
    return pantallaBingo;
}

// Generación del bingo
let bingo = [];
let contador = 1;

for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    let lista = [];
    for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        lista.push(contador);
        contador++;
    }
    bingo.push(lista);
}

// Mostrar el bingo generado en el acordeón
document.getElementById('tablaBingo').innerHTML = mostrarBingo(bingo);