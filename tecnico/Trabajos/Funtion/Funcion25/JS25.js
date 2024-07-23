//Nombre: Santiago Chaparro Riaño
//Fecha: 15 de abril del 2024
//Trabajo: tabalas de multiplicar for
function tablas(plimit){
        let tabla;
        let multiplicar;
        let resultado;
        let par;
        let impar;
        let cTabla;
        let cMult;

        tabla=plimit;
        multiplicar=5;
        par=0;
        impar=0;

       for(cTabla=1;cTabla<=tabla;cTabla++){
        for(cMult=1;cMult<=multiplicar;cMult++){
            resultado=cTabla*cMult;
            
            if(resultado%2==0){
                par=par+1;
               console.log("Buzz");
            }else{
                impar=impar+1;
                console.log("Bass")
            }
            console.log(cTabla+" x "+cMult+" = "+resultado);
        }
       }
        console.log(par);
        console.log(impar);
}



//Como Exp
const tablasExp=function(plimit){
    let tabla;
    let multiplicar;
    let resultado;
    let par;
    let impar;
    let cTabla;
    let cMult;

    tabla=plimit;
    multiplicar=5;
    par=0;
    impar=0;

   for(cTabla=1;cTabla<=tabla;cTabla++){
    for(cMult=1;cMult<=multiplicar;cMult++){
        resultado=cTabla*cMult;
        
        if(resultado%2==0){
            par=par+1;
           console.log("Buzz");
        }else{
            impar=impar+1;
            console.log("Bass")
        }
        console.log(cTabla+" x "+cMult+" = "+resultado);
    }
   }
    console.log(par);
    console.log(impar);
}
