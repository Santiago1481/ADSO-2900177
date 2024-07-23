//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: Condicional que numero es mayor
function condicion(pnum1,pnum2){
    let num1 = pnum1;
    let num2 = pnum2;
    let condicionR
    if (num1 == num2){
     condicionR = "Son iguales los dos numeros"
    }
    else{
        if (num1>num2){
         condicionR = "El numero uno es mayor"
        }
        else{
         condicionR = "El numero dos es mayor"
        }
    }
    return condicionR;
}

// Como Exp
const condicionExp=function(pnum1,pnum2){
    let num1 = pnum1;
    let num2 = pnum2;
    let condicionR
    if (num1 == num2){
     condicionR = "Son iguales los dos numeros"
    }
    else{
        if (num1>num2){
         condicionR = "El numero uno es mayor"
        }
        else{
         condicionR = "El numero dos es mayor"
        }
    }
    return condicionR;
}