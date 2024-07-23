/**
 * Ejercicio de arreglo key:value llave:valor
 * Autor: Santiago CR
 * Fecha: 15-05-2024
 */
let factura = [];
let totalpago = [];
let totalpagoproducto;
factura = [
    {codigo:1, nombreProducto:'malteada', cantidad:2, valorUnidad:12000},
    {codigo:2, nombreProducto:'picada', cantidad:3, valorUnidad:25000},
    {codigo:3, nombreProducto:'Hamburguesa mixta', cantidad:4, valorUnidad:16000},
    {codigo:4, nombreProducto:'churrasco', cantidad:1, valorUnidad:25000},
    {codigo:5, nombreProducto:'gaseosa', cantidad:5, valorUnidad:5000},
    {codigo:6, nombreProducto:'limonada', cantidad:5, valorUnidad:6000},
    
];
for(let interacion=0; interacion<factura.length;interacion++){
    totalpagoproducto = factura[interacion].cantidad * factura[interacion].valorUnidad;
    totalpago.push({codigo: factura[interacion].codigo, nombreProducto: factura[interacion].nombreProducto, cantidad: factura[interacion].cantidad, valorUnidad: factura[interacion].valorUnidad})
}
console.log(totalpago)
