// Script que devuelve la frase con la fecha de la próxima sesión informativa
// Lunes, 8 de Junio 2015
//
// Creamos un array con las distintas fechas de los sesiones en formato corto ISO: "2014-12-24T24:00:00"
// Las horas deben estar en HORARIO LOCAL
var sesiones = []; // Fechas en formato ISO: 'YYYY-MM-DDTHH:MM:SS'
sesiones.push('2015-06-08T19:30:00');
sesiones.push('2015-06-17T19:30:00');
sesiones.push('2015-06-25T19:30:00');
sesiones.push('2015-07-09T19:30:00');
sesiones.push('2015-07-21T19:30:00');
sesiones.push('2015-09-01T19:30:00');
sesiones.push('2015-09-10T19:30:00');
sesiones.push('2015-10-02T19:30:00');
sesiones.push('2015-10-08T19:30:00');

var meses = [];
meses.push('ENERO');
meses.push('FEBRERO');
meses.push('MARZO');
meses.push('ABRIL');
meses.push('MAYO');
meses.push('JUNIO');
meses.push('JULIO');
meses.push('AGOSTO');
meses.push('SEPTIEMBRE');
meses.push('OCTUBRE');
meses.push('NOVIEMBRE');
meses.push('DICIEMBRE');

var ahoraDate = new Date();
// Obtenemos la variación horaria según nuestra zona (en minutos),
// la usaremos dentro del bucle para contrastar la hora actual y la hora de cada sesión informativa.
var timeZoneDifference = ahoraDate.getTimezoneOffset();
var ahora = ahoraDate.getTime();
var ahora_hora = ahoraDate.getHours();
var ahora_minuto = ahoraDate.getMinutes();

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

for (i = 0; i < sesiones.length; i++) {
    // Nos vemos forzados a parsear a mano las fechas, ya que Chrome y Firefox las parsean
    // de modo diferente, considerando uno la hora local y otro la UTC.
    // Parseando a mano evitamos las discrepancias entre navegadores.
    var str = sesiones[i].split("T");
    var parsedDate = str[0].split("-");
    var parsedTime = str[1].split(":");
    var tmpDate = new Date(parsedDate[0], parsedDate[1]-1, parsedDate[2], parsedTime[0], parsedTime[1], parsedTime[2], 0);

    //console.log("Sesion[" + i + "]: " + tmpDate);
    var sesion_dia = tmpDate.getDate();
    var sesion_mes = meses[tmpDate.getMonth()];
    var sesion_hora = tmpDate.getHours();
    var sesion_minuto = addZero(tmpDate.getMinutes());
    //var frase = "VEN A <br />NUESTRA <br />SESIÓN <br />INFORMATIVA <br />" + sesion_dia + " DE " + sesion_mes +"<br /> 19:30h";
    var frase = "VEN A <br />NUESTRA <br />SESIÓN <br />INFORMATIVA <br />" + sesion_dia + " DE " + sesion_mes +"<br /> " + sesion_hora + ":" + sesion_minuto + "h";

    if (tmpDate.getTime() > ahora) {	break; }
}

//console.log("Proxima sesión: " + fraselog);
//console.log("ACTUAL: " + ahora_hora + ":" + ahora_minuto + ", SESION: " + sesion_hora + ":" + sesion_minuto);
var proximaSesion = document.getElementById("anuncio-proxima-sesion");
if (proximaSesion) {
  proximaSesion.innerHTML = frase;
}
