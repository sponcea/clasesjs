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