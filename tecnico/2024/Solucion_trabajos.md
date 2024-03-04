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


