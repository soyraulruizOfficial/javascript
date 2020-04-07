

const formularioUI = document.querySelector("#formulario");
const listaActividadesUI = document.querySelector("#listaActividades");


let arrayActividades =[];



//funcion
CrearItem()
function CrearItem (actividad){


    let item ={

        actividad:actividad,
        estado: false
    }

    arrayActividades.push(item);

    return item;

}



//event
function addEventListener(){
    
}
formularioUI.addEventListener("submit",(e)=>{

    e.preventDefault();
    let actividadUI = document.querySelector("#actividad").value;

    console.log(actividadUI)
formularioUI.reset();
});

document.addEventListener("DOMContentLoaded")