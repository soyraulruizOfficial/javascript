eventListener();

function eventListener() {
  document
    .querySelector("#lista-cursos")
    .addEventListener("click", GuardarCursosCarrito);
}


function GuardarCursosCarrito(){
        event.preventDefault();

    if(event.target.classList.value.search("agregar-carrito")== -1)return;

const curso  = event.target.parenElement.parenElement;    

}