//Declaración de variables

var $numero=5;
var _numero=10;
var numero=20;

//Notación camel case para las variables
//las cadenas de caracteres pueden ir entre comillas simples 'ejemplo' o comillas dobles "ejemplo"
var apellidoPaterno='Guerrero'; 
var apellidoMaterno="Flores"; 

//formas de impresión

//En la consola del navegador
console.log($numero);
console.log(_numero);
console.log(numero);
console.log(apellidoPaterno);

console.log("antes de cambiar el valor de la variable apellidoMaterno");
console.log(apellidoMaterno);


console.log("después de cambiar el valor de la variable apellidoMaterno");
apellidoMaterno=5.3;
console.log(apellidoMaterno);


var resultado=$numero+_numero;

var cadenaTexto="Bienvenidos a su primer día de clases, para ingresar hacer clic en el botón \"videoconferencia\"";
console.log(cadenaTexto);
//como un popup
//window.alert(resultado);

//dentro de un elemento del html
document.getElementById('bloque').innerHTML="el resultado de la suma es: "+resultado;
//document.getElementById('bloque').append("el resultado de la suma es: "+resultado);

//Podemos representar números muy grandes y números muy pequeños
var numeroGrande=30e34;
var numeroPequeno=10.6e-15;

console.log(numeroGrande);
console.log(numeroPequeno);

//limpiar la consola
console.clear();

//podemos obtener la cantidad de caracteres de una cadena de caracteres con la propiedad length
console.log("La cantidad de caracteres de la variable apellidoPaterno es:"+apellidoPaterno.length);

//revisamos los booleanos: true y false
console.clear();
var resultado= (1==2);

//ARREGLOS

//Formas de declarar arreglos
//los índices de los arreglos inician en 0

//Tenemos 2 formas de declarar los arreglos
var numeros=[1,2,3,4,5,6];
var dias= new Array('lunes','martes','miércoles','jueves','viernes');

//podemos imprimir solo un elemento, recordar que los índices de los elementos del arreglo inician en 0
console.log(dias[2]);

//mostrar la cantidad de elementos de un arreglo
console.log("cant dias: "+dias.length);

//recorrer un arreglo
//Para recorrer el arreglo utilizamos un iterador, en este caso la variable dia
dias.forEach(function(dia) {
    console.log("hoy día es: "+dia);
});

//agregar un valor al final del arreglo (modifica el arreglo)
//Notar que los arreglos pueden almacenar más de un tipo de dato
//dias.push(1,2,3,"4",5,"seis",true,false);

//agregar un valor al inicio
//dias.unshift("bienvenido");

//Para visualizar mejor el contenido de los arreglos en la consola, se puede utilizar el método table
console.table(dias);

//quitamos elemento del inicio del arreglo (solo un elemento), utilizamos el método shift para quitar del inicio y utilzamos el método pop para quitar del final
dias.shift();
console.log("después de quitar");
console.table(dias);
dias.pop();

//otra forma de agregar un valor en un arreglo, en este caso el arreglo original no es modificado
//En su lugar se crea un nuevo arreglo, en este caso se llama nuevoArreglo
//Agrega al final de nuevo arreglo los elementos 'sábado' y 'domingo'
var nuevoArreglo=[...dias,'sábado','domingo'];
console.table(nuevoArreglo);
//agrega al inicio
var nuevoArreglo=['sábado','domingo',...dias];

//buscar si un elemento se encuentra dentro del arreglo
//Busca la cadena de caracteres 'miércoles' (notar que la e tiene tilde)
var resultado=dias.includes('miércoles');
console.log("¿Está el dia miércoles incluido en el arreglo? "+resultado);

//OBJETOS EN JAVASCRIPT
var persona = {
    colorCabello: "negro",
    estatura: 1.80,
    estaturaUnidadMedida: "metros",
    estadoCivil:"Soltero",
    nombre:"Carlos",
    edad:25,
    hacerCalculosMatematicos: function() {
        console.log("Haciendo cálculos matemáticos");
    },
    manejarAuto: function() {
        console.log("Manejando auto");
    }

}; 

console.log(persona.edad);
console.table(persona.manejarAuto());

// destructuring
//del objeto persona, requiero obtener la edad y el nombre

var {edad, nombre}=persona;

console.log(edad);
console.log(nombre);

//juntamos objetos;
var cliente ={
    nombre:"Sergio",
    apellidoPaterno: "Ponce",
    telefono:"12345678",
    email:"sponcea@certus.edu.pe",
    redesSociales: ['facebook','twitter','instagram','linkedin'],
    edad:33
};

var clientePreferencias ={
    tipoPago:'Visa',
    modalidadEntrega: 'Delivery',
    tipoComunicacion:'email'
};

//Podemos juntar los objetos en un nuevo objeto
var clienteFinal = {...cliente,...clientePreferencias};

//imprimimos de manera ordenada el contenido del objeto clienteFinal
console.table(clienteFinal);

//Tambien podemos modificar durante la ejecución del script el valor de una propieddad del objeto
clienteFinal.nombre="Daniel";

console.table(clienteFinal);

//otro objeto
const IGV=0.18;

var producto = {
    codigo: "A348FG",
    nombre:"Laptop",
    precio: 3500,
    moneda:"S/.",
    colores: ['plateado','negro','blanco'],
    marca: "Lenovo",
    calcularIgv: function() {
        return this.precio*IGV;
    }
};

//Escribir en pantalla las propiedades y métodos del objeto producto

//referencio el bloque en donde vamos a imprimir
//declaro una constante porque el elemento html no debería variar
const bloqueImpresion=document.getElementById("bloque");
console.log(bloqueImpresion);

//imprimimos
bloqueImpresion.innerHTML="Código: "+producto.codigo+"<br><span>Nombre del producto:</span> "+producto.nombre+"<br><span>Precio:</span> "+producto.moneda+" "+producto.precio+"<br><span>Colores disponibles:</span> "+producto.colores[0]+", "+producto.colores[1]+", "+producto.colores[2]+"<br><span>Marca:</span> "+producto.marca+"<br><span>IGV: </span>"+ producto.calcularIgv();




