



const output = document.getElementById("output");

const div = document.createElement("div");
const label = document.createElement("label");
const label2 = document.createElement("label");
const label3 = document.createElement("label");
const label4 = document.createElement("label");
const label5 = document.createElement("label");
const Nombre = document.createElement("input");
const Edad = document.createElement("input");
const Telefono = document.createElement("input");
const NombreTutor = document.createElement("input");
const TelefonoTutor = document.createElement("input");

Nombre.setAttribute("class", "form-control required" );
Nombre.setAttribute("id", "NombreUser");
Nombre.setAttribute("type", "text");




Edad.setAttribute("class", "form-control ");
Edad.setAttribute("type", "number");
Edad.setAttribute("id", "EdadUser");


Telefono.setAttribute("class", "form-control ");
Telefono.setAttribute("type", "number");
Telefono.setAttribute("id", "TelefonoUser");
Telefono.setAttribute("value","449")
Telefono.setAttribute("maxlength","3")




NombreTutor.setAttribute("class", "form-control ");
NombreTutor.setAttribute("id", "NombreTutor");
NombreTutor.setAttribute("type", "text");

TelefonoTutor.setAttribute("class", "form-control ");
TelefonoTutor.setAttribute("type", "number");
TelefonoTutor.setAttribute("id", "TelefonoTutor");
TelefonoTutor.setAttribute("value","449")



label.innerText = "Ingrese Nombre Del Nuevo Usuario: ";
label2.innerText = "Ingrese Edad Del Nuevo Usuario: ";
label3.innerText = "Ingrese Telefono Del Nuevo Usuario: ";
label4.innerText = "Ingrese Nombre Del Tutor: ";
label5.innerText = "Ingrese Telefono Del Tutor: ";

const button = document.createElement("button");
button.setAttribute("class", "btn btn-primary mt-3 mr-5");
button.innerText = "Registrar";
button.setAttribute("id", "btn");

const reiniciar = document.createElement("button");
reiniciar.setAttribute("class", "btn btn-primary mt-3 ml-5 ");
reiniciar.innerText = "Reiniciar formulario";
reiniciar.setAttribute("id", "btnReiniciar");

output.appendChild(div);
div.appendChild(label);
div.appendChild(Nombre);
div.appendChild(label2);
div.appendChild(Edad);
div.appendChild(label3);
div.appendChild(Telefono);
div.appendChild(label4);
div.appendChild(NombreTutor);
div.appendChild(label5);
div.appendChild(TelefonoTutor);
div.appendChild(button);
div.appendChild(reiniciar);

console.log ("Los caracteres del telefono son = "+Telefono.maxLength)



function addEvent() {
  const button = document.getElementById("btn");
  button.addEventListener("click", guardar);
}

addEvent();

function guardar(){

    
 let Nombre = String (document.getElementById("NombreUser").value)
 let Edad = Number(document.getElementById("EdadUser").value)
 let Telefono = Number(document.getElementById("TelefonoUser").value)
 let NombreTutor = String (document.getElementById("NombreTutor").value)
 let TelefonoTutor = Number (document.getElementById("TelefonoTutor").value)

 

 if( Nombre == "" || Nombre <= 99999999999) {
    alert( "Por Favor Introdusca Un Nombre Correcto!" );
    return false;
 }
 if( NombreTutor == "" || NombreTutor <= 99999999999) {
    alert( "Por Favor Introdusca Un Nombre De Tutor Correcto!" );
    return false;
 }
 if(Edad >= 30 || Edad==""){
     alert("Ingrese una edad correcta")
     return false;

 }if (Telefono ==449 || Telefono.maxLength >=10){
     alert("Introdusca un telefono de usuario correcto")
     return false
 }
 if (TelefonoTutor ==449){
    alert("Introdusca un telefono de tutor correcto")
    return false
}
    document.write(`Nombre Registrado = "${Nombre}" <br>`)
    document.write(`Edad Registrada = "${Edad}" <br>`)
    document.write(`Telefono Registrado = "${Telefono}" <br>`)
    document.write(`Nombre Tutor Registrado = "${NombreTutor}" <br>`)
    document.write(`Telefono Tutor Registrado = "${TelefonoTutor}" <br>`)
}


function addEvent2() {
    const reiniciar = document.getElementById("btnReiniciar");
    reiniciar.addEventListener("click", reiniciar2);
  }
  
  function reiniciar2(){

    alert("Aqui va la funcion reiniciar formulario")
   

    
  }




 
  addEvent2();