//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: suma de porcentaje de notas con condicionales,superior,bueno,medio,malo.
function porcentaje(pnum,pporc){
    let numero = pnum;
    let porcentaje = pporc;
    let resultado = numero * porcentaje;
    return resultado;
}
function condicion(pnum1,pnum2,pnum3){
    let num1 = pnum1 + pnum2 + pnum3;
    let resultado;
    if(num1>=4.5){
        resultado = "Superior"
    }
    else{
        if(num1<4.5||num1>3.5){
            resultado = "Bueno"
        }
        else{
            if(num1<3.5||num1>=3.0){
                resultado = "Media"
            }
            else{
                resultado = "Mala"
            }
        }
    }
    return resultado;
    
}


// Como Exp
const porcentajeExp=function(pnum,pporc){
    let numero = pnum;
    let porcentaje = pporc;
    let resultado = numero * porcentaje;
    return resultado;
}
const condicionExp=function(pnum1,pnum2,pnum3){
    let num1 = pnum1 + pnum2 + pnum3;
    let resultado;
    if(num1>=4.5){
        resultado = "Superior"
    }
    else{
        if(num1<4.5||num1>3.5){
            resultado = "Bueno"
        }
        else{
            if(num1<3.5||num1>=3.0){
                resultado = "Media"
            }
            else{
                resultado = "Mala"
            }
        }
    }
    return resultado;
    
}