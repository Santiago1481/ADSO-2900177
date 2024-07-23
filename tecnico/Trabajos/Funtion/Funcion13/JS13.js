//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: Calcular edad de tres personas y saber si son mayor de edad
function caledad(pfechaN){
    let fechaN = pfechaN;
    let fechaAct = 2024;
    let edadF = fechaAct - fechaN;
    return edadF;
}
function funcionCon(pedad1){
    let edad = pedad1;
    let resultadoEdad;
    if(edad>17){
        resultadoEdad = "Es mayor de edad"
    }
    else{
        resultadoEdad = "Es menor de edad"
    }
    return resultadoEdad;
}


//Como Exp
const caledadExp=function(pfechaN){
    let fechaN = pfechaN;
    let fechaAct = 2024;
    let edadF = fechaAct - fechaN;
    return edadF;
}
const funcionConExp=function(pedad1){
    let edad = pedad1;
    let resultadoEdad;
    if(edad>17){
        resultadoEdad = "Es mayor de edad"
    }
    else{
        resultadoEdad = "Es menor de edad"
    }
    return resultadoEdad;
}