EventListener();

let ArregloNumerosPrimosGlobal = [];
function fillArrayGlobal() {
  for (let i = 0; i < 1000; i++) {
    let bandera = true;


    for (let y = 2; y < i; y++) {
      if (i % y == 0) {
        bandera = false;
        
        break;
      }
    }

    if (bandera) {
      ArregloNumerosPrimosGlobal.push(i);
      
    }
  }


  console.log(`${ArregloNumerosPrimosGlobal}`);


}

function EventListener() {
  document.addEventListener("DOMContentLoaded", fillArrayGlobal);
  document.getElementById("TamanoArray").addEventListener("keypress", InitApp);
}

function InitApp(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (event.target.value <= 0) return;
  if (isNaN(event.target.value)) return;

  fillArray(event.target.value);
}

function fillArray(TamanoArray) {
  let ArregloNumerosPrimos = [];
  for (let i = 0; i < TamanoArray; i++) {
    let numeroAleatorio =
      Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1;

    ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroAleatorio]);
  }
  console.log(ArregloNumerosPrimos)
}





