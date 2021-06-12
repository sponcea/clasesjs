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
    console.table(camposFormulario);
}
function leerTextoTelefono(evento) {
    camposFormulario.telefono=evento.target.value;
    console.table(camposFormulario);
} 
function leerTextoCorreo(evento) {
    camposFormulario.correo=evento.target.value;
    console.table(camposFormulario);
}
function leerTextoMensaje(evento) {
    camposFormulario.mensaje=evento.target.value;
    console.table(camposFormulario);    
}

//2da forma, una función para todos los elementos del formulario
function leerTexto(evento) {
    camposFormulario[evento.target.id]=evento.target.value;
    console.table(camposFormulario);
}

//1ra forma: Utilizando 2 funciones separadas
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

function mostrarMensajeOk(mensaje) {
    //Creo el elemento en donde quiero colocar el mensaje para que el usuario lo vea
    const bloqueOk=document.createElement('p');
    //Agrego el mensaje en el elemento
    bloqueOk.textContent=mensaje;
    //Agregamos una clase para luego darle estilo desde nuestro CSS
    bloqueOk.classList.add('mensajeOk');
    //Agregeo el bloque a mi html al final del formulario
    formulario.appendChild(bloqueOk);

    //Quitamos el mensaje de error luego de 5 segundos
    //setTimeout(accion, tiempo en milisegundos);
    setTimeout(function() {
        bloqueOk.remove();
    }, 5000 );
}

//2da forma, optimizamos un poco el código
function mostrarMensaje(mensaje,bandera) {
    //Creamos un elemento del tipo párrafo
    const bloque=document.createElement('p');
    //agregamos contenido al elemento del tipo párrafo
    bloque.textContent=mensaje;
    //Dependendiendo de la condicional se mostrara con la clases error u ok
    if (bandera==='Correcto') {
        bloque.classList.add('mensajeOk');
    } else {
        bloque.classList.add('mensajeError');
    }
    formulario.appendChild(bloque);   
    
    setTimeout(function() {
        bloque.remove();
    }, 5000 ); 
}

function validarFormulario(evento) {
    evento.preventDefault();
    //accedemos a los valores del objeto con camposFormulario.nombre, camposFormulario.telefono, etc
    //Validamos que los campos no estén en blanco
    //Si alguno de estos campos está en blanco
    if (camposFormulario.nombre==='' || camposFormulario.telefono==='' || camposFormulario.correo===''|| camposFormulario.mensaje==='' ) {
        //mostrarMensajeError("Todos los campos son obligatorios");
        mostrarMensaje("Todos los campos son obligatorios",'Error');
        //Luego de esto no debería continuar, entonces salgo de la función
        return;
    }
    //mostrarMensajeOk("Información enviada correctamente");
    mostrarMensaje("Información enviada correctamente",'Correcto');
}

//Obtenemos la referencia de todos los elemenos del formulario que deseamos validar
const nombre=document.getElementById('nombre');
const telefono=document.getElementById('telefono');
const correo=document.querySelector('#correo');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario-contacto');

//Ahora estamos pendientes de los eventos sobre los cuales queremos realizar una acción una vez que ocurran
//console.table(camposFormulario);
//Podemos acceder a un atributo de un objeto de cualquiera de las dos formas:

//console.log("imprimiendo con el formato orientado a objetos: "+camposFormulario.correo);
//console.log("imprimiendo con el formato de arreglo: "+camposFormulario['correo']);

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

//Ahora que llenamos el objeto camposFormulario, estamos pendientes del evento submit del formulario
formulario.addEventListener('submit', validarFormulario);

//IMPLEMENTAACION DEL DARK MODE
function activarDarkMode() {
    
    //Referencia al body de la página web, para poder cambiar su background color
    const fondoWeb=document.body;
    const mainContenedor=document.querySelector('main.contenedor'); //le estoy diciendo que haga referencia a un <main class="contenedor">...</main>
    
    fondoWeb.classList.toggle("dark-mode");
    mainContenedor.classList.toggle("dark-mode");
    mainContenedor.classList.toggle('sombra-dark-mode');
    formulario.classList.toggle('formulario-dark-mode');
}

//buscamos la referencia del elemento
const botonDarkMode=document.querySelector('.boton-dark-mode');
botonDarkMode.addEventListener('click', activarDarkMode);

//Detectamos si el navegador tiene el modo oscuro

if (window.matchMedia('(prefers-color-scheme: dark)').matches)  {
    activarDarkMode();
}