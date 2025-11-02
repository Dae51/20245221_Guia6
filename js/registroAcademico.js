document.addEventListener('DOMContentLoaded', function () {
    const containerEstudiantes = document.querySelector("#containerEstudiantes");


    const btnAddEstudiante = document.querySelector("#btnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#btnMostrarEstudiantes");

    

    let arrayEstudiantes = new Array();


    function addEstudiante() {
        const inputCarnet = document.querySelector("#inputCarnet")
        .value.toString().toUpperCase();
        const inputNombre = document.querySelector("#inputNombre")
        .value.toString().toUpperCase();
        const inputCarrera = document.querySelector("#inputCarrera")
        .value.toString().toUpperCase();


        if (inputCarnet != "" || inputNombre != "" || inputCarrera != "") {
            arrayEstudiantes.push(
                new Array(inputCarnet, inputNombre, inputCarrera)
            );
            alert("Estudiante agregado correctamente.");

            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputCarrera").value = "";
            document.querySelector("#inputCarnet").focus();
        } else {
            alert("Por favor complete todos los campos.");
        }    
    }

    function viewEstudiantes() {
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let carnet;
            let nombre;
            let apellido;
            let table = `<table class="table table-striped">`;
            table += "<thead>"
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellido</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            for (let i = 0; i < arrayEstudiantes.length; i++) { 
                carnet = arrayEstudiantes[i][0];
                nombre = arrayEstudiantes[i][1];
                apellido = arrayEstudiantes[i][2];  

                table += "<tr>";
                table += `<th scope='row' style='font-weight: bold;'>${i + 1}</th>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombre}</td>`;
                table += `<td>${apellido}</td>`;
                table += "</tr>";
            }

            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            alert("No se han registrado estudiantes.");
        }
});