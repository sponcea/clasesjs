//funcion typeof para conocer el tipo de dato de una variable
//un método y una propiedad son elementos que pertenecen a un objeto

//una función no pertece a un objeto

var clienteDNI="58473656";
console.log("El tipo de dato de la variable clienteDNI es: "+typeof(clienteDNI));

var dias=['lunes','martes'];
console.log("El tipo de dato de la variable clienteDNI es: "+typeof(dias));

var vacio;
console.log("El tipo de dato de la variable clienteDNI es: "+typeof(vacio));

var meses= null;
console.log("El tipo de dato de la variable clienteDNI es: "+typeof(meses));

//método some

var  convocadosSeleccionNacional = [
    {nombre:"Paolo", apellidoPaterno:"Guerrero", edad:36},
    {nombre:"Jefferson", apellidoPaterno:"Farfán", edad:35},
    {nombre:"Edison", apellidoPaterno:"Flores", edad:25},
    {nombre:"André", apellidoPaterno:"Carrillo", edad:28},
    {nombre:"Gianluca", apellidoPaterno:"Lapadula", edad:34},
    {nombre:"Miguel", apellidoPaterno:"Trauco", edad:25},
];

var resultado=convocadosSeleccionNacional.some(function(convocado){
    return convocado.nombre="Edison";
});
console.log("¿Está orejitas Flores convocado?");
if (resultado) {
    console.log("Sí está convocado!!! :)");
} else {
    console.log("No, no está convocado :(");
}

//Filter
var resultado2= convocadosSeleccionNacional.filter(function(convocado) {
    return convocado.edad<30;
});

console.table(resultado2);

///////////////FUNCIONES///////////////

console.clear();

const bloqueImpresion=document.getElementById("bloque");

//implemento lo que quiero que la función haga

//En este caso la función muestra el resultado en consola y dentro del html en el div con id="bloque"
function sumar(num1, num2) {
    console.log(num1+num2);
    bloqueImpresion.innerHTML=num1+num2;
}

//En este caso la función retorna el resultado para ser utilizado fuera de la función
function restar(num1, num2) {
    var resultadResta=num2-num1;
    return resultadResta;

}

//invoco a la función
//En este caso num1=1, num2=2
sumar(1,2);

//En este caso num1=34, num2=10
sumar(34,10);

//En este caso num1=15, num2=30

//Almaceno el resultado de la función restar en la variable resultado y lo imprimo en consola
var resultado=restar(30,15);
console.log("El resultado de la resta es: ", resultado);

var editorImagenes = {
    cargarImagen: function(id) {
        console.log("Cargando imagen con id: "+id);
    },
    borrarImagen: function(id) {
        //console.log("Borarndo imagen con id: "+id);
        console.log(`Borarndo imagen con id: ${id}`);
    }
};

editorImagenes.cargarImagen(150);