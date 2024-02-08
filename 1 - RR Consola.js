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

let noProcesos = process.argv[2] ? process.argv[2] : 3;
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
    //For para las instrucciones
    for (let i = 0; i < m; i++) {
        //For para procesos
        for (let p = 0; p < noProcesos; p++) {
            //console.log();
            console.log("\n\tProceso " + procesos[p].id);
            if (i < procesos[p].codigo.length) {
                console.log(procesos[p].codigo[i]);
            } else {
                console.log("Terminado");
            }
        }
    }
    console.log("\n");
}
