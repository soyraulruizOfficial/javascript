/**********************Caracterizticas de los parametros de las funciones***********************


Explicaremos las caracteristicas que tienen los parametros de las funciones

1.Parametros obligatorios:
2.Parametros opcionales:
3.Parametros por defecto:



Notas:
        1.El primer parametro no puede ser opcional
        2.Siempre los parametros opcionales deben escribirse al final

*******************************************/


// 1.Parametros obligatorios:

// function suma(x:number){


//     let suma = x;
//     console.log(suma)
// }


// suma(10);

//2.Parametros opcionales:
// function suma(x:number,y?:boolean){


//     let suma = x;

//     if(y!=undefined){
//     console.log(suma)
//     }
// }


//3.Parametros por defecto:
// function suma(x:number,ultimo:number=10, y?:boolean){


//     let suma = x+ultimo;


//     if(y==undefined){
//         console.log(suma);
//     }

//   y==undefined?console.log(suma):null;

// }


// suma(10,20);



/**********************Funciones flechas***********************


*******************************************/

//funcion estandar
// function imprecion() {
//     console.log("hola mundo desde una funcion estandar");
// }



// //funcion de flechas
// let ArrowFuntion = () => {
//     console.log("Hola desde una funcion de flecha");

// }

// ArrowFuntion();

// imprecion();


/**********************Metodos array en funciones de flecha***********************
1.forEach
2.Map
3.Find
4.Filter
5.Some
*******************************************/



//1.forEach
let arregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for(let i=0;i<arregloNumerico.length;i++){

//     let elemento= arregloNumerico[i];
//     console.log(elemento);

// }


// arregloNumerico.forEach((elemento) => {

//     elemento % 2 == 0 ? console.log("par" , elemento) : console.log("impar" , elemento);



// });

/**********************Map***********************
Es similar al foreach ya que por cada valor en el arrreglo le aplica accion ,la diferencia es que map nos crea arreglo nuevo y forEach no

*******************************************/
// let arregloNuevo: any = [];
// arregloNuevo = arregloNumerico.map((elemento) => {

//     if (elemento % 2 == 0) {
//         return elemento;

//     } else {
//         return "impar";
//     }

// })
// console.log(arregloNuevo)



/********************Find*************************
 * Encuent 1 valor dentro de un arreglo  y nos comparte un valor nuevo

*******************************************/
// let elemento=0;
let personas: Array<any> = [
    {
        id: 1,
        nombre: "Raul",
        sexo: "Masculino",
    },
    {
        id: 2,
        nombre: "Pedro",
        sexo: "Masculino",
    },
    {
        id: 3,
        nombre: "daniela",
        sexo: "Femenino",
    }
];

// let persona = personas.find((elemento) => elemento.id == 2);
// console.log(persona);
/**********************Filter***********************

Encuentra varios valores y regregsa un array con ellos 

*******************************************/

// let personasMasculinas = personas.filter((personas) => personas.sexo != "Masculino");
// console.log(personasMasculinas);

/**********************Some***********************
Encuentra un valor dentro de un arreglo y nos regresa un true o un false 
true=para cuando existe el valor 
false= para cuando no existe

*******************************************/

// let existe = personas.some((persona) => persona.id == 2 && persona.nombre == "Ral");

// console.log("Existe")







