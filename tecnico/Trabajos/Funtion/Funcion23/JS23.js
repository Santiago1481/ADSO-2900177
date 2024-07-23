//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: tabala del 9 con pares he impares en for
function tabla(pnum, pmax) {
    let numero = pnum;
    let resultado = "Fin chao";
    let limite = pmax;

    for (let conta = 1; conta < limite; conta++) {
        let mult = numero * conta;
        if (mult % 2 === 0) {
            console.log("Par");
        } else {
            console.log("Impar");
        }
        console.log(numero + " x " + conta + " = " + mult);
    }

    return resultado;
}

// Como Exp
const tablaExp=function(pnum, pmax) {
    let numero = pnum;
    let resultado = "Fin chao";
    let limite = pmax;

    for (let conta = 1; conta < limite; conta++) {
        let mult = numero * conta;
        if (mult % 2 === 0) {
            console.log("Par");
        } else {
            console.log("Impar");
        }
        console.log(numero + " x " + conta + " = " + mult);
    }

    return resultado;
}
