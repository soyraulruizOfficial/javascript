const Numero = Number(prompt("Ingrese numero para sacar factorial"));
acumuladorDeResultado=0;
r=Numero
t=0
x=1
for (i = 1; i <= Numero-1; i++) {

        //5   * 1
        x++;
    t = r * 1;
     r = t*x   

    document.write(t+"<br>")

}
