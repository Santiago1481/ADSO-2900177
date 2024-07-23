//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: Numero mayor de tres numeros
function numeroM(pN1,pN2,pN3){
    let numero1 = pN1;
    let numero2 = pN2;
    let numero3 = pN3;
    let resultado;
    if(numero1==numero2&&numero1==numero3&&numero2&&numero3){
        resultado = "Los tres numeros son Iguales"
    }
    else{
        if(numero1>numero2&&numero1>numero3){
        resultado = "El numero uno es mayor"
        }
        else{
            if(numero2>numero1&&numero2>numero3){
                resultado = "El numero dos es mayor"
            }
            else{
                resultado = "El numero tres es mayor"
            }
        }      
    }
    return resultado   
}

// Como Exp
const numeroMExp=function(pN1,pN2,pN3){
    let numero1 = pN1;
    let numero2 = pN2;
    let numero3 = pN3;
    let resultado;
    if(numero1==numero2&&numero1==numero3&&numero2&&numero3){
        resultado = "Los tres numeros son Iguales"
    }
    else{
        if(numero1>numero2&&numero1>numero3){
        resultado = "El numero uno es mayor"
        }
        else{
            if(numero2>numero1&&numero2>numero3){
                resultado = "El numero dos es mayor"
            }
            else{
                resultado = "El numero tres es mayor"
            }
        }      
    }
    return resultado   
}