// // 12.	Dados dos arreglos numéricos del mismo tamaño (A, B), 
// generar un tercer arreglo que combine los numero de A y B 
// ordenados de manera descendente. 


let arreglo1= [];
let arreglo2= [];
let arreglo3= [];

for(let i = 1; i<=5;i++){
let numeros = Math.floor(Math.random()*(100));


arreglo1.push(numeros)
}
for(let i = 1; i<=5;i++){
    let numeros = Math.floor(Math.random()*(100));


arreglo2.push(numeros)
}

arreglo3= arreglo1.concat(arreglo2);


function comparar ( a, b ){ return a - b; }
arreglo3.sort( comparar );

document.write("Arreglo1: "+arreglo1 + "<br>")
document.write("Arreglo2: "+arreglo2 + "<br>")
document.write("Arreglo3 acendente: "+arreglo3 + "<br>")
document.write("Arreglo3 decendente: "+arreglo3.reverse())





