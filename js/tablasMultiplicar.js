const containerResultados = document.querySelector("#containerTablaMultiplicar");
const btnCalcular = document.querySelector("#btnGenerar");

btnCalcular.addEventListener("click", generarTablaMultiplicar);

function generarTablaMultiplicar() {
    const inputTabla = document.querySelector("#inputNumero").value;

    let contador = 1;

    if (inputTabla > 0) {
            let tabla = `<h2>Tabla de Multiplicar de ${inputTabla}</h2>`;

            do {
                let resultado = inputTabla * contador;
                tabla += `<div class="row text-center">`;
                tabla += `<div class="col-md-1 colum"><h3>${inputTabla}</h3></div>`
                tabla += `<div class="col-md-1 colum-green"><h3>x</h3></div>`
                tabla += `<div class="col-md-1 colum"><h3>${contador}</h3></div>`
                tabla += `<div class="col-md-1 colum-green"><h3>=</h3></div>`
                tabla += `<div class="col-md-1 colum"><h3>${resultado}</h3></div>`
                tabla += `</div>`;

                contador++;
            }
            while (contador <= 12) {
                document.querySelector("#inputNumero").value = 1;
                document.querySelector("#inputNumero").focus();
                containerResultados.innerHTML = tabla;
            }
        } else {
            alert("Por favor ingrese un número válido mayor que 0.");
        }
}