const output = document.getElementById("output");
const h1 = document.createElement("h1");
h1.classList.add("text-control");
h1.innerText = "Suma de pares e impares 200 a 400";
const div = document.createElement("div");
const button = document.createElement("button");
button.setAttribute("class", "btn btn-primary");
button.innerText = "Calcular";
button.setAttribute("id", "btn");

const alerta = document.createElement("div");
alerta.setAttribute("class", "alert alert-primary mt-3");
alerta.setAttribute("id", "alert");

const alerta2 = document.createElement("div");
alerta2.setAttribute("class", "alert alert-primary mt-3");
alerta2.setAttribute("id", "alert");

output.appendChild(h1);
output.appendChild(div);
div.appendChild(button);
div.appendChild(alerta);
div.appendChild(alerta2);

function addEvent() {
  const button = document.getElementById("btn");
  button.addEventListener("click", proceso);
}
addEvent();
function proceso() {
  x = 0;
  acumuladorPar = 0;
  acumuladorImpar = 0;
  for (i = 200; i <= 400; i++) {
    x++;

    if (i % 2 == 0) {
      alerta.innerText = `Soy par ${i} `;
      acumuladorPar = acumuladorPar + i;
      alerta.innerText = `Suma de pares ${acumuladorPar} `;
    } else {
      alerta2.innerText = `Soy impar ${i} `;
      acumuladorImpar = acumuladorImpar + i;
      alerta2.innerText = `Suma de impares ${acumuladorImpar} `;
    }
  }
}
