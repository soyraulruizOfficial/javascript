


let imagen = document.querySelector("#img");

let nombreDePiezaxD = document.querySelector("#nombreDepiezaxD");

imagen.style.width = "180px";
imagen.addEventListener("click", function hola() {
  nombreDePiezaxD.style.fontSize = "20px";
  nombreDePiezaxD.style.color = "green";
  nombreDePiezaxD.style.fontWeight = "bolder";

});


let mouseCursor = document.querySelector(".cursor")

window.addEventListener("mousemove",cursor)

function cursor(e){

  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  



}







let contenedor = document.getElementById("img")

Event();

function Event(){
  contenedor.addEventListener("click",Posicion)
}


function Posicion(event) {
  console.log(event);

  const pos = new Premios(event.x ,event.y);
  pos.CrearPosicion(contenedor);
}

































