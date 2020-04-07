// Import stylesheets

// Write Javascript code!
let arreglo = [];
const output = document.getElementById("output");

function EventListener() {
  document.getElementById("btn").addEventListener("click", obtenerResultado);
  document.addEventListener("DOMContentLoaded", cargarInputs);
  document.getElementById("btnReiniciar").addEventListener("click", reiniciarApp);
}
function reiniciarApp(){

    window.location.reload();
}

EventListener();
function cargarInputs() {
  for (let x = 0; x <= 10; x++) {
    const divFG = document.createElement("div");
    divFG.setAttribute("class", "form-group");

    const labelFG = document.createElement("label");
    labelFG.innerText = `Dame el valor de la posicion ${x}`;

    const inputFG = document.createElement("input");
    inputFG.setAttribute("type", "number");
    inputFG.setAttribute("placeholder", "Ingrese el valor");
    inputFG.setAttribute("class", "form-control");
    inputFG.setAttribute("id", `inputValor ${x}`);

    output.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFG);
  }
}
function obtenerResultado() {
  for (let x = 0; x < 10; x++) {
    const valor = document.getElementById(`inputValor ${x}`).value;
    if (valor != "") {
      arreglo[x] = valor;
    } else {
      arreglo[x] = `<span> class=" text-danger"> No se ingreso valor</span>`;
    }
  }
  console.log(arreglo);
}
MostrarArreglo();

function MostrarArreglo() {
  eliminarDom();
  const MostrarArreglo = document.getElementById("MostrarArreglo");
  for (x = 0; x <= arreglo.length; x++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group");
    li.innerHTML = `<p> Index ${x}</p> <p> Valor ${arreglo[x]}</p>`;

    MostrarArreglo.appendChild(li);
  }
}

function eliminarDom() {
  while (output.firstChild) {
    output.firstChild.remove();
  }
}
