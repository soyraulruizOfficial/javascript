const contenidoLista = document.getElementById("actividad")
const listaCosas = document.getElementById("listaActividades")

eventListener();



function eventListener(){
                document.getElementById("formulario").addEventListener("submit",ObtenerFormulario)


}

function ObtenerFormulario(event){

        event.preventDefault();

        if(contenidoLista.value.trim() == "") return;

        const InstanciaLista = new Lista(contenidoLista.value);
        InstanciaLista.AgregarListaDOM(listaCosas,true);
        contenidoLista.value="";

}


