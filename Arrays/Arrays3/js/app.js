let arreglo = [];
let arregloPares = [];
inp();
function inp() {
  const output = document.getElementById("output");

  const label = document.createElement("label");
  label.innerText = "Ingrese Numero De Arreglo";
  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.setAttribute("placeholder", "Ingrese Numero");
  input.setAttribute("id", "numeroArreglo");

  const divAlert = document.createElement("div");
  divAlert.setAttribute("class", "alert alert-primary mt-3");
  divAlert.setAttribute("id", "alerta1");

  const divAlert2 = document.createElement("div");
  divAlert2.setAttribute("class", "alert alert-primary mt-3");
  divAlert2.setAttribute("id", "alerta2");

  output.appendChild(label);
  output.appendChild(input);
  output.appendChild(divAlert);
  output.appendChild(divAlert2);
}
EventListener();

function EventListener() {
  document
    .getElementById("numeroArreglo")
    .addEventListener("keypress", iniciarApp);
}

function iniciarApp(event) {
  numero = document.getElementById("numeroArreglo").value;
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (event.target.value <= 0) return;
  if (event.target.value > 100) return;
  if (isNaN(event.target.value)) return;

  console.log("El arreglo sera de " + numero);
  totalArreglo();
}

function totalArreglo() {
  for (x = 0; x <= numero - 1; x++) {
    let numeroRandom = Math.floor(Math.random() * (1 - 100)) + 100;

    arreglo.push(numeroRandom);

    // console.log(x)

    if (arreglo[x] % 2 == 0) {
      // console.log("Este numero es par "+arreglo[x])
      pares = arreglo[x];

      arregloPares.push(pares);
    }
  }

const imprimirR = document.getElementById("alerta1");
imprimirR.innerText = "Estos son los numeros del todo el arreglo "+ arreglo;
const imprimirRPares = document.getElementById("alerta2");
imprimirRPares.innerText = "Estos son los numeros del todo el arreglo "+ arregloPares;



  // document.write(
    // "Estos Son los numeros aleatorios del arreglo " + arreglo + "<br>"
  // );

  // document.write("Este Es el arreglo con los pares " + arregloPares);
}
