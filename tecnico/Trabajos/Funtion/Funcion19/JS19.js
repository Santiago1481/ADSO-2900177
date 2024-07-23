//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: tabala del 9 con pares he impares
function tabla(pnum,pmax){
    let numero = pnum;
    let conta = 0;
    let mult ;
    let resultado = "Fin chao"
    let limite = pmax;
    while(conta<limite){
        conta=conta+1
        mult = numero * conta
        if(mult%2==0){
            console.log("Par")
        }
        else{
            console.log("Impar")
        }
        console.log(numero+" x "+conta+" = "+mult)
    }
    return resultado
}

// Como Exp
const tablaExp=function(pnum,pmax){
    let numero = pnum;
    let conta = 0;
    let mult ;
    let resultado = "Fin chao"
    let limite = pmax;
    while(conta<limite){
        conta=conta+1
        mult = numero * conta
        if(mult%2==0){
            console.log("Par")
        }
        else{
            console.log("Impar")
        }
        console.log(numero+" x "+conta+" = "+mult)
    }
    return resultado
}
