


/////////////////////Clase Poner popos////////////////////////

class Premios {
  PosicionX = 0;
  PosicionY = 0;

  constructor(PosicionX, PosicionY) {
    this.PosicionX = PosicionX;
    this.PosicionY = PosicionY;
  }

  CrearImagen(contenedor) {
    const imagen = document.createElement("img");

    imagen.src = "./../img/caca.jpeg";

    imagen.style.left = `${this.PosicionX}px`;
    imagen.style.top = `${this.PosicionY}px`;
    

    contenedor.appendChild(imagen);
  }
}
