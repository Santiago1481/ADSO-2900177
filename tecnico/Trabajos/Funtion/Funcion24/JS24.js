//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: tabalas de multiplicar
function tablas(plimit){
    let contar1;
    let contar2;
    let hasta;
    let multiplicacion;
    let par;
    let impar;
    contar1=0;
    hasta = plimit;
    par=0;
    impar=0;
    while(contar1<hasta){
        contar2=0
        contar1=contar1+1;
        while(contar2<hasta){
            contar2=contar2+1;
            multiplicacion=contar1*contar2;
            console.log(contar1+" x "+contar2+" = "+multiplicacion);
            if(multiplicacion%2 == 0){
                par=par+1;
                console.log("Buzz");
            }else{
                impar=impar+1
                console.log("Bass");
            }
        }
    }
    console.log("hay "+par+" pares");
    console.log("hay "+impar+" impares");
    return multiplicacion
}


// Como Exp
const tablasExp=function(plimit){
    let contar1;
    let contar2;
    let hasta;
    let multiplicacion;
    let par;
    let impar;
    contar1=0;
    hasta = plimit;
    par=0;
    impar=0;
    while(contar1<hasta){
        contar2=0
        contar1=contar1+1;
        while(contar2<hasta){
            contar2=contar2+1;
            multiplicacion=contar1*contar2;
            console.log(contar1+" x "+contar2+" = "+multiplicacion);
            if(multiplicacion%2 == 0){
                par=par+1;
                console.log("Buzz");
            }else{
                impar=impar+1
                console.log("Bass");
            }
        }
    }
    console.log("hay "+par+" pares");
    console.log("hay "+impar+" impares");
    return multiplicacion
}

