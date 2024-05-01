//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: Sueldo basico
function sueldo(pDiast,pPagod){
    let diasT = pDiast;
    let pagoD = pPagod;
    let salario = diasT * pagoD;
    return salario;
}
function salud(pDiast,pPagod){
    let pagoSalud = sueldo(pDiast,pPagod)*0.12;    
    return pagoSalud;
}
function pension(pDiast,pPagod){
    let pagoPension = sueldo(pDiast,pPagod)*0.16;
    return pagoPension;
}
function arl(pDiast,pPagod){
    let pagoArl = sueldo(pDiast,pPagod)*0.052;
    return pagoArl
}
function sueldoAp(pDiast,pPagod){
    let sa = salud(pDiast,pPagod);
    let pe = pension(pDiast,pPagod);
    let ar = arl(pDiast,pPagod);
    let resultadoF = sa + pe + ar;
    let resultadoFin =  sueldo(pDiast,pPagod) - resultadoF ;
    return resultadoFin
}

// Como Exp
const sueldoExp=function(pDiast,pPagod){
    let diasT = pDiast;
    let pagoD = pPagod;
    let salario = diasT * pagoD;
    return salario;
}
const saludExp=function(pDiast,pPagod){
    let pagoSalud = sueldo(pDiast,pPagod)*0.12;    
    return pagoSalud;
}
const pensionExp=function(pDiast,pPagod){
    let pagoPension = sueldo(pDiast,pPagod)*0.16;
    return pagoPension;
}
const arlExp=function(pDiast,pPagod){
    let pagoArl = sueldo(pDiast,pPagod)*0.052;
    return pagoArl
}
const sueldoApExp=function(pDiast,pPagod){
    let sa = salud(pDiast,pPagod);
    let pe = pension(pDiast,pPagod);
    let ar = arl(pDiast,pPagod);
    let resultadoF = sa + pe + ar;
    let resultadoFin =  sueldo(pDiast,pPagod) - resultadoF ;
    return resultadoFin
}

