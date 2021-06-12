//esperar eventos desde el mismo JS

//window.addEventlistener(el evento que se espera ocurra, la accion que quiero ejecutar);
//Defino mis funciones
function imprimirEnConsola() {
    //console.log("3ro: La página cargó correctamente");
}

//DEfino mis listeners
//El load carga toda la página: html, css, js, etc...
//En la acción puedo colocar una funcion o el nombre de una funcion e implementarla fuera del método
window.addEventListener('load', imprimirEnConsola);

window.addEventListener('scroll', function() {
    //  console.log('scrolling...');
});

//DOMContentLoaded: solo carga HTML
window.addEventListener('DOMContentLoaded', function() {
    //console.log("1ro: No, yo me ejecuto primero");
});
window.addEventListener('DOMContentLoaded', function() {
    //console.log("2do: yo me ejecuto primero");
});

//trabajamos con el boton del formulario

//Busco el elemento cuya clase es '.boton', si quisiera buscar por id con querySelector, entonces buscaría '#boton'
//console.clear();
//Estoy obteniendo la referencia del html asociado al id botonEnviar
const botonEnviar=document.querySelector('#botonEnviar');
console.log(botonEnviar);
botonEnviar.addEventListener('click', function(miEvento) {
    console.log(miEvento);
    miEvento.preventDefault(); //prevenir que haga el accion por defecto, en caso tenga una acción por defecto
    console.log("Enviando datos del formulario");
});


//Obtener el contenido de un elemento

//guardamos la referencia del elemento con el que queremos trabajar
console.clear();
const nombre=document.querySelector('#nombre');

nombre.addEventListener('change', function() {
    console.log("Escribiendo...");
});

nombre.addEventListener('input', function(evento) {
    console.log(evento);
    console.log("Escribiendo...");
});
