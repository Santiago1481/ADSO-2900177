@startuml
class Genero {
  - id : int
  - nombre : string

  + obtenerPeliculas() : List<Pelicula>
  + obtenerSeries() : List<Serie>
}

class MetodoPago {
  - id : int
  - tipo : string (tarjeta, paypal, etc.)
  - numeroTarjeta : string
  - fechaVencimiento : date

  + procesarPago() : boolean
}

class Pelicula {
  - id : int
  - titulo : string
  - sinopsis : string
  - duracion : int
  - genero : Genero
  - reparto : List<Reparto>
  - productora : Productoras

  + obtenerReparto() : List<Reparto>
  + obtenerProductora() : Productoras
}

class Configuracion {
  - id : int
  - idioma : string
  - calidadVideo : string (alta, media, baja)
  - subtítulos : boolean

  + guardarConfiguracion() : void
}

class Suscripcion {
  - id : int
  - tipo : string (mensual, anual, etc.)
  - precio : float
  - fechaInicio : date
  - fechaFin : date
  - cuenta : Cuenta

  + renovarSuscripcion() : boolean
  + cancelarSuscripcion() : boolean
}

class Cuenta {
  - id : int
  - email : string
  - contrasena : string
  - nombre : string
  - apellidos : string
  - metodoPago : MetodoPago
  - suscripcion : Suscripcion
  - configuracion : Configuracion
  - historial : Historial
  - perfiles : List<Perfil>

  + iniciarSesion() : boolean
  + cerrarSesion() : void
  + actualizarInformacion() : void
}

class Documentales {
  - id : int
  - titulo : string
  - sinopsis : string
  - duracion : int
  - genero : Genero

  + obtenerPeliculas() : List<Pelicula>
}

class Serie {
  - id : int
  - titulo : string
  - sinopsis : string
  - temporadas : List<Temporada>
  - genero : Genero
  - reparto : List<Reparto>
  - productora : Productoras

  + obtenerTemporadas() : List<Temporada>
  + obtenerReparto() : List<Reparto>
}

class Perfil {
  - id : int
  - nombre : string
  - apellidos : string
  - foto : string
  - biografia : string
  - historial : Historial
  - cuenta : Cuenta

  + actualizarInformacion() : void
}

class Reparto {
  - id : int
  - actor : string
  - personaje : string
  - pelicula : Pelicula
  - serie : Serie

  + obtenerPeliculas() : List<Pelicula>
  + obtenerSeries() : List<Serie>
}

class Historial {
  - id : int
  - cuenta : Cuenta
  - peliculasVistas : List<Pelicula>
  - seriesVistas : List<Serie>

  + agregarPeliculaVista() : void
  + agregarSerieVista() : void
}

class Temporada {
  - id : int
  - serie : Serie
  - numeroTemporada : int
  - episodios : List<Episodio>

  + obtenerEpisodios() : List<Episodio>
}

class Productoras {
  - id : int
  - nombre : string

  + obtenerPeliculas() : List<Pelicula>
  + obtenerSeries() : List<Serie>
}

class Reproductor {
  - id : int
  - cuenta : Cuenta
  - pelicula : Pelicula
  - serie : Serie
  - episodio : Episodio
  - documentales : Documentales

  + reproducirPelicula() : void
  + reproducirSerie() : void
  + reproductorDocumentales() : void
}

class Region {
  - id : int
  - nombre : string

  + obtenerPeliculasDisponibles() : List<Pelicula>
  + obtenerSeriesDisponibles() : List<Serie>
}

Cuenta --o Suscripcion
Cuenta --* Configuracion
Cuenta --* Historial
Cuenta --* Perfil
Cuenta --* Reproductor

Suscripcion --* MetodoPago

Perfil --* Cuenta
Perfil --* Historial

Historial --* Cuenta
Historial --* Pelicula
Historial --* Serie
Historial --* Documentales

Documentales --* Historial
Documentales --* Temporada

Pelicula --* Genero
Pelicula --* Reparto
Pelicula --* Productoras

Serie --* Genero
Serie --* Productoras
Serie --* Temporada

Reparto --* Pelicula
Reparto --* Serie

Temporada --* Episodio

Productoras --* Pelicula
Productoras --* Serie
Productoras --* Documentales

Reproductor --* Pelicula
Reproductor --* Serie
Reproductor --* Documentales

Region --* Pelicula
Region --* Serie
Region --* Documentales

@enduml
