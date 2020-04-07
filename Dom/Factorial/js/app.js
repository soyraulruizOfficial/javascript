// const Numero = Number(prompt("Ingrese numero para sacar factorial"));

const titulo = document.createElement("h1");
titulo.innerText = "Factorial de un numero indicado";
titulo.setAttribute("class", "text-center");
const output = document.getElementById("output");
const div = document.createElement("div");
const input = document.createElement("input");
input.setAttribute("class", "form-control");
input.setAttribute("placeholder", "Escriba Numero A Sacar Factorial");
input.setAttribute("id", "Nume");

const button = document.createElement("button");
button.setAttribute("class", "btn btn-primary mt-3");
button.innerText = "Calcular";
button.setAttribute("id", "btn");

const alert = document.createElement("div");
alert.setAttribute("class", "alert alert-primary mt-3");
alert.setAttribute("id", "alerta");

output.appendChild(titulo);
output.appendChild(div);
div.appendChild(input);
div.appendChild(button);
div.appendChild(alert);

function addEvent() {
  let button = document.getElementById("btn");
  button.addEventListener("click", factorial);
}

function factorial() {
  //   document.write("Hola Estas en el evento");

  Numero = Number(document.getElementById("Nume").value);
  acumuladorDeResultado = 0;
  r = Numero;
  t = 0;
  x = 1;
  for (i = 1; i <= Numero - 1; i++) {
    //5   * 1
    x++;
    t = r * 1;
    r = t * x;

    alert.innerText = "El factorial de " + Numero + " es " + " = " + t;

    // document.write(t)
  }
}
addEvent();
