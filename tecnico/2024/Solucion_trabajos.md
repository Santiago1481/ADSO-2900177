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

```
Inicio
    Definir P como 1000000  // Cantidad inicial
    Definir i como 0.025    // Tasa de interés mensual (2.5%)
    Definir n como 12       // Número de meses en un año
    Definir F como P        // Inicializar el monto final con la cantidad inicial

    Para cada mes de 1 a n
        F = F * (1 + i)  // Calcular el monto final para cada mes
    Fin Para

    Mostrar "Al final de 1 año, se tendrá:", F, "pesos"
Fin
```
```
# Definir las variables
P = 1000000  # Cantidad inicial
i = 0.025    # Tasa de interés mensual (2.5%)
n = 12       # Número de meses en un año
F = P        # Inicializar el monto final con la cantidad inicial

# Calcular el monto final para cada mes
for mes in range(1, n + 1):
    F *= (1 + i)

# Mostrar el resultado
print("Al final de 1 año, se tendrá:", F, "pesos")
```

2. Calcular el número de pulsaciones que una persona debe tener por cada 10 segundos de ejercicio, si la fórmula es
 
num. Pulsaciones = (220 - edad)/10


```
Inicio
    Leer edad  // Se solicita la edad de la persona
    Definir numPulsaciones como entero  // Variable para almacenar el número de pulsaciones

    numPulsaciones = (220 - edad) / 10  // Calcular el número de pulsaciones

    Mostrar "El número de pulsaciones por cada 10 segundos de ejercicio es:", numPulsaciones
Fin

```
```
# Solicitar la edad de la persona
edad = int(input("Ingrese la edad de la persona: "))

# Calcular el número de pulsaciones por cada 10 segundos de ejercicio
numPulsaciones = (220 - edad) / 10

# Mostrar el resultado
print("El número de pulsaciones por cada 10 segundos de ejercicio es:", numPulsaciones)****
```




3. En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El presupuesto anual del hospital se reparte conforme a la sig. tabla:
	
			Área			Porcentaje del presupuesto
			Ginecología			40%
			Traumatología		30%
			Pediatría			30%
-	Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal.

=========================================


```
Inicio
    Leer montoPresupuestal  // Se solicita el monto presupuestal total
    Definir ginecologia como real  // Variable para almacenar la cantidad para Ginecología
    Definir traumatologia como real  // Variable para almacenar la cantidad para Traumatología
    Definir pediatria como real  // Variable para almacenar la cantidad para Pediatría

    // Calcular la cantidad para cada área
    ginecologia = montoPresupuestal * 0.40
    traumatologia = montoPresupuestal * 0.30
    pediatria = montoPresupuestal * 0.30

    // Mostrar los resultados
    Mostrar "La cantidad para Ginecología es:", ginecologia
    Mostrar "La cantidad para Traumatología es:", traumatologia
    Mostrar "La cantidad para Pediatría es:", pediatria
Fin
```
```
# Solicitar el monto presupuestal total
montoPresupuestal = float(input("Ingrese el monto presupuestal total: "))

# Calcular la cantidad para cada área
ginecologia = montoPresupuestal * 0.40
traumatologia = montoPresupuestal * 0.30
pediatria = montoPresupuestal * 0.30

# Mostrar los resultados
print("La cantidad para Ginecología es:", ginecologia)
print("La cantidad para Traumatología es:", traumatologia)
print("La cantidad para Pediatría es:", pediatria)
```
1.2.6.	Todos los lunes, miércoles y viernes, una persona corre la misma ruta y cronometra los tiempos obtenidos. Determinar el tiempo promedio que la persona tarda en recorrer la ruta en una semana cualquiera.

```
Inicio
    Definir sumaTiempos como entero
    Definir contador como entero

    sumaTiempos = 0
    contador = 0

    Para cada día de la semana
        Si el día es lunes, miércoles o viernes:
            Leer tiempo
            sumaTiempos = sumaTiempos + tiempo
            Incrementar contador en 1
        Fin Si
    Fin Para

    Si contador es mayor que 0:
        tiempoPromedio = sumaTiempos / contador
        Mostrar "El tiempo promedio de la semana es:", tiempoPromedio
    Sino:
        Mostrar "No se registraron tiempos en los días indicados."
    Fin Si
Fin
```

```
# Definir una lista para almacenar los tiempos
tiempos = []

# Iterar sobre los días de la semana
for dia in ["lunes", "miércoles", "viernes"]:
    # Solicitar el tiempo corrido en el día especificado
    tiempo = input(f"Ingrese el tiempo en minutos para el día {dia}: ")
    
    # Convertir el tiempo a un número entero y agregarlo a la lista de tiempos
    tiempos.append(int(tiempo))

# Calcular el promedio de los tiempos
if tiempos:
    promedio = sum(tiempos) / len(tiempos)
    print("El tiempo promedio de la semana es:", promedio, "minutos")
else:
    print("No se registraron tiempos en los días indicados.")
```
	
1.2.7.	Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

```
Inicio
    Leer inversion_persona1
    Leer inversion_persona2
    Leer inversion_persona3

    total_invertido = inversion_persona1 + inversion_persona2 + inversion_persona3

    porcentaje_persona1 = (inversion_persona1 / total_invertido) * 100
    porcentaje_persona2 = (inversion_persona2 / total_invertido) * 100
    porcentaje_persona3 = (inversion_persona3 / total_invertido) * 100

    Mostrar "Porcentaje invertido por la persona 1:", porcentaje_persona1, "%"
    Mostrar "Porcentaje invertido por la persona 2:", porcentaje_persona2, "%"
    Mostrar "Porcentaje invertido por la persona 3:", porcentaje_persona3, "%"
Fin
```
```
# Solicitar la cantidad invertida por cada persona
inversion_persona1 = float(input("Ingrese la cantidad invertida por la persona 1: "))
inversion_persona2 = float(input("Ingrese la cantidad invertida por la persona 2: "))
inversion_persona3 = float(input("Ingrese la cantidad invertida por la persona 3: "))

# Calcular la cantidad total invertida
total_invertido = inversion_persona1 + inversion_persona2 + inversion_persona3

# Calcular el porcentaje que cada persona invierte respecto al total invertido
porcentaje_persona1 = (inversion_persona1 / total_invertido) * 100
porcentaje_persona2 = (inversion_persona2 / total_invertido) * 100
porcentaje_persona3 = (inversion_persona3 / total_invertido) * 100

# Mostrar los porcentajes
print("Porcentaje invertido por la persona 1:", porcentaje_persona1, "%")
print("Porcentaje invertido por la persona 2:", porcentaje_persona2, "%")
print("Porcentaje invertido por la persona 3:", porcentaje_persona3, "%")
```

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


```
# Calificaciones del alumno en cada materia
calificaciones = {
    'Matemáticas': {'Examen': 90, 'Tareas': [80, 85, 90]},
    'Física': {'Examen': 80, 'Tareas': [70, 75]},
    'Química': {'Examen': 85, 'Tareas': [90, 85, 80]}
}

# Función para calcular el promedio de una materia
def calcular_promedio_materia(calificacion):
    promedio_examenes = calificacion['Examen'] * 0.9
    promedio_tareas = sum(calificacion['Tareas']) / len(calificacion['Tareas']) * 0.1
    return promedio_examenes + promedio_tareas

# Calcular el promedio en cada materia
for materia, calificacion in calificaciones.items():
    promedio = calcular_promedio_materia(calificacion)
    print(f"El promedio en {materia} es: {promedio}")

# Calcular el promedio general
promedios_materias = [calcular_promedio_materia(calificacion) for calificacion in calificaciones.values()]
promedio_general = sum(promedios_materias) / len(promedios_materias)
print(f"El promedio general en las tres materias más difíciles es: {promedio_general}")
```
```
(calificacion)
        promedio_examenes = calificacion['Examen'] * 0.9
        promedio_tareas = sum(calificacion['Tareas']) / longitud(calificacion['Tareas']) * 0.1
        retornar promedio_examenes + promedio_tareas
    Fin Función

    // Calcular el promedio en cada materia
    Para cada materia, calificacion en calificaciones
        promedio = calcular_promedio_materia(calificacion)
        Mostrar "El promedio en ", materia, " es: ", promedio
    Fin Para

    // Calcular el promedio general
    Definir promedios_materias como lista
    Para cada calificacion en calificaciones
        Agregar calcular_promedio_materia(calificacion) a promedios_materias
    Fin Para
    promedio_general = sumar(promedios_materias) / longitud(promedios_materias)
    Mostrar "El promedio general en las tres materias más difíciles es: ", promedio_general
Fin

```


1.1.26.	Grados kelvin a grados Fahrenheit.
```
Inicio
    Leer Kelvin
    Fahrenheit = (Kelvin - 273.15) * (9/5) + 32
    Mostrar Fahrenheit
Fin
```
```
def kelvin_a_fahrenheit(kelvin):
    fahrenheit = (kelvin - 273.15) * (9/5) + 32
    return fahrenheit

kelvin = float(input("Ingrese la temperatura en grados Kelvin: "))
fahrenheit = kelvin_a_fahrenheit(kelvin)
print("La temperatura en grados Fahrenheit es:", fahrenheit)
```

1.1.27.	Grados kelvin a grados Celsius.
```
Inicio
    Leer Kelvin
    Celsius = Kelvin - 273.15
    Mostrar Celsius
Fin
```
```
def kelvin_a_celsius(kelvin):
    celsius = kelvin - 273.15
    return celsius

kelvin = float(input("Ingrese la temperatura en grados Kelvin: "))
celsius = kelvin_a_celsius(kelvin)
print("La temperatura en grados Celsius es:", celsius)
```
1.1.28.	Pesos colombianos a dólares, bolívares, soles, pesetas y francos.
```
Inicio
    Leer pesos_colombianos
    Dólares = pesos_colombianos / tasa_de_cambio_dólar
    Bolívares = pesos_colombianos / tasa_de_cambio_bolívar
    Soles = pesos_colombianos / tasa_de_cambio_sol
    Pesetas = pesos_colombianos / tasa_de_cambio_peseta
    Francos = pesos_colombianos / tasa_de_cambio_franco
    Mostrar Dólares, Bolívares, Soles, Pesetas, Francos
Fin
```
```
def pesos_a_otras_divisas(pesos_colombianos, tasas_de_cambio):
    divisas = {}
    for divisa, tasa in tasas_de_cambio.items():
        cantidad = pesos_colombianos / tasa
        divisas[divisa] = cantidad
    return divisas

pesos_colombianos = float(input("Ingrese la cantidad en pesos colombianos: "))
tasas_de_cambio = {
    "Dólares": tasa_de_cambio_dólar,
    "Bolívares": tasa_de_cambio_bolívar,
    "Soles": tasa_de_cambio_sol,
    "Pesetas": tasa_de_cambio_peseta,
    "Francos": tasa_de_cambio_franco
}
resultados = pesos_a_otras_divisas(pesos_colombianos, tasas_de_cambio)
for divisa, cantidad in resultados.items():
    print(f"La cantidad en {divisa} es: {cantidad}")
```
1.1.29.	Dólares pesos colombianos,  bolívares, soles, pesetas y francos.
```
Inicio
    Leer dólares
    Pesos_colombianos = dólares * tasa_de_cambio_dólar
    Bolívares = dólares * tasa_de_cambio_dólar / tasa_de_cambio_bolívar
    Soles = dólares * tasa_de_cambio_dólar / tasa_de_cambio_sol
    Pesetas = dólares * tasa_de_cambio_dólar / tasa_de_cambio_peseta
    Francos = dólares * tasa_de_cambio_dólar / tasa_de_cambio_franco
    Mostrar Pesos_colombianos, Bolívares, Soles, Pesetas, Francos
Fin
```
```
ef dolares_a_otras_divisas(dolares, tasas_de_cambio):
    divisas = {}
    for divisa, tasa in tasas_de_cambio.items():
        cantidad = dolares * tasa
        divisas[divisa] = cantidad
    return divisas

dolares = float(input("Ingrese la cantidad en dólares: "))
tasas_de_cambio = {
    "Pesos colombianos": tasa_de_cambio_dólar,
    "Bolívares": tasa_de_cambio_bolívar,
    "Soles": tasa_de_cambio_sol,
    "Pesetas": tasa_de_cambio_peseta,
    "Francos": tasa_de_cambio_franco
}
resultados = dolares_a_otras_divisas(dolares, tasas_de_cambio)
for divisa, cantidad in resultados.items():
    print(f"La cantidad en {divisa} es: {cantidad}")
```
1.1.30.	Bolívares a pesos colombianos, dólares, soles, pesetas y francos.
```
Inicio
    Leer bolívares
    Pesos_colombianos = bolívares * tasa_de_cambio_bolívar
    Dólares = bolívares * tasa_de_cambio_bolívar / tasa_de_cambio_dólar
    Soles = bolívares * tasa_de_cambio_bolívar / tasa_de_cambio_sol
    Pesetas = bolívares * tasa_de_cambio_bolívar / tasa_de_cambio_peseta
    Francos = bolívares * tasa_de_cambio_bolívar / tasa_de_cambio_franco
    Mostrar Pesos_colombianos, Dólares, Soles, Pesetas, Francos
Fin
```
```
ef bolivares_a_otras_divisas(bolivares, tasas_de_cambio):
    divisas = {}
    for divisa, tasa in tasas_de_cambio.items():
        cantidad = bolivares * tasa
        divisas[divisa] = cantidad
    return divisas

bolivares = float(input("Ingrese la cantidad en bolívares: "))
tasas_de_cambio = {
    "Pesos colombianos": tasa_de_cambio_bolívar,
    "Dólares": tasa_de_cambio_bolívar / tasa_de_cambio_dólar,
    "Soles": tasa_de_cambio_bolívar / tasa_de_cambio_sol,
    "Pesetas": tasa_de_cambio_bolívar / tasa_de_cambio_peseta,
    "Francos": tasa_de_cambio_bolívar / tasa_de_cambio_franco
}
resultados = bolivares_a_otras_divisas(bolivares, tasas_de_cambio)
for divisa, cantidad in resultados.items():
    print(f"La cantidad en {divisa} es: {cantidad}")
```
1.1.31.	Soles a pesos colombianos, dólares, bolívares, pesetas y francos.
```
Inicio
    Leer soles
    Pesos_colombianos = soles * tasa_de_cambio_sol
    Dólares = soles * tasa_de_cambio_sol / tasa_de_cambio_dólar
    Bolívares = soles * tasa_de_cambio_sol / tasa_de_cambio_bolívar
    Pesetas = soles * tasa_de_cambio_sol / tasa_de_cambio_peseta
    Francos = soles * tasa_de_cambio_sol / tasa_de_cambio_franco
    Mostrar Pesos_colombianos, Dólares, Bolívares, Pesetas, Francos
Fin
```
```
def soles_a_otras_divisas(soles, tasas_de_cambio):
    divisas = {}
    for divisa, tasa in tasas_de_cambio.items():
        cantidad = soles * tasa
        divisas[divisa] = cantidad
    return divisas

soles = float(input("Ingrese la cantidad en soles: "))
tasas_de_cambio = {
    "Pesos colombianos": tasa_de_cambio_sol,
    "Dólares": tasa_de_cambio_sol / tasa_de_cambio_dólar,
    "Bolívares": tasa_de_cambio_sol / tasa_de_cambio_bolívar,
    "Pesetas": tasa_de_cambio_sol / tasa_de_cambio_peseta,
    "Francos": tasa_de_cambio_sol / tasa_de_cambio_franco
}
resultados = soles_a_otras_divisas(soles, tasas_de_cambio)
for divisa, cantidad in resultados.items():
    print(f"La cantidad en {divisa} es: {cantidad}")
```
1.1.32.	Calcular la distancia entre dos puntos en el plano cartesiano
```
Inicio
    Leer x1, y1, x2, y2
    Distancia = raíz_cuadrada((x2 - x1)^2 + (y2 - y1)^2)
    Mostrar Distancia
Fin
```
```
import math

def calcular_distancia(x1, y1, x2, y2):
    distancia = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return distancia

x1 = float(input("Ingrese la coordenada x del primer punto: "))
y1 = float(input("Ingrese la coordenada y del primer punto: "))
x2 = float(input("Ingrese la coordenada x del segundo punto: "))
y2 = float(input("Ingrese la coordenada y del segundo punto: "))

distancia = calcular_distancia(x1, y1, x2, y2)
print("La distancia entre los dos puntos es:", distancia)
```
1.1.33.	Hallar el área de un triángulo rectángulo.
```
Inicio
    Leer base, altura
    Área = (base * altura) / 2
    Mostrar Área
Fin
```
```
def calcular_area_triangulo_rectangulo(base, altura):
    area = (base * altura) / 2
    return area

base = float(input("Ingrese la base del triángulo rectángulo: "))
altura = float(input("Ingrese la altura del triángulo rectángulo: "))

area = calcular_area_triangulo_rectangulo(base, altura)
print("El área del triángulo rectángulo es:", area)
```
1.1.34.	Hallar la solución a la ecuación cuadrática  9x² + 6x + 10.
```
Inicio
    Calcular discriminante = 6^2 - 4 * 9 * 10
    Si discriminante es mayor o igual a 0
        Calcular solución_1 = (-6 + raíz_cuadrada(discriminante)) / (2 * 9)
        Calcular solución_2 = (-6 - raíz_cuadrada(discriminante)) / (2 * 9)
        Mostrar solución

```
```
import cmath

def hallar_soluciones_ecuacion_cuadratica(a, b, c):
    discriminante = (b**2) - (4*a*c)
    if discriminante >= 0:
        solucion_1 = (-b + cmath.sqrt(discriminante)) / (2 * a)
        solucion_2 = (-b - cmath.sqrt(discriminante)) / (2 * a)
        return solucion_1, solucion_2
    else:
        return "No hay soluciones reales"

solucion_1, solucion_2 = hallar_soluciones_ecuacion_cuadratica(9, 6, 10)
print("Las soluciones de la ecuación cuadrática son:", solucion_1, "y", solucion_2)
```

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


   


