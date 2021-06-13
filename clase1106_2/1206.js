//Guardamos las imágenes en un arreglo

const imagenes = [
    'img/paisaje1.jpg',
    'img/paisaje2.jpg',
    'img/paisaje3.jpg',
    'img/paisaje4.jpg',
    'img/paisaje5.jpg'
];

//Funciones
function cargarImagen(posicionActual) {
    imagen.style.backgroundImage="url("+imagenes[posicionActual]+")";
}
function retrocederFoto() {
    console.log("retrocediendo en el slider");
    //Validamos que si la posicionActual es 0 entonces que vuelva a empezar
    if (posicionActual<=0) {
        posicionActual=imagenes.length-1; 
    } else {
        posicionActual--;
    }
    cargarImagen(posicionActual);
}

function pasarFoto() {
    //Si la posicion es mayor que el máximo numero de imagenes, entonces que vuelva a empezar
    console.log("pasando foto...");
    console.log("la posicion actual es: "+posicionActual);
    console.log("El tamaño del arreglo de imágenes es: "+imagenes.length);
    if (posicionActual>=imagenes.length-1) {
        posicionActual=0;
    } else {
        posicionActual++;
    }
    cargarImagen(posicionActual);
}

function playIntervalo() {
    intervalo=setInterval(pasarFoto, INTERVALO);
    //Desactivamos los botones de adelante y atrás
    btnPlay.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
}

function stopIntervalo() {
    clearInterval(intervalo);
    btnPlay.removeAttribute('disabled');
    btnStop.setAttribute('disabled',true);
}

//Nos ayudara cuando implementemos los botones de play y stop
const INTERVALO=3000;
var intervalo;

//Definir la posicion inicial del arreglo de imagenes

var posicionActual=0;
var btnAtras=document.querySelector('#atras');
var btnAdelante=document.querySelector('#adelante');
var imagen=document.querySelector('#imagen');
var btnPlay=document.querySelector('#play');
var btnStop=document.querySelector('#stop');

//Estamos atentos a los eventos click de los botones:
btnAtras.addEventListener('click', retrocederFoto);
btnAdelante.addEventListener('click', pasarFoto);
btnPlay.addEventListener('click',playIntervalo);
btnStop.addEventListener('click',stopIntervalo);

cargarImagen(posicionActual);