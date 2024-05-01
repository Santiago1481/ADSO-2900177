//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: Area de tres cuadrados y cual es mayor
function acuadrado(plado){
    let lado = plado;
    let rescuadrado = lado * lado;
    return rescuadrado;
}
function areaMayor(pArea1,pArea2,pArea3){
    let cuadrado1 = pArea1;
    let cuadrado2 = pArea2;
    let cuadrado3 = pArea3;
    let arMayor;
    if(cuadrado1 == cuadrado2&&cuadrado1==cuadrado3&&cuadrado2==cuadrado3){
        arMayor ="Los tres cuadrador son iguales";
    }
    else{
        if(cuadrado1>cuadrado2&&cuadrado1>cuadrado3){
            arMayor ="CUADRADO1"
        }
        else{
            if(cuadrado2>cuadrado1&&cuadrado2>cuadrado3){
                arMayor ="CUADRADO2"
            }
            else{
                arMayor ="CUADRADO3"
            }
        }
    }
    return arMayor
}


// Como Exp
const acuadradoExp=function(plado){
    let lado = plado;
    let rescuadrado = lado * lado;
    return rescuadrado;
}
const areaMayorExp=function(pArea1,pArea2,pArea3){
    let cuadrado1 = pArea1;
    let cuadrado2 = pArea2;
    let cuadrado3 = pArea3;
    let arMayor;
    if(cuadrado1 == cuadrado2&&cuadrado1==cuadrado3&&cuadrado2==cuadrado3){
        arMayor ="Los tres cuadrador son iguales";
    }
    else{
        if(cuadrado1>cuadrado2&&cuadrado1>cuadrado3){
            arMayor ="CUADRADO1"
        }
        else{
            if(cuadrado2>cuadrado1&&cuadrado2>cuadrado3){
                arMayor ="CUADRADO2"
            }
            else{
                arMayor ="CUADRADO3"
            }
        }
    }
    return arMayor
}