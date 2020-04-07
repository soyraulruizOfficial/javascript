class Carro {
  color = "";
  marca = "";
  modelo = 0;
  motor = 0;
  posX = 0;
  posY = 0;


constructor(color,marca,modelo,motor){

    this.color=color;
    this.marca=marca;
    this.modelo=modelo;
    this.motor=motor;
}

  avanzarX(){}

  avanzarY(){}
}

let carro1 = new Carro("Rojo","Honda", 2015,1.8);
let carro2 = new Carro("Azul","Nissan",2018,2.8)

console.log(carro1.color)
console.log(carro2.color)

