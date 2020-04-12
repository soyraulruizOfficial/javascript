







addEventListener();



const contenedor = document.querySelector("#contenedor");
const votaciones = new Votaciones();




function addEventListener() {
  document
  .getElementById("btnPregunta")
  .addEventListener("click", cambiarPantalla);
  
}

function cambiarPantalla() {
  let inpPregunta = document.getElementById("inpPregunta").value;

  if (inpPregunta == "") return alert("rellene los campos");

  eliminarDom();
  crearPantallaVotaciones();
  


function eliminarDom() {
  while (contenedor.firstChild) {
    contenedor.firstChild.remove();
  }
}

function crearPantallaVotaciones() {
  let contenedor = document.querySelector("#contenedor");
  contenedor.classList = "jumbotron";
  contenedor.setAttribute("text-aling", "center");

  let botones = document.createElement("div");
  botones.classList = "row form-group mt-3";

  let label = document.createElement("label");
  label.style.color = "red";
  label.innerHTML = "La propuesta es: "+inpPregunta;
  label.style.fontSize = "20px";
  label.classList = "font-weight-bolder";

  let btnFavor = document.createElement("button");
  btnFavor.innerHTML = "A Favor";
  btnFavor.classList = "btn btn-success";
  btnFavor.setAttribute("id", "btnF");

  let btnContra = document.createElement("button");
  btnContra.innerHTML = "En Contra";
  btnContra.classList = "btn btn-danger ml-3";
  btnContra.setAttribute("id", "btnC");

  let btnNulo = document.createElement("button");
  btnNulo.innerHTML = "Nulo";
  btnNulo.classList = "btn btn-warning ml-3";
  btnNulo.style.color = "white";
  btnNulo.setAttribute("id", "btnN");
  let btnFinalizar = document.createElement("a")
  btnFinalizar.innerText="Finalizar"
  btnFinalizar.setAttribute("src","#")
  btnFinalizar.classList="btn btn-info ml-3"
  btnFinalizar.style.color = "white";

  contenedor.appendChild(label);
  contenedor.appendChild(botones);

  contenedor.appendChild(btnFavor);
  contenedor.appendChild(btnContra);
  contenedor.appendChild(btnNulo);
  contenedor.appendChild(btnFinalizar)



  
}

boton();
}

function boton(){

  let btnFavor = document.querySelector("#btnF")
  btnFavor.addEventListener("click",Afavor);

}
function Afavor(){
alert("has tocado boton a favor");

}

