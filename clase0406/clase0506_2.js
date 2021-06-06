//Validaremos que el formulario no esté vacío
//creamos un objeto para validar todos los campos del fomulario de manera integral
//También se podría trabajar con variables separadas

var camposFormulario = {
    nombre:'',
    telefono: '',
    correo: '',
    mensaje: ''
}
//1ra forma, una función por cada elemento del formulario

function leerTextoNombre(evento) {
    camposFormulario.nombre=evento.target.value;
}
function leerTextoTelefono(evento) {
    camposFormulario.telefono=evento.target.value;
} 
function leerTextoCorreo(evento) {
    camposFormulario.correo=evento.target.value;

}
function leerTextoMensaje(evento) {
    camposFormulario.mensaje=evento.target.value;

}

//2da forma, una función para todos los elementos del formulario
function leerTexto(evento) {
    camposFormulario[evento.target.id]=evento.target.value;
    console.table(camposFormulario);
}
function mostrarMensajeError(mensaje) {
    //Creo el elemento en donde quiero colocar el mensaje para que el usuario lo vea
    const bloqueError=document.createElement('p');
    //Agrego el mensaje en el elemento
    bloqueError.textContent=mensaje;
    //Agregamos una clase para luego darle estilo desde nuestro CSS
    bloqueError.classList.add('mensajeError');
    //Agregeo el bloque a mi html al final del formulario
    formulario.appendChild(bloqueError);

    //Quitamos el mensaje de error luego de 5 segundos
    //setTimeout(accion, tiempo en milisegundos);
    setTimeout(function() {
        bloqueError.remove();
    }, 5000 );
}

function validarFormulario(evento) {
    evento.preventDefault();
    //accedemos a los valores del objeto con camposFormulario.nombre, camposFormulario.telefono, etc
    //Validamos que los campos no estén en blanco
    //Si alguno de estos campos está en blanco
    if (camposFormulario.nombre==='' || camposFormulario.telefono==='' || camposFormulario.correo===''|| camposFormulario.mensaje==='' ) {
        mostrarMensajeError("Todos los campos son obligatorios");
        //Luego de esto no debería continuar, entonces salgo de la función
        return;
    }
    console.log("Enviando formulario");
}

//Obtenemos la referencia de todos los elemenos del formulario que deseamos validar
const nombre=document.getElementById('nombre');
const telefono=document.getElementById('telefono');
const correo=document.querySelector('#correo');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario-contacto');

//Ahora estamos pendientes de los eventos sobre los cuales queremos realizar una acción una vez que ocurran

//1ra forma: una función por cada elemento
/*nombre.addEventListener('input',leerTextoNombre);
telefono.addEventListener('input',leerTextoTelefono);
correo.addEventListener('input',leerTextoCorreo);
mensaje.addEventListener('input',leerTextoMensaje);
*/
//2da forma: una sola funcion por cada elemento
nombre.addEventListener('input',leerTexto);
telefono.addEventListener('input',leerTexto);
correo.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

//Ahora estamos pendientes del evento submit del formulario
formulario.addEventListener('submit', validarFormulario);
