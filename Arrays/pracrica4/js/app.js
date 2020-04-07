EventListener();

function EventListener() {
  document
    .getElementById("TamanoArray")
    .addEventListener("keypress", CrearInputs);

  function CrearInputs(event) {
 
 
        if (event.key== "Enter"){



            if(isNaN(event.target.value)) return;
RellenarArreglo(event.target.value)
        }
  }


  function RellenarArreglo(tamanoArray){


    let arregloNumeroAleatorios = [];

    for(let i=0; i < tamanoArray; i++){

        arregloNumeroAleatorios[i] = Math.floor(Math.random()*(10 - 1)+1);

    }
    MostrarValores(arregloNumeroAleatorios);
  }
  function MostrarValores(arregloLLeno){

    for(let i=0 ; i<arregloLLeno.lenght;i++){

    }
  }
}
