let contador = 0;
let arreglopromedio = [];

function eventListener() {
  document.addEventListener("DOMContentLoader", AddEvents);
}

function AddEvents() {
  document.getElementById("btn").addEventListener("click", AddInputs);
}
AddInputs()
function AddInputs() {
  const output = document.getElementById("output");
  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12");



  const divFG = document.createElement("div");
  divFG.setAttribute("class", "form-group");

  const label = document.createElement("label");
  label.innerText = `Ingrese la calificacion ${contador + 1}`;

  const inputFC = document.createElement("input");
  inputFC.setAttribute("class", "form-control");
  inputFC.setAttribute("type", "number");
  inputFC.setAttribute("placeholder", "Ingrese Valor");
  inputFC.setAttribute("id", `InputPromedio ${contador}`);
  contador++;

  output.appendChild(divCol);
  divCol.appendChild(divFG);
  divFG.appendChild(label);
  divFG.appendChild(inputFC);
}
AddEvents()

CalcularPromedio()

function CalcularPromedio() {
llenarArray()
let acumulador=0;
for(let i=0 ; i<contador;i ++){

    acumulador+=arreglopromedio[i];
    acumulador/= acumulador
}


}
function llenarArray() {
  for (let x = 0; x < contador; x++) {

    const Valor =  document.getElementById(`InputPromedio ${x}.`).value;

    if(isNaN(Valor)){

arreglopromedio[x]= Number (Valor);
    }else{
        arreglopromedio[x]=0;
    }

  }
}
