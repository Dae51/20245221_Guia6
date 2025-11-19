const campo =  document.getElementById('idTxtNumero');

const ValidarNumero  = function (e) {
    let validar =  /^[0-9]{1}$/;
    let tecla = e.key;

    if (!validar.test(tecla)) e.preventDefault();
};

campo.addEventListener('keypress', ValidarNumero);

const boton = document.getElementById('btnCalcularFactorial');

function CalcularFactorial (numero) {
 return numero < 2 ? 1 : numero * CalcularFactorial(numero - 1);
};

const imprimirResultado = (numero, resultado) => {
    const contenedor = document.getElementById('idDivResultado');
    contenedor.innerText = `El factorial de ${numero} es ${resultado}`;
};

function calcular() {
    let numero = document.getElementById('idTxtNumero').value;
    if (numero != '') {
        let resultado = CalcularFactorial(numero);
        imprimirResultado(numero, resultado);
    } else {
        alert('Por favor ingrese un número válido');
    }
}

boton.addEventListener('click', calcular);