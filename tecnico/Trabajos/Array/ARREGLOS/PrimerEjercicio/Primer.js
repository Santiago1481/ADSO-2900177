/*
Tema: Arreglos
Autor: Santiago Chaparro Riaño
Fecha: 29-04-2024
*/
let arreglosNumero = [];
let arregloFrutas = [];
let sizeArrayNumeros;
let sizeArrayFrutas;
let interacion;

arreglosNumero = [2,4,6,8,10,12,14,16,18];
arregloFrutas = ['Mora','Piña','Fresa','Limon','Naranja','Guanabana'];

sizeArrayNumeros = arreglosNumero.length;
sizeArrayFrutas = arregloFrutas.length;

console.log("Arreglo de Numeros: "+arreglosNumero);
console.log("Arreglo de Frutas: "+arregloFrutas);
console.log("Segundo numero: "+arreglosNumero[2]);
console.log("La tercer fruta: "+arregloFrutas[3]);

for(interacion=0;interacion<sizeArrayNumeros;interacion++){
    console.log("Numero"+interacion+":"+arreglosNumero[interacion]);
}


let matriz = [];
matriz = [
    [5,6,7,8],
    [3,5,4],
    [2,3,4,5,6],
];

console.log("Matriz");
console.log(matriz);


let sizeArrayMatriz;
let interacionM;
let contador;
let sizeInterno;
sizeArrayMatriz = matriz.length;
for(interacionM=0;interacionM<sizeArrayMatriz;interacionM++){
    sizeInterno = matriz[interacionM].length;
    for(contador=0;contador<sizeInterno;contador++){
        console.log(matriz[interacion]+[contador]);
    }
}




