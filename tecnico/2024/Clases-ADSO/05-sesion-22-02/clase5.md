# Algoritmo (Cuantitativos y Cualitativos)

# Operadores

* Lógicos: `and`, `not`, `or`
* Aritméticos: `%(mod)`, `^`, `*`, `/`, `+`, `-` 
* Relacionales:`>`, `<`, `!=`, `==`, `>=`, `<=` 
* Elementos apoyo: `[]`, `{}`, `()`


## Palabras reservadas para crear Pseudocódigo

- `INICIO` * `FIN` 
- `DEFINIR` * `COMO`
- `ESCRIBA`
- `LEA` 
- `SI` * `ENTONCES` * `SINO` * `FIN SI`
- `PARA` * `FIN PARA`
- `HASTA` * `FIN HASTA`
- `MIENTRAS` * `FIN MIENTRAS`
- `HAGA`
- `CASO` * `DE` * `OTRO` * `FIN CASO`
- `FUNCION` * `RETORNE` * `FIN FUNCION`
- `PROCEDIMIENTO` * `FIN PROCEDIMIENTO`
- `REPETIR` * `HASTA_QUE`
- `SELECCIONAR` * `FIN SELECCIONAR`
- `ROMPER`
- `CONTINUAR`
- `ENCADENAR`
- `LARGO`
- `ANCHO`
- `CARACTER` * `ENTERO` * `REAL` * `BOOLEANO` * `CADENA` * `ARREGLO`
- `REGISTRO`
- `ARCHIVO`
- `LEER_ARCHIVO`
- `ESCRIBIR_ARCHIVO`
- `ABRIR_ARCHIVO`
- `CERRAR_ARCHIVO`

#### Nota: Una buena manera de diferenciar estas palabras, es escribirlas en mayúscula. 

## Ejemplo

#### Ej1 Obtener el promedio de tres notas y luego mostrar el resultados. 

```
    INICIO
        DECLARAR nota1, nota2, nota3, promedio, sumatoria COMO REAL
        
        nota1 <- 3.4
        nota2 <- 5.0
        nota3 <- 2.8
        
        sumatoria <- nota1+nota2+nota3
        promedio <- sumatoria/3
        
        ESCRIBA "El promedio del estudiante es de: ",promedio
    FIN
```

#### Ej2 En la tienda de Pepito, se vende el kilo de naranjas a $380, se desea saber cuanto debe pagar un cliente por n kilos, dónde n corresponde a la cantidad de kilos que lleva el usurio.

```
    INICIO
        DEFINIR cantidad COMO ENTERO
        DEFINIR totalPagar COMO REAL
        
        ESCRIBA "Digite la cantidad de kilos a llevar: "
        LEA cantidad
        
        totalPagar <- cantidad * 380
        
        ESCRIBA "El valor a pagar es de ",totalPagar
    FIN
```

#### 3 Se requiere saber el descuento que se aplica al total de la factura de los clientes de Pepito Perez. Se sabe que:
1. Solicitar el nombre del producto a comprar.
2. Solicitar el valor unitario del producto
3. Solcitar la cantidad de que desea llevar el cliente. 
4. Aplicar el el 8% sobre el total de la compra
5. Mostrar por pantalla, el nombre del producto, cuando se debia pagar antes de descuento, valor a pagar neto y  el valor de descuento que se aplicó.

* Solución Pseudocódigo
```
    INICIO 
        DEFINIR nombreProducto COMO CADENA
        DEFINIR cantidad COMO ENTERO
        DEFINIR ValorUnitario, ValorBruto, ValorTotalNeto, ValorDescuento COMO REAL
        
        // Inicializar variables
        nombreProducto = null
        ValorUnitario = 0.0
        ValorBruto = 0.0
        ValorTotalNeto = 0.0
        ValorDescuento = 0.0
        cantidad = 0
        
        ESCRIBA "Digite el nombre del producto: "
        LEER: nombreProducto
        
        ESCRIBA "Digite el valor unitario del producto: "
        LEER: ValorUnitario
        
        ESCRIBA "Digite la cantidad de ",nombreProducto," a comprar: "
        LEER cantidad
        
        ValorBruto = cantidad * ValorUnitario	
        ValorDescuento = ValorBruto * 0.08
        ValorTotalNeto = ValorBruto - ValorDescuento

        
        ESCRIBA: "Valor bruto de ",nombreProducto," es: ",ValorBruto
        ESCRIBA: "Valor neto de ",nombreProducto," es: ",ValorTotalNeto
        ESCRIBA: "Valor de descuento de ",nombreProducto," es: ",ValorDescuento
        
    FIN 
```

* Solución Python
```python
    # Ejemplo 1

    nombreProducto = ""
    ValorUnitario = 0.0
    ValorBruto = 0.0
    ValorTotalNeto = 0.0
    ValorDescuento = 0.0
    cantidad = 0

    #Entrada de datos 
    nombreProducto = input("Digite el nombre del producto: ")
    ValorUnitario = float(input("Digite el valor unitario del producto: "))
    cantidad = int(input("Digite la cantidad de "+nombreProducto+" a comprar: "))

    # Proceso
    ValorBruto = cantidad * ValorUnitario	
    ValorDescuento = ValorBruto * 0.08
    ValorTotalNeto = ValorBruto - ValorDescuento

    print("Valor bruto de "+nombreProducto+" es: "+str(ValorBruto))
    print("Valor neto de "+nombreProducto+" es: "+str(ValorTotalNeto))
    print("Valor de descuento de "+nombreProducto+" es: "+str(ValorDescuento))
```

2. Diagrama de flujo:
	
    * Responde a la misma necesidad de un Pseudocódigo, solo es este es representado de manera gráfica. 

## Ejemplo py

Se requiere saber el descuento que se aplica al total de la factura de los clientes,
De Pepito Perez se sabe que:

    *solicitar el nombre del producto a comprar 
    *solicitar el valor unitario del producto 
    *solicitar la cantidad de que desea llevar el cliente 
    *Aplicar el 8% sobre el total de la compra 
    *Mostrar por pantalla el nombre del producto, cuanto se debia pagar antes del descuanto, valor a pagar neto y valor de descuento que 
    se aplico

    # Ejemplo 1

    nombreProducto = ""
    ValorUnitario = 0.0
    ValorBruto = 0.0
    ValorTotalNeto = 0.0
    ValorDescuento = 0.0
    cantidad = 0

    #Entrada de datos 
    nombreProducto = input("Digite el nombre del producto: ")
    ValorUnitario = input("Digite el valor unitario del producto: ")	
    cantidad = input("Digite la cantidad de "+nombreProducto+" a comprar: ")

    # Proceso
    ValorBruto = cantidad * ValorUnitario	
    ValorDescuento = ValorTotalNeto * 0.08
    ValorTotalNeto = ValorBruto - ValorDescuento

    print("Valor bruto de "+nombreProducto+" es: "+str(ValorBruto))
    print("Valor neto de "+nombreProducto+" es: "+str(ValorTotalNeto))
    print("Valor de descuento de "+nombreProducto+" es: "+str(ValorDescuento))

## Ejemplo 2

    n = 12
    p = 1000000
    i = 0.025
    f = 0

    # Realizar proceso
    f = p*((1+i)**(n))

    print("Por la inversión de "+str(p)+" recibirá "+str(f)+".")

## Ejemplo 3

    n_pulsaciones = 0.0
    edad = 0.0 
    edad = int(input("indique la edad desde 1 hasta 120: "))
    n_pulsaciones = (220 - edad)/10
    print("numero de pulsaciones que debe tener una persona cada 10 segundos es "+str(n_pulsaciones))

## Ejemplo 4

    #1.2.5.	El dueño de una tienda compra un artículo a un 
    # precio determinado. Obtener el precio en que lo debe vender 
    # para obtener una ganancia del 30%.
 
    precio_articulo = 0 
    ganancia = 0
    precio_final = 0

    precio_articulo = float(input("indique el precio que tiene el producto: "))
    ganancia= precio_articulo*0.3
    precio_final = precio_articulo + ganancia

    #Salida del proceso
    print("POr un artículo que le costo "+str(precio_articulo)+", lo venderá por "+str(precio_final))









