const Tabla = Number(prompt("Cual tabla de multiplicar decea? (1--10)"))

for(i=1;i<=10;i++){
total= Tabla * i;
    document.write(`${Tabla} x ${i} = ${total}<br>`)
}