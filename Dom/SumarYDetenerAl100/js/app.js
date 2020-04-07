const h1 =document.createElement("h1")
h1.innerText="Sumar y detener al 100"
h1.classList.add("text-center")
const output = document.getElementById("output")


const div = document.createElement("div")
const input = document.createElement("input")
input.setAttribute("class","form-control")

const button = document.createElement("button")
button.setAttribute("class","btn btn-primary mt-3")
button.setAttribute("id","btn")
button.innerText="Sumar"

const alerta = document.createElement("div")
alerta.setAttribute("class","alert alert-primary mt-3")

output.appendChild(h1)
output.appendChild(div)
div.appendChild(input)
div.appendChild(button)
div.appendChild(alerta)


function addEvent(){
const button = document.getElementById("btn")
button.addEventListener("click",sumar)

}
addEvent();

function sumar(){
   



let acumulador=0;
for(x=1;acumulador<=99;x++){

for (i = 1; i==true; i++) {
    const numeroIngresado = Number(prompt("Ingrese un numero"));

acumulador=acumulador+numeroIngresado;
alerta.innerText=acumulador

}
    
}
}