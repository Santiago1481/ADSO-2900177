## Ejemplo 1

    Promedio = 0.0
    Lunes = 0.0
    Miercoles = 0.0 
    Viernes = 0.0 

    # Entrada de datos 
    Lunes = float(input("Ingrese el tiempo de ruta del lunes: "))
    Miercoles = float(input("Ingrese el tiempo de ruta de miercoles: "))
    Viernes = float(input("Ingrese el tiempo de ruta de viernes: "))

    # proceso 
    Promedio = (Lunes + Miercoles + Viernes) / 3

    # Salida de datos 
    print("El promedio de tiempo de ruta es : ", Promedio)

# Ejemplo 2

    invpedro = 0.0
    invjuan = 0.0
    invsergio = 0.0
    invsofia = 0.0

    totalinversion = 0.0

    porcpedro = 0.0
    porcjuan = 0.0
    porcsergio = 0.0
    porcsofia = 0.0

    invpedro = float(input("Digite la inversion de Pedro "))
    invjuan = float(input("Digite la inversion de Juan "))
    invsergio = float(input("Digite la inversion de Sergio "))
    invsofia = float(input("Digite la inversion de Sofia "))

    totalinversion = invpedro + invjuan + invsergio + invsofia
    porcpedro = (invpedro / totalinversion) * 100

    porcjuan = (invjuan / totalinversion) * 100
    porcsergio = (invsergio / totalinversion) * 100
    porcsofia = (invsofia / totalinversion) * 100

    print("El valor total de la inversion es: " ,str(totalinversion))
    print("El porcentaje de inversion de Pedro es: ", porcpedro, "%")
    print("El porcentaje de inversion de Juan es: ", porcjuan, "%") 
    print("El porcentaje de inversion de Sergio es: ", porcsergio, "%")
    print("El porcentaje de inversion de Sofia es: ", porcsofia, "%")
 
