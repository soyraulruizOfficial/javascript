class Carro {
  PosicionX = 0;
  PosicionY = 0;
  constructor(PosicionX, PosicionY) {
    this.PosicionX = PosicionX;
    this.PosicionY = PosicionY;
  }
  MoverCarro(direccion, imagen) {
    switch (direccion) {
      case "ArrowUp":
        if(this.PosicionY<=0)return;
        console.log("Has precionado tecla arriba");
        imagen.src = "./../img/arriba.jpeg"
        imagen.style.top=`${this.PosicionY--}%`;
        break;

        case "ArrowLeft":
          if(this.PosicionX<=0)return;
          console.log("Has precionado tecla izquierda");
          imagen.src = "./../img/izq.jpeg"
          imagen.style.left=`${this.PosicionX--}%`;


          break;
          case "ArrowRight":
            if(this.PosicionX>=93)return;
          console.log("Has precionado tecla derecha");
          imagen.src = "./../img/der.jpeg"
          imagen.style.left=`${this.PosicionX++}%`;


          break;
        case "ArrowDown":
          if(this.PosicionY>=89)return;

          console.log("Has precionado tecla abajo");
          imagen.src = "./../img/abajo.jpeg"
          imagen.style.top=`${this.PosicionY++}%`;


          break;

    }
  }
}
