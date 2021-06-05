//esperar eventos desde el mismo JS

//window.addEventlistener(el evento que se espera ocurra, la accion que quiero ejecutar);

function imprimirEnConsola() {
    console.log("La página cargó correctamente");
}

//El load carga toda la página: html, css, js, etc...
//En la acción puedo colocar una funcion o el nombre de una funcion e implementarla fuera del método
window.addEventListener('load', imprimirEnConsola);

window.addEventListener('scroll', function() {
    console.log('scrolling...');
});

//DOMContentLoaded: solo carga HTML
window.addEventListener('DOMContentLoaded', function() {
    console.log("No, yo me ejecuto primero");
});
window.addEventListener('DOMContentLoaded', function() {
    console.log("yo me ejecuto primero");
});

//trabajamos con el boton del formulario

//Busco el elemento cuya clase es '.boton', si quisiera buscar por id con querySelector, entonces buscaría '#boton'
console.clear();
const botonEnviar=document.querySelector('#botonEnviar');
console.log(botonEnviar );
botonEnviar.addEventListener('click', function(miEvento) {
    console.log(miEvento);
    miEvento.preventDefault(); //prevenir que haga el trabajo por defecto
    console.log("Enviando datos del formulario");
});