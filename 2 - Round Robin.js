let instrucciones = [
    [
        "let a = 5;",
        "let b = 8;",
        "let c = a + b;",
        "console.log('5 + 8');",
        "console.log(c);",
    ],
    [
        "let l=prompt('Ingrese un lado de un cuadrado',1);",
        "let area = l * l;",
        "console.log('area = ' + area);",
    ],
    [
        "let nombre = prompt('¿Quién eres?','');",
        "console.log('Hola ' + nombre);",
    ],
    [
        "let nombre = prompt('Escribe tu nombre (Solo uno)','');",
        "let apellido = prompt('Escribe tu apellido (Solo uno)','');",
        "nombre.toLowerCase();",
        "apellido.toLowerCase();",
        "console.log('Tu correo será:');",
        "console.log(apellido + '.' + nombre + '@uabc.edu.mx');",
    ],
    [
        "let dado=Math.round(Math. random() * 6);",
        "console.log('Valor del dado: ' + dado);",
    ],
    [
        "let tiempo=Math.round(Math. random() * 60);",
        "let formato = ['s','hrs'];, f = Math.round(Math. random() * 1);",
        "console.log('Tienes ' + tiempo + ' ' + formato[f]);",
    ],
];

let noProcesos = prompt("Ingresa el número de procesos: ", 2); //Solicitud de número de procesos
//--- Cualquier entrada que no sea un número, se anulará y se le asignará un 10 a la variable N ---//
if ((noProcesos == 0) || (noProcesos === null) || (isNaN(noProcesos)))
    noProcesos = 3;

let procesos = []; //Creación de arreglo de procesos
inicializar(noProcesos, procesos);
let m = inclusionCodigo(noProcesos, procesos);
simulacion(noProcesos, procesos, m);

//Asignación del código a los procesos
function inclusionCodigo(noProcesos, procesos) {
    let max = 0;
    for (let i = 0; i < noProcesos; i++) {
        procesos[i].codigo =
            instrucciones[
                Math.round(Math.random() * (instrucciones.length - 1))
            ];
        if (procesos[i].codigo.length > max) max = procesos[i].codigo.length;
    }
    return max;
}

//Inicialización de los procesos
function inicializar(noProcesos, procesos) {
    for (let i = 0; i < noProcesos; i++) {
        procesos[i] = { id: i + 1 };
    }
}

//La simulación del Round Robin
function simulacion(noProcesos, procesos, m) {
    document.write("<table border='10'>");

    document.write("<tr>");
    for (let h = 0; h < noProcesos; h++){
        document.write("<th>");
        document.write("<font color='3F51B5'><h3>Proceso " + procesos[h].id + "</h3></font>");
        document.write("</th>");
    }
    document.write("</tr>");

    //For para las instrucciones
    for (let i = 0; i < m; i++) {
        document.write("<tr>");
        //For para procesos
        for (let p = 0; p < noProcesos; p++) {
            document.write("<td>");
            
            if (i < procesos[p].codigo.length) {
                document.write(
                    "<font color='2E7D32'>   " +
                        procesos[p].codigo[i] +
                        "<br></font>"
                );
            } else {
                document.write("<font color='880E4F'>   Terminado <br></font>");
            }
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
