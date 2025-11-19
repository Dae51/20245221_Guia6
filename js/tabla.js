// Se definen las filas de la tabla
const generarFila = (tipo, fila, columnas) => {
    let tr = `<tr>`;
    for (let c = 0; c <= columnas; c++) {
        if (tipo == 1) {
            if (c == 0) {
                tr += `<th scope="col" class="text-center">#</th>`;
            } else {
                tr += `<th scope="col" class="text-center">Titulo ${c}</th>`;
            }
        } else {
            if (c == 0) {
                tr += `<td scope="row" class="text-center fw-blod text-success">Fila ${fila}</td>`;
            } else {
                tr += `<td class="text-center">Celda ${fila}, ${c}</td>`;
            }
        }
    }
    return (tr + `</tr>`);
};

// Se define la tabla
const generarTabla = (filas, columnas) => {
    let tabla = `
    <div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">`

    for (let i = 0 ; i <= filas; i++) {
        if (i == 0) {
            tabla += generarFila(1, i, columnas);
        } else {
            tabla += generarFila(2, i, columnas);
        }
    }
    tabla += `</table></div>`;
    return tabla;
}

// Funcion para crear la tabla
const crearTabla = function () {
    let columnas = document.getElementById('NumFila').value;
    let filas = document.getElementById('NumColumna').value;

    if (columnas != "" && filas != "") {
        const contenedor = document.getElementById('tablaContainer');
        contenedor.innerHTML = generarTabla(filas, columnas);
        console.log(generarTabla(filas, columnas));
    } else {
        alert('No se pudo crer la tabla, no se completaron los datos');
    }
} 