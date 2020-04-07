
x=0;
acumuladorPar=0
acumuladorImpar=0
for (i = 200; i<= 400; i++){
x++;

    if(i%2==0){
    document.write(`Soy par ${i} <br>`)
    acumuladorPar= acumuladorPar+i;
    document.write(`Suma de pares ${acumuladorPar} <br>`)

    
}else{
    document.write(`Soy impar ${i} <br>`)
        acumuladorImpar= acumuladorImpar+i;
        document.write(`Suma de impares ${acumuladorImpar} <br>`)

}
}
