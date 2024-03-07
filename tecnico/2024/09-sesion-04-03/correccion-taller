# TALLER

## 1) Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

### **Pseudocodigo**

```
INICIO

  Dfinir p1, p2, p3, por1, por2, por3, totl Como Real

  p1 = 0.0
  p2 = 0.0
  p3 = 0.0
  por1 = 0.0
  por2 = 0.0
  por3 = 0.0
  totl = 0.0

  Escribir "Por favor ingrese la inversión de la persona 1"
  Leer p1
  Si (p1>=0)
      Escribir "Por favor ingrese la inversión de la persona 2"
      Leer p2
      Si(p2>=0)
          Escribir "Por favor ingrese la inversión de la persona 3"
          Leer p3
          Si(p3>=0)
              totl = p1+p2+p3
              por1 = (p1/totl)*100
              por2 = (p2/totl)*100
              por3 = (p3/totl)*100

              Escribir "La inversión total fue de ",totl,"$"
              Escribir " El porcentaje de inversión de la persona 1 es de ",por1,"%"
              Escribir " El porcentaje de inversión de la persona 2 es de ",por2,"%"
              Escribir " El porcentaje de inversión de la persona 3 es de ",por3,"%"
          Sino
              Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
          Finsi
      Sino
          Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
      Finsi
  Sino
      Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
  Finsi
FIN
```

### **Python**

```py
p1 = float(input("Por favor ingrese la inversión de la persona 1: "))
if (p1 >= 0):
    p2 = float(input("Por favor ingrese la inversión de la persona 2: "))
    if (p2 >= 0):
        p3 = float(input("Por favor ingrese la inversión de la persona 3: "))
        if (p3>=0):
            totl = p1+p2+p3
            por1 = (p1/totl)*100
            por2 = (p2/totl)*100
            por3 = (p3/totl)*100

            print("La inversión total fue de ",totl,"$")
            print("El porcentaje de inversión de la persona 1 es de ",por1,"%")
            print("El porcentaje de inversión de la persona 2 es de ",por2,"%")
            print("El porcentaje de inversión de la persona 3 es de ",por3,"%")
        else:
            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
    else:
        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
else:
    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
```

## 2) Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

    - La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.

    - La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.

    - La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.

### **Pseudocodigo**

```
INICIO

  Definir exm, tm1, tm2, tm3, protm, prom, exf, tf1, tf2, protf, prof, exq, tq1, tq2, tq3, protq, proq, pro Como Real

  exm = 0.0
  tm1 = 0.0
  tm2 = 0.0
  tm3 = 0.0
  protm = 0.0
  prom = 0.0
  exf = 0.0
  tf1 = 0.0
  tf2 = 0.0
  protf = 0.0
  prof = 0.0
  exq = 0.0
  tq1 = 0.0
  tq2 = 0.0
  tq3 = 0.0
  protq = 0.0
  proq = 0.0
  pro = 0.0

  Escribir "Ingrese el puntaje obtenido en el examen de matemáticas"
  Leer exm
  Si (exm>=0)
      Escribir "Ingrese el puntaje obtenido en la tarea 1 de matemáticas"
      Leer tm1
      Si (tm1>=0)
          Escribir "Ingrese el puntaje obtenido en la tarea 2 de matemáticas"
          Leer tm2
          Si (tm2>=0)
              Escribir "Ingrese el puntaje obtenido en la tarea 3 de matemáticas"
              Leer tm3
              Si (tm3>=0)
                  Escribir "Ingrese el puntaje obtenido en el examen de física"
                  Leer exf
                  Si (exf>=0)
                      Escribir "Ingrese el puntaje obtenido en la tarea 1 de física"
                      Leer tf1
                      Si (tf1>=0)
                          Escribir "Ingrese el puntaje obtenido en la tarea 2 de física"
                          Leer tf2
                          Si (tf2>=0)
                              Escribir "Ingrese el puntaje obtenido en el examen de químicia"
                              Leer exq
                              Si (exq>=0)
                                  Escribir "Ingrese el puntaje obtenido en la tarea 1 de química"
                                  Leer tq1
                                  Si (tq1>=0)
                                      Escribir "Ingrese el puntaje obtenido en la tarea 2 de química"
                                      Leer tq2
                                      Si (tq2>=0)
                                          Escribir "Ingrese el puntaje obtenido en la tarea 3 de química"
                                          Leer tq3
                                          Si (tq3>=0)
                                              protm = (tm1+tm2+tm3)/3
                                              prom = (exm*0.9)+(protm*0.1)
                                              protf = (tf1+tf2)/2
                                              prof = (exf*0.8)+(protf*0.2)
                                              protq = (tq1+tq2+tq3)/3
                                              proq = (exq*0.85)+(protq*0.15)
                                              pro = (prom+prof+proq)/3

                                              Escribir "El promedio de matemáticas es de ",prom
                                              Escribir "El promedio de física es de ",prof
                                              Escribir "El promedio de química es de ",proq
                                              Escribir "El promedio total de las 3 materias es de ",pro
                                          Sino
                                              Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                                          Finsi
                                      Sino
                                          Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                                      Finsi
                                  Sino
                                      Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                                  Finsi
                              Sino
                                  Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                              Finsi
                          Sino
                              Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                          Finsi
                      Sino
                          Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                      Finsi
                  Sino
                      Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
                  Finsi
              Sino
                  Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
              Finsi
          Sino
              Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
          Finsi
      Sino
          Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
      Finsi
  Sino
      Escribir "Ingresó un valor erroneo, por favor intentelo de nuevo"
  Finsi

FIN
```

### **Python**

```python
exm = float(input("Ingrese el puntaje obtenido en el examen de matemáticas: "))
if (exm >= 0):
    tm1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de matemáticas: "))
    if (tm1 >= 0):
        tm2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de matemáticas: "))
        if (tm2 >= 0):
            tm3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de matemáticas: "))
            if (tm3 >= 0):
                exf = float(input("Ingrese el puntaje obtenido en el examen de física: "))
                if (exf >= 0):
                    tf1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de física: "))
                    if (tf1 >= 0):
                        tf2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de física: "))
                        if (tf2 >= 0):
                            exq = float(input("Ingrese el puntaje obtenido en el examen de Química: "))
                            if (exq >= 0):
                                tq1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de Química: "))
                                if (tq1 >= 0):
                                    tq2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de Química: "))
                                    if ():
                                        tq3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de Química: "))
                                        if ():
                                            protm = (tm1+tm2+tm3)/3
                                            prom = (exm*0.9)+(protm*0.1)
                                            protf = (tf1+tf2)/2
                                            prof = (exf*0.8)+(protf*0.2)
                                            protq = (tq1+tq2+tq3)/3
                                            proq = (exq*0.85)+(protq*0.15)
                                            pro = (prom+prof+proq)/3

                                            print("El promedio de matemáticas es de ",prom)
                                            print("El promedio de física es de ",prof)
                                            print("El promedio de química es de ",proq)
                                            print("El promedio total de las 3 materias es de ",pro)
                                        else:
                                            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                                    else:
                                        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                                else:
                                    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                            else:
                                print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                        else:
                            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                    else:
                        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
                else:
                    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
            else:
                print("Ingresó un valor erroneo, por favor intentelo de nuevo")
        else:
            print("Ingresó un valor erroneo, por favor intentelo de nuevo")
    else:
        print("Ingresó un valor erroneo, por favor intentelo de nuevo")
else:
    print("Ingresó un valor erroneo, por favor intentelo de nuevo")
```

## 3) Leer un real e imprimir si el número es positivo o negativo.

### **Pseudocodigo**

```
INICIO

  Definir num Como Real

  num = 0.0
  
  Escribir "Digite el número que desee"
  Leer num

  Si (num<0):
      Escribir "El número digitado es negativo"
  Sino:
      Escribir "El número digitado es positivo"
  Finsi

FIN
```

### **Python**

```python
num = float(input("Digite el número que desee: "))

if(num<0):
    print("El número digitado es negativo")
else:
    print("El número digitado es positivo")
```

## 4) Leer un real e imprimir si el número es mayor a 200 o no.

### **Pseudocodigo**

```
INICIO

  Definir num Como Real

  num = 0.0
  
  Escribir "Digite el número que desee"
  Leer num

  Si (num>200):
      Escribir "El número digitado es mayor que 200"
  Sino:
      Escribir "El número digitado es menor que 200"
  Finsi

FIN
```

### **Python**

```python
num = float(input("Digite el número que desee: "))

if(num>200):
    print("El número digitado es mayor que 200")
else:
    print("El número digitado es menor que 200")
```

## 5) Leer un real e imprimir si el número está en el rango de 50 y 100.

### **Pseudocodigo**

```
INICIO

  Definir num Como Real

  num = 0.0
  
  Escribir "Digite el número que desee"
  Leer num

  Si (50<num<100):
      Escribir "El número digitado está en el rango de 50 y 100"
  Sino:
      Escribir "El número digitado no está en el rango de 50 y 100"
  Finsi

FIN
```

### **Python**

```python
num = float(input("Digite el número que desee: "))

if(50<num<100):
    print("El número digitado está en el rango de 50 y 100")
else:
    print("El número digitado no está en el rango de 50 y 100")
```
