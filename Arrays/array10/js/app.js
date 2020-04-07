// Crear un arreglo con 25 numeros aleatorios 
// y hacer una busqueda binaria 

// la busqueda binaria : Funciona al dividir repetidamente a la mitad la porción de la 
// lista que podría contener al elemento, hasta reducir las ubicaciones posibles a solo una. 



// 25 entre 2= resultado / 2 hasta que se redusca a una 

let arreglo=[]


for(let i=0;i<=25;i++){
NumeroAleatorio = Math.floor (Math.random ()* (100));


arreglo.push(NumeroAleatorio)

}


document.write("Este es el arreglo aleatorio: "+arreglo+"<br>")



for(let i=1 ; i<= arreglo.length/1; i++){
arreglo.shift(NumeroAleatorio)
}
document.write("Aqui es la mitad del arreglo: "+arreglo + "<br>")

for(let i=1 ; i<= arreglo.length/1; i++){
    arreglo.shift(NumeroAleatorio)
    }

    for(let i=1 ; i<= arreglo.length/1; i++){
        arreglo.shift(NumeroAleatorio)
        }
    document.write("Aqui es la mitad de la mitad del arreglo: "+arreglo + "<br>")
    document.write("Este es el numero encontrado binariamente: "+arreglo[0] + "<br>")
   
        
