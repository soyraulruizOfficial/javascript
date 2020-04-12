// const imagen = document.getElementById("Carro");
let contenedor = document
  .getElementById("contenedor")
 
// const carro = new Carro(0, 0);

EventListener();

function EventListener() {
  document.addEventListener("keydown", moveCar);
 contenedor.addEventListener("click", PonerPremio);
}

function moveCar(event) {
  console.log(event);
  carro.MoverCarro(event.key, imagen);
}



///////////////////////////////////////////(poner popos//////////////////////////////////////////////777
function PonerPremio(event) {
  console.log(event);
  console.log("Pondras una caquita");

  const premio = new Premios(event.x-128 ,event.y-90);
  premio.CrearImagen(contenedor);
}
