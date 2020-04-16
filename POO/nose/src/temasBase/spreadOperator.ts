/**********************SpreadOperator Array***********************

...


*******************************************/



const arreglo = [1, 2, 3, 4, 5, 6, 7];
const arreglo2 = [8, 9, 10];
const arreglo3 = [...arreglo, ...arreglo2, 11, 12, 13];
const arreglo4 = [...arreglo3, "Hola mundo"]
console.log(arreglo4)

/**********************Spread objetos***********************

*******************************************/
const objetoPersona1 = {

    nombre: "Raul ",
    apellido: "Ruiz",
    edad: 23,
    sexo: "Masculino",
}

const objetoPersona2 = {
    ...objetoPersona1,
    edad: 25,
}
console.log(objetoPersona2);



function SumarValores(x?: number, y?: number, z?: number) {
    let suma = x! + y! + z!;

    console.log(suma);


}
// SumarValores(arreglo[0],arreglo[1],arreglo[2]);
SumarValores(...arreglo);


/**********************Interfases***********************

*******************************************/