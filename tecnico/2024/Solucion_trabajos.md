## Taller 1
3.2.1.	Leer un carácter y posteriormente imprimirlo.
3.2.2.	Leer un real y posteriormente imprimirlo.
3.2.3.	Leer un real hallar el cuadrado posteriormente imprimirlo. 
3.2.4.	Leer un real hallar el cubo posteriormente imprimirlo. 
3.2.5.	Leer un real hallar:
-	El doble.
-	El  cuadrado,
-	La suma del doble y el cuadrado y  posteriormente imprimirlo.

```
Inicio

    Escribir "Ingrese un carácter:"
    Leer caracter
    Escribir "El carácter ingresado es:", caracter
    
   
    Escribir "Ingrese un número real:"
    Leer real1
    Escribir "El número real ingresado es:", real1
    
    
    Escribir "Ingrese un número real:"
    Leer real2
    cuadrado = real2 * real2
    Escribir "El cuadrado del número real ingresado es:", cuadrado
    
    
    Escribir "Ingrese un número real:"
    Leer real3
    cubo = real3 * real3 * real3
    Escribir "El cubo del número real ingresado es:", cubo
    
    
    Escribir "Ingrese un valor booleano (verdadero):"
    Leer booleano
    Si booleano == Verdadero Entonces
       
        doble = 2 * 1
        
        cuadrado = 1 * 1
       
        suma = doble + cuadrado
        Escribir "El doble del valor booleano ingresado es:", doble
        Escribir "El cuadrado del valor booleano ingresado es:", cuadrado
        Escribir "La suma del doble y el cuadrado es:", suma
    Fin Si
    
Fin
```

```
caracter = input("Ingrese un carácter: ")
print("El carácter ingresado es:", caracter)

real1 = float(input("Ingrese un número real: "))
print("El número real ingresado es:", real1)

real2 = float(input("Ingrese un número real: "))
cuadrado = real2 ** 2
print("El cuadrado del número real ingresado es:", cuadrado)

real3 = float(input("Ingrese un número real: "))
cubo = real3 ** 3
print("El cubo del número real ingresado es:", cubo)

booleano = True  # Se asume que se ingresa Verdadero (True)
if booleano:
    # Calcular el doble
    doble = 2 * 1
    # Calcular el cuadrado
    cuadrado = 1 * 1
    # Calcular la suma del doble y el cuadrado
    suma = doble + cuadrado
    print("El doble del valor booleano ingresado es:", doble)
    print("El cuadrado del valor booleano ingresado es:", cuadrado)
    print("La suma del doble y el cuadrado es:", suma)
```
## Taller 2
1. Se dispone de 1'000.000(P) de pesos el cual se deposita en una entidad financiera que le pagará un interés mensual del 2.5% (i) sobre la cantidad inicial acumulada cada mes. ¿Cuánto se tendrá al final de 1 año(n-en meses)?

-	Aplicando la fórmula F = P * ( 1+i )^n

2. Calcular el número de pulsaciones que una persona debe tener por cada 10 segundos de ejercicio, si la fórmula es:
			num. Pulsaciones = (220 - edad)/10

3. En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El presupuesto anual del hospital se reparte conforme a la sig. tabla:
	
			Área			Porcentaje del presupuesto
			Ginecología			40%
			Traumatología		30%
			Pediatría			30%
-	Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal.

=========================================
1.2.6.	Todos los lunes, miércoles y viernes, una persona corre la misma ruta y cronometra los tiempos obtenidos. Determinar el tiempo promedio que la persona tarda en recorrer la ruta en una semana cualquiera.
	
1.2.7.	Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

1.2.8.	Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

-	La calificación de Matemáticas se obtiene de la siguiente manera:
	Examen 90%
	Promedio de tareas 10%
	En esta materia se pidió un total de tres tareas.
	
-	La calificación de Física se obtiene de la siguiente manera:
	Examen 80%
	Promedio de tareas 20%
	En esta materia se pidió un total de dos tareas.
	
-	La calificación de Química se obtiene de la siguiente manera:
	Examen 85%
	Promedio de tareas 15%
•	En esta materia se pidió un promedio de tres tareas.



1.1.26.	Grados kelvin a grados Fahrenheit.
1.1.27.	Grados kelvin a grados Celsius.
1.1.28.	Pesos colombianos a dólares, bolívares, soles, pesetas y francos.
1.1.29.	Dólares pesos colombianos,  bolívares, soles, pesetas y francos.
1.1.30.	Bolívares a pesos colombianos, dólares, soles, pesetas y francos.
1.1.31.	Soles a pesos colombianos, dólares, bolívares, pesetas y francos.
1.1.32.	Calcular la distancia entre dos puntos en el plano cartesiano
1.1.33.	Hallar el área de un triángulo rectángulo.
1.1.34.	Hallar la solución a la ecuación cuadrática  9x² + 6x + 10.

## Taller 3

1.	Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

```
Inicio

        Definir persona1_inversion como real
        Definir persona2_inversion como real
        Definir persona3_inversion como real

        leer "Ingrese cantidad de la invercion de la primer persona", persona1_inversion
        leer "Ingrese cantidad de la invercion de la segunda persona", persona2_inversion
        leer "Ingrese cantidad de la invercion de la tercer persona", persona3_inversion

        persona1_inversion = 0,0
        persona2_inversion = 0,0
        persona3_inversion = 0,0

       


        total_invertido = persona1_inversion + persona2_inversion + persona3_inversion


        porcentaje_persona1 = (persona1_inversion / total_invertido) * 100
        porcentaje_persona2 = (persona2_inversion / total_invertido) * 100
        porcentaje_persona3 = (persona3_inversion / total_invertido) * 100


        mostrar "Porcentaje de inversión de la persona 1:", porcentaje_persona1, "%"
        mostrar "Porcentaje de inversión de la persona 2:", porcentaje_persona2, "%"
        mostrar "Porcentaje de inversión de la persona 3:", porcentaje_persona3, "%"

Fin
```

```
persona1_inversion = float(input("Ingrese cantidad de la inversión de la primer persona: "))
persona2_inversion = float(input("Ingrese cantidad de la inversión de la segunda persona: "))
persona3_inversion = float(input("Ingrese cantidad de la inversión de la tercer persona: "))

total_invertido = persona1_inversion + persona2_inversion + persona3_inversion

porcentaje_persona1 = (persona1_inversion / total_invertido) * 100
porcentaje_persona2 = (persona2_inversion / total_invertido) * 100
porcentaje_persona3 = (persona3_inversion / total_invertido) * 100

print("Porcentaje de inversión de la persona 1:", porcentaje_persona1, "%")
print("Porcentaje de inversión de la persona 2:", porcentaje_persona2, "%")
print("Porcentaje de inversión de la persona 3:", porcentaje_persona3, "%")
```

2.	Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:
	
    -	La calificación de Matemáticas se obtiene de la siguiente manera:
        Examen 90%
        Promedio de tareas 10%
        En esta materia se pidió un total de tres tareas.
        
    -	La calificación de Física se obtiene de la siguiente manera:
        Examen 80%
        Promedio de tareas 20%
        En esta materia se pidió un total de dos tareas.
        
    -	La calificación de Química se obtiene de la siguiente manera:
        Examen 85%
        Promedio de tareas 15%
    En esta materia se pidió un promedio de tres tareas.

```
Inicio

    Leer examen_matematicas
    Leer tarea1_matematicas
    Leer tarea2_matematicas
    Leer tarea3_matematicas
    
   
    promedio_tareas_matematicas = (tarea1_matematicas + tarea2_matematicas + tarea3_matematicas) / 3
    
    
    calificacion_matematicas = examen_matematicas * 0.9 + promedio_tareas_matematicas * 0.1
    
   
    Leer examen_fisica
    Leer tarea1_fisica
    Leer tarea2_fisica
    
    
    promedio_tareas_fisica = (tarea1_fisica + tarea2_fisica) / 2
    
    
    calificacion_fisica = examen_fisica * 0.8 + promedio_tareas_fisica * 0.2
    
   
    Leer examen_quimica
    Leer promedio_tareas_quimica
    
    
    calificacion_quimica = examen_quimica * 0.85 + promedio_tareas_quimica * 0.15
    
    
    promedio_general = (calificacion_matematicas + calificacion_fisica + calificacion_quimica) / 3
    
    
    Mostrar "El promedio en Matemáticas es:", calificacion_matematicas
    Mostrar "El promedio en Física es:", calificacion_fisica
    Mostrar "El promedio en Química es:", calificacion_quimica
    Mostrar "El promedio general en las tres materias más difíciles es:", promedio_general

Fin
```

```
examen_matematicas = float(input("Ingrese la calificación del examen de Matemáticas: "))
tarea1_matematicas = float(input("Ingrese la calificación de la primera tarea de Matemáticas: "))
tarea2_matematicas = float(input("Ingrese la calificación de la segunda tarea de Matemáticas: "))
tarea3_matematicas = float(input("Ingrese la calificación de la tercera tarea de Matemáticas: "))

promedio_tareas_matematicas = (tarea1_matematicas + tarea2_matematicas + tarea3_matematicas) / 3
calificacion_matematicas = examen_matematicas * 0.9 + promedio_tareas_matematicas * 0.1


examen_fisica = float(input("Ingrese la calificación del examen de Física: "))
tarea1_fisica = float(input("Ingrese la calificación de la primera tarea de Física: "))
tarea2_fisica = float(input("Ingrese la calificación de la segunda tarea de Física: "))

promedio_tareas_fisica = (tarea1_fisica + tarea2_fisica) / 2
calificacion_fisica = examen_fisica * 0.8 + promedio_tareas_fisica * 0.2


examen_quimica = float(input("Ingrese la calificación del examen de Química: "))
promedio_tareas_quimica = float(input("Ingrese el promedio de las tres tareas de Química: "))

calificacion_quimica = examen_quimica * 0.85 + promedio_tareas_quimica * 0.15


promedio_general = (calificacion_matematicas + calificacion_fisica + calificacion_quimica) / 3


print("El promedio en Matemáticas es:", calificacion_matematicas)
print("El promedio en Física es:", calificacion_fisica)
print("El promedio en Química es:", calificacion_quimica)
print("El promedio general en las tres materias más difíciles es:", promedio_general)
```

3. Leer un real e imprimir si el número es positivo o negativo.

```
Inicio
   
    Escribir "Ingrese un número real:"
    Leer numero
    
    
    Si numero > 0 Entonces
        Escribir "El número es positivo."
    Sino Si numero < 0 Entonces
        Escribir "El número es negativo."
    Sino
        Escribir "El número es cero."
    Fin Si
Fin
```

```
numero = float(input("Ingresa un número real: "))

if numero > 0:
    print("El número es positivo.")
elif numero < 0:
    print("El número es negativo.")
else:
    print("El número es cero.")
```
4. Leer un real e imprimir si el número es mayor a 200 o no.

```
Inicio
     Escribir "Ingrese un número real:"
    Leer numero
    
    Si numero > 200 Entonces
        Escribir "El número es mayor a 200."
    Sino
        Escribir "El número no es mayor a 200."
    Fin Si
Fin
```

```
numero = float(input("Ingrese un número real:"))

if numero > 200:
    print("El número es mayor a 200.")
else:
    print("El número no es mayor a 200.")
```

5. Leer un real e imprimir si el número está en el rango de 50 y 100.

```
Inicio
    // Leer el número real
    Escribir "Ingrese un número real:"
    Leer numero
    
    // Verificar si el número está en el rango de 50 y 100
    Si numero >= 50 y numero <= 100 Entonces
        Escribir "El número está en el rango de 50 y 100."
    Sino
        Escribir "El número no está en el rango de 50 y 100."
    Fin Si
Fin
```

```
numero = float(input("Ingrese un número real:"))

if numero >= 50 and numero <= 100:
    print("El número está en el rango de 50 y 100.")
else:
    print("El número no está en el rango de 50 y 100.")
```


   


