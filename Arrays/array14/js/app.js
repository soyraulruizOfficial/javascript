// 14.	Suponga que tiene un arreglo de longitud = 30 con números enteros generados de manera aleatoria. 
// Desarrolle una solución que regrese en otro arreglo todos los múltiplos de 7 del arreglo anterior. 

//arreglo[posicion] / 7 %==0 seria multiplo
let arreglo=[]

for(let i=0; i<=9;i++){

    aleatorio = Math.floor(Math.random()*(100))
    arreglo.push(aleatorio)

    console.log(`index ${i}: `+arreglo[i])


if(arreglo[i]%7==0){
    t = arreglo[i]/7;

    console.log(t)
}

}
console.log(arreglo)


