let variable1: number = 0;
let variable2: string = "Hola mundo";
let variable3: boolean = true;

let array1 :Array<string | number> =[1,2,3,4,5,6,"hola"];


console.log(array1);

console.log(typeof variable2)



function Numerica(x: number, y: number): number {

    let resultado: number = x + y;

    return resultado;
}

console.log(Numerica(9, 8))

const btn: HTMLElement = document.getElementById("btnEjecutar")!;
btn.addEventListener("click", function clacularEdad() {

    const InputEdadUsuario: HTMLInputElement = <HTMLInputElement>document.getElementById("edad")

    const edadUsuario: number = Number(InputEdadUsuario.value);

    let resultado: number = edadUsuario + 20;

    const outputElement: HTMLDivElement = <HTMLDivElement> document.querySelector("#output");

    outputElement.innerText=`Te vas a casar a los ${resultado}`

})