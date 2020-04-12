class Premios {
  PosicionX = 0;
  PosicionY = 0;

  constructor(PosicionX, PosicionY) {
    this.PosicionX = PosicionX;
    this.PosicionY = PosicionY;
  }

  CrearPosicion(contenedor) {


    imagen.style.left = `${this.PosicionX}px`;
    imagen.style.top = `${this.PosicionY}px`;


    if (
      this.PosicionY >= 78 &&
      this.PosicionY <= 147 &&
      this.PosicionX >= 198 &&
      this.PosicionX <= 244
    ){
      nombreDePiezaxD.innerHTML = "CABEZA";
      
    }

    if (
      this.PosicionY >= 338 &&
      this.PosicionY <= 374 &&
      this.PosicionX >= 192 &&
      this.PosicionX <= 240
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi VERGONONON";
      
    }
    if (
      this.PosicionY >= 154 &&
      this.PosicionY <= 165 &&
      this.PosicionX >= 85 &&
      this.PosicionX <= 242
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi cuello";
      
    }
    if (
      this.PosicionY >= 179 &&
      this.PosicionY <= 216 &&
      this.PosicionX >= 252 &&
      this.PosicionX <= 282
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi hombro derecho";
      
    }
    if (
      this.PosicionY >= 187 &&
      this.PosicionY <= 210 &&
      this.PosicionX >= 148 &&
      this.PosicionX <= 174
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi hombro izquierdo";
      
    }
    
    if (
      this.PosicionY >= 189 &&
      this.PosicionY <= 238 &&
      this.PosicionX >= 181 &&
      this.PosicionX <= 248
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi pecho";
      
    }
    if (
      this.PosicionY >= 264 &&
      this.PosicionY <= 309 &&
      this.PosicionX >= 174 &&
      this.PosicionX <= 257
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi estomago";
      
    }
    if (
      this.PosicionY >= 229 &&
      this.PosicionY <= 360 &&
      this.PosicionX >= 266 &&
      this.PosicionX <= 293
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi brazo derecho";
      
    }
    if (
      this.PosicionY >= 208 &&
      this.PosicionY <= 347 &&
      this.PosicionX >= 142 &&
      this.PosicionX <= 166
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi brazo izquierdo";
      
    }
    if (
      this.PosicionY >= 368 &&
      this.PosicionY <= 406 &&
      this.PosicionX >= 279 &&
      this.PosicionX <= 306
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi mano derecha";
      
    }
    if (
      this.PosicionY >= 361 &&
      this.PosicionY <= 398 &&
      this.PosicionX >= 150 &&
      this.PosicionX <= 178
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi mano izquierda";
      
    }
    if (
      this.PosicionY >= 357 &&
      this.PosicionY <= 470 &&
      this.PosicionX >= 223 &&
      this.PosicionX <= 263
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi pierna derecha";
      
    }
    if (
      this.PosicionY >= 363 &&
      this.PosicionY <= 472 &&
      this.PosicionX >= 169 &&
      this.PosicionX <= 202
    ){
      nombreDePiezaxD.innerHTML = "Has tocado mi pierna izquierda";
      
    }
    

  

  }
}
