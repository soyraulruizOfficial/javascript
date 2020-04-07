alumnos = 1;
acumuladorH = 0;
acumuladorM = 0;
calificacionH=0;
calificacionM=0;
while (alumnos <= 5) {
  const calificacion = Number(
    prompt("Ingrese calificacion del alumno " + alumnos)
  );
  const sexo = Number(
    prompt(`Ingrese sexo del alumno ${alumnos} (1 = Hombre , 2 = Mujer)`)
  );
  alumnos++;

  if (sexo == 1) {
    acumuladorH++;
    calificacionH+= calificacion;
    promedioH = calificacionH / acumuladorH;
  } else if (sexo == 2) {
    acumuladorM++;
    calificacionM += calificacion;
    promedioM = calificacionM / acumuladorM;
  }
    p = acumuladorM + acumuladorH;
    promedioT = calificacionM + calificacionH 


}
if(calificacionH >= calificacionM){
document.write(`Promedio Mas Alto Hombres<br>`);
}else if (calificacionM>=calificacionH){
document.write(`Promedio Mas Alto Mujeres<br>`);
}
document.write(`Promedio Total Del Grupo = ${promedioT/p} <br>`);
document.write(`Promedio De Calificaciones Hombres = ${promedioH}<br>`);
document.write(`Promedio De Calificaciones Mujeres = ${promedioM}<br>`);

