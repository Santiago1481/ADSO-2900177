# Secuencia de pasos lógicos para la solución de un  problema, con pasos finitos.

# Los algoritmos condicionales tienen únicamente dos opciones True o False

```js
    if(condicion){
        alert("Cuando es true");
    }else{
    alert("Cuando es false");
    }
```


```LPP
    SI (condicion) ENTONCES

    SINO 

    FIN SI.

    La condición, siempre debe llevar un operador lógigo o relacional
```

Contexto: 
A = 20 * 3 / 4
B = ((9*3)*(2^2) > 200) ==  T
C = not(A)  && B

INICIO 
    //Declarar varaibles
    Definir A como Real 
    Definir B, C como Booleano

    //Inicializar varaibles
    A = 0.0
    B = null
    C = null
    
    // Asignar datos - realizar proceso
    A = 20 * 3 / 4 != 20
    B = ((9*3)*(2^2) > 200) ==  T
    C = not(A)  && B

    // Generar resultado
    ESCRIBA C

FIN


Se requiere saber si la persona puede entrar al bar o no. Para ello, 
se determino, que si es mayor de edad, podrá, de lo contrario, 
se muestra un mensaje es menor de edad. 

INICIO
    //Declarar varaibles
    Definir edad como entero

    // Inicializar varaibles.
    edad = 0

    // Capturar datos
    ESCRIBA "Digite la edad de la persona: "
    LEER edad

    //Proceso

    SI edad >=18 ENTOCES
        ESCRIBA "Autorizado el ingreso"
    SINO 
        ESCRIBA "Persona menor de edad"
    FIN SI        
FIN


La tienda de Pepito Perez, se esta realizando un descuento del 10% sobre el total
de la compra. 

* Se sabe que el kilo de manzanas cuesta 4600. 
* Se desea saber cuando pagará como valor final un clinete. 
* Se desea saber cuanto ahorra el cliente. 

INICIO
    //Definir varaibles
    Definir cantidad como entero
    Definir precioUnitario, valorTotalNeto, valorTotalBruto, descuento como real

    // Inicializar varaibles
    cantidad = 0;
    precioUnitario = 0.0
    valorTotalNeto = 0.0
    valorTotalBruto = 0.0
    descuento = 0.0

    //Capturar datos
    Escriba "Digite la cantidad a comprar: "
    LEA cantidad

    Escriba "Digite el precio unitario de las manzanas: "
    LEA precioUnitario

    //Proceso
    valorTotalBruto = cantidad * precioUnitario
    
    // Usar algunas de las opciones.

    descuento = valorTotalBruto* 0.1
    valorTotalNeto = valorTotalBruto  - descuento

    valorTotalNeto = valorTotalBruto - (valorTotalBruto * 1)
    
    valorTotalNeto = valorTotalBruto * 0.9


    // Salida 
    Escriba "El usuario debe pagar ",valorTotalNeto
    Escriba "El usuario ahorro ",descuento



FIN



    La condición, siempre debe llevar un operador lógigo o relacional
```
