let arreglo1 = [];
let arreglo2 = [];

EventListener();

function EventListener() {
  document.getElementById("Numero").addEventListener("keypress", iniciarApp);
}

function iniciarApp(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (event.target.value <= 0) return;
  if (isNaN(event.target.value)) return;

  Llenar(event.target.value);
}

function Llenar(Numero) {
  for (let i = 1; i <= 2; i++) {
    let numeroRandom = Math.floor(Math.random() * (-100 - 100)) + 100;
    arreglo1.push(numeroRandom);
  }
  CrearOption();
}
function CrearOption() {
  const output = document.getElementById("output");

  const selector = document.createElement("select");
  selector.setAttribute("class", "form-control");
  selector.setAttribute("id", "idSelect");

  let opcionNada = document.createElement("option");
  opcionNada.innerText = "Seleccione Una Opcion";
  opcionNada.setAttribute("value", "nada");

  let opcion1 = document.createElement("option");
  opcion1.setAttribute("value", "suma");
  opcion1.innerText = "C = A+B";

  let opcion2 = document.createElement("option");
  opcion2.setAttribute("value", "resta");
  opcion2.innerText = "C = B-A";

  let opcion3 = document.createElement("option");
  opcion3.setAttribute("value", "multi");
  opcion3.innerText = "C = B*A";

  output.appendChild(selector);
  selector.appendChild(opcionNada);
  selector.appendChild(opcion1);
  selector.appendChild(opcion2);
  selector.appendChild(opcion3);
  document.getElementById("idSelect").addEventListener("change", Operacion);

}

function Operacion() {
  let opc = document.getElementById("idSelect").value;

  switch(opc){
      case "suma":

          console.log(arreglo1)

    suma =arreglo1[0] + arreglo1[1]

    console.log("Suma " + suma)
break;


case "resta":
    console.log(arreglo1)
    resta = arreglo1[1] - arreglo1[0]
        console.log("Resta " + resta)

        break;
        case "multi":
            console.log(arreglo1)
            multi = arreglo1[1] * arreglo1[0]
                console.log("Multiplicacion " + multi)
                break;
  }
}

