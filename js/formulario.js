
const Nombre = document.getElementById("NombrePaciente");
const Apellido = document.getElementById("ApellifoPaciente");
const FechaNacimiento = document.getElementById("NacimientoPaciente");
const Masculino = document.getElementById("GeneroMasculino");
const Femenino = document.getElementById("GeneroFemenino");
const Pais = document.getElementById("CmbPais");
const Direccion = document.getElementById("DireccionPaciente");

const NombrePais = document.getElementById("NombrePais")

const btnAgregarPaciente = document.getElementById("btnAgregar");
const btnLimpiarPaciente = document.getElementById("btnLimpiar");
const btnMostrarPaciente = document.getElementById("btnMostrar");
const btnAgregarPais = document.getElementById("btnAgregarPais");

const notificacion = document.getElementById("Notificacion");

// Componente de bootstrap
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("Mensaje");

const Modal = document.getElementById("Modal");

let arrayPaciente = [];


const limpiarform = () => {
   Nombre.value = "";
   Apellido.value = "";
   FechaNacimiento.value = "";
   Masculino.checked = false;
   Femenino.checked = false;
   Pais.value = 0;
   Direccion.value = "";
   NombrePais.value = "";


   Nombre.focus();
};

const addPaciente = function () {
   let nombre = Nombre.value;
   let apellido = Apellido.value;
   let fechaNacimiento = FechaNacimiento.value;
   let sexo =
      Masculino.checked == true ? "Hombre"
         : Femenino.checked == true ? "Mujer" : "";
   let pais = Pais.value;
   let labelPais = Pais.options[Pais.selectedIndex].text;
   let direccion = Direccion.value;

   if (
      nombre != "" &&
      apellido != "" &&
      fechaNacimiento != "" &&
      sexo != "" &&
      pais != 0 &&
      direccion != ""
   ) {
      arrayPaciente.push(
         new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
      );


      mensaje.innerHTML = "Se ha registrado un nuevo paciente";
      toast.show();

      limpiarform();
   } else {
      mensaje.innerHTML = "Faltan campos por completar";
      toast.show()
   }
};

function imprimirFilas() {
   let $fila = "";
   let contador = 1;

   arrayPaciente.forEach((element) => {
      $fila += `<tr>
         <td scope="row" class="text-center fw-bold">${contador}</td>
         <td>${element[0]}</td>
         <td>${element[1]}</td>
         <td>${element[2]}</td>
         <td>${element[3]}</td>
         <td>${element[4]}</td>
         <td>${element[5]}</td>
         <td>
            <button id="btnEditar${contador}" type="button" class="btn btn-primary" alt="Eliminar">
               <i class="bi bi-pencil-square" onclick="editarPaciente(${contador})"></i>
            </button>
            <button id="btnEliminar${contador}" type="button" class="btn btn-danger" alt="Editar">
               <i class="bi bi-trash3-fill" onclick="eliminarPaciente(${contador})"></i>
            </button>
         </td>
      </tr>
      `;
      contador++;
   });
   return $fila;
};



const imprimirPacientes = () => {
   let $table = `<div class="table-responsive">
      <table class="table table-striped table-hover table-bordered">
         <tr>
            <th scope="col" class="text-center" style="width: 5%;">#</th>
            <th scope="col" class="text-center" style="width: 15%;">Nombre</th>
            <th scope="col" class="text-center" style="width: 15%;">Apellido</th>
            <th scope="col" class="text-center" style="width: 10%;">Fecha de nacimiento</th>
            <th scope="col" class="text-center" style="width: 10%;">Sexo</th>
            <th scope="col" class="text-center" style="width: 10%;">Pais</th>
            <th scope="col" class="text-center" style="width: 25%;">Direccion</th>
            <th scope="col" class="text-center" style="width: 10%;">Opciones</th>
         </tr>
         ${imprimirFilas()}
      </table>
   </div>
   `;
   document.getElementById("TablaPacientes").innerHTML = $table;
};

let contadorGlobal = Pais.children.length;

const addPais = () => {
   let paisNew = NombrePais.value;

   if (paisNew != "") {
      let option = document.createElement("option")
      option.textContent = paisNew;
      option.value = contadorGlobal + 1;

      Pais.appendChild(paisNew)

      mensaje.innerHTML = "Pais agregado correctamente";

      toast.show();
   } else {
      mensaje.innerHTML = "Falta campos por completar";
      toast.show()
   }
};

btnLimpiarPaciente.onclick = () => {
   limpiarform();
}

btnAgregarPaciente.onclick = () => {
   addPaciente();
}

btnMostrarPaciente.onclick = () => {
   imprimirPacientes();
}

btnAgregarPais.onclick = () => {
   addPais();
}

// Funcion editar
function editarPaciente(index) {
   let registro = arrayPaciente[index - 1];

   let nombre = Nombre.value;
   let apellido = Apellido.value;
   let fechaNacimiento = FechaNacimiento.value;
   let sexo =
      Masculino.checked == true ? "Hombre"
         : Femenino.checked == true ? "Mujer" : "";
   let pais = Pais.value;
   let labelPais = Pais.options[Pais.selectedIndex].text;
   let direccion = Direccion.value;

   if (arrayPaciente.length == 0 ) {
      mensaje.innerHTML = "Por favor agregue un paciente"
      toast.show()
   } else {
      if (
         nombre != "" &&
         apellido != "" &&
         fechaNacimiento != "" &&
         sexo != "" &&
         pais != 0 &&
         direccion != ""
      ) {

         registro.splice(0,5, nombre, apellido, fechaNacimiento, sexo, labelPais, direccion );

         mensaje.innerHTML = "Se ha actualizado al paciente";
         toast.show();
         limpiarform();
         imprimirPacientes();
       } else {
         mensaje.innerHTML = "Por favor llene todos los campos para actualizar el paciente";
         toast.show();
      }
   }
};

// Funcion eliminar
function eliminarPaciente(index) {
   console.log(index);
   if (index > 0 || index <= arrayPaciente.length) {
      arrayPaciente.splice(index - 1, 1);
      mensaje.innerHTML = "Registro eliminado de manera exitosa";
      toast.show();
      imprimirPacientes();
   } else {
      mensaje.innerHTML = "No ha sido posible eliminar el registro";
      toast.show();
   }
};


limpiarform();