const arregloPalabras = [];
let parar;

const output = document.getElementById("output"); //Declarando variable del id html para crear Dom
EventListener(); //Mandar llamar funcion Eventlistenner
function EventListener() {
  document.getElementById("Numero").addEventListener("keypress", IniciarApp); //Iniciar la app con un enter en el input
}
function EventButton() {
  document.getElementById("btn").addEventListener("click", boton);

}
function boton() {

  for (let i = 1; i <=x; i++) {
    let palabras =document.getElementById(`palabra${i}`).value;
    arregloPalabras.push(palabras);
    document.getElementById(`resultado${i}`).innerHTML= "<h1>"+arregloPalabras.sort()+"</h1>";
    eliminarboton();

  }

}

function IniciarApp(event) {
  
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (event.target.value <= 0) return;
  if (event.target.value > 10) return;
  if (isNaN(event.target.value)) return;

  let parar = document.getElementById("Numero").value;
  EliminarElementos();

  for (x = 1; x <= parar; x++) {
    const label = document.createElement("label");

    label.innerText = `Ingrese palabra ${x}`;

    const input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", `palabra${x}`);

    const mostrar = document.createElement("div")
    const espacio = document.createElement("div")
      mostrar.setAttribute("id",`resultado${x}`)

    output.appendChild(label);
    output.appendChild(input);
    output.appendChild(espacio)
    espacio.appendChild(mostrar)



  }
  

  
  const button = document.createElement("button");
  button.setAttribute("class", "btn btn-primary mt-3");
  button.innerText = "Consultar";
  button.setAttribute("id", "btn");


  output.appendChild(button);

  

  EventButton();

}

function EliminarElementos() {
  while (nose.firstChild) {
    nose.firstChild.remove();
    
  }
}
function eliminarboton(){
  while(btn.firstChild){
    btn.firstChild.remove();
  }
}
