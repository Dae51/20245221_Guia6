const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

const btnPromedio = document.querySelector("#btnGenerarNotas");

btnPromedio.addEventListener("click", generarEstudiantes);


function generarEstudiantes() {
    let arrayEstudiantes = new Array();

    let totalEstudiantes = document.querySelector("#inputNum").value;

    let contador = 1;

    let estudiante, calificacion, convertir = 0;
    while (contador <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}:`);

        do {
            calificacion = parseFloat(prompt(`Ingrese la calificación del estudiante ${contador}`));
            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        arrayEstudiantes[contador-1] = new Array(
            estudiante, parseFloat(calificacion).toFixed(2));

        contador++;
    }

    let calificacionAlta = 0, promedio = 0, posicion = 0;

    let listado = "<h3>Listado de estudiantes registrados</h3>";
    listado += '<ol>';
    for (let indice of arrayEstudiantes) {
        let nombreEstudiante = indice[0];
        let notaEstudiante = indice[1];

        listado += `<li><b>Estudiante:</b>${nombreEstudiante} - <b>Calificación:</b>${notaEstudiante}</li>`;

        if (notaEstudiante > calificacionAlta) {
            posicion = indice;
        }

        promedio += parseFloat(notaEstudiante);
    }
    listado += '</ol>';
    promedio = parseFloat(promedio / arrayEstudiantes.length).toFixed(2);
    
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}`;
    listado += `<br><b>Estudiante con calificacion más alta:</b> ${posicion[0]}</p>`;

    containerEstudiantes.innerHTML = listado;
}