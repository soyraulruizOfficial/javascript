
EventListener()

function EventListener(){
    scribe = document.getElementById("inpPalabra").addEventListener("keypress",actuar);

}

   function actuar(e){

    if(e.key == 'Enter'){
let cadena = document.getElementById("inpPalabra").value;
let nombres = cadena.split("");

alreves= nombres.reverse();
document.getElementById("resultado").innerHTML= "<h1>"+alreves+"</h1>"



}


    


   }

