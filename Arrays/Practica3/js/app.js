EventListener();
const output = document.getElementById('output');

function EventListener() {
  document.getElementById("agregarInputs").addEventListener("click", MostrarInputs);
}

function MostrarInputs() {
  const NumerosInputs = Number(document.getElementById("NumeroInputs").value);

  if(NumerosInputs > 1000 || NumerosInputs <=0) return;

 EliminarElementos();

    const row = document.createElement("div");
    row.setAttribute("class", row);
    for (let i = 0; i < NumerosInputs; i++) {
        const divCol=document.createElement("div");
        divCol.setAttribute("class", "col-12");

        const divFG = document.createElement("div");
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement("label");
        label.innerText=`Ingrese numero a guardar en el rreglo`;

        const input = document.createElement('input');
        input.setAttribute('type','number');
        input.setAttribute('id',`valorInput${i}`);
        input.setAttribute("class","form-control");
        

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonoBTENEResultado = document.createElement("button");
    buttonoBTENEResultado.setAttribute('class', 'btn btn-outline-dark mt-2 btn-block');
    buttonoBTENEResultado.setAttribute('id','btnResultado');
    buttonoBTENEResultado.innerText="Resultado";
    row.appendChild(buttonoBTENEResultado);

    document.getElementById('btnResultado').addEventListener('click', RealizarComparaciones);

}

let arreglo1=[];

function RealizarComparaciones(){

  const NumerosInputs = document.getElementsByTagName('input');
 
  let Acumulador = 0;
  for (let x=0; x<NumerosInputs.length; x++){
    for (let y=x+1; y<NumerosInputs.length; y++){
      if(NumerosInputs[x].value==NumerosInputs[y].value){
        NumerosInputs[y].value="";
      }
    }

    console.log(NumerosInputs[x].value);
  }

  MostrarDatos(NumerosInputs);

}

function EliminarElementos(){
  while (output.firstChild){
    output.firstChild.remove();
  }
  
}

function MostrarDatos(NumeroInputsArreglos){
  let imprecion="";
  for(let j=0; j<NumeroInputsArreglos.length; j++){
    if(NumeroInputsArreglos[j].value!=""){
      imprecion+=`${NumeroInputsArreglos[j].value}  ` ;

    }
  }
  alert(imprecion);
}
