// // Desarrolle una solución que lea 10 números por teclado,
//  5 para un array y 5 para otro array distinto. Mostrar
//   los 10 números en pantalla mediante un tercer array. 



//.contact sirve para unir arrays


let arreglo1= [];
let arreglo2= [];
let arreglo3= [];

for(let i = 1; i<=5;i++){
let numeros = prompt("Ingrese un numero");


arreglo1.push(numeros)
}
for(let i = 1; i<=5;i++){
let numeros = prompt("Ingrese un numero");


arreglo2.push(numeros)
}
arreglo3=arreglo1.concat(arreglo2);

document.write("Numeros de arreglo1: "+arreglo1 +"<br>")
document.write("Numeros de arreglo2: "+arreglo2+ "<br>")
document.write("Numeros juntos de arreglo1 y arreglo2: "+arreglo3)
