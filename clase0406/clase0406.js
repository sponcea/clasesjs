//Implementamos una función que imprima el resultado de la expresión
function imprimir(numEjemplo, cadena) {
    console.log(numEjemplo+". el resultado es: "+cadena);
}

//= es para asignar un valor 
//== es para comparar dos valores
//=== es para comparar valores y tipos


//igualdad (simple): Solo compara los valores
//declaro la variable y le asigno una expresion cuyo resultado es un booleano; es decir, true o false
var resultado=(20==20);
imprimir(1, resultado);

//Igualdad (restrictivo): Compara valor y tipo de dato 
var resultado=(50==='50');
imprimir(2, resultado);

//Mayor que
resultado=(150>31);
imprimir(3, resultado);

//Menor que
resultado=(2<54);
imprimir(4,resultado);

//Diferente (diferente simple)
resultado=(20!="20"); //es falso por porque js convierte el "20" a 20
imprimir(5,resultado);

//Diferente (restrictivo)
resultado=(20!=="20");
imprimir(6,resultado);

//para elevar a una potencia
resultado=Math.pow(2,3);
imprimir(7,resultado);

//Operadores lógicos
//Son los siguientes:
// && es el operador lógico Y 
/*
1 y 1 = 1
1 y 0 = 0
0 y 1 = 0
0 y 0 = 0
*/
// || es el operador lógico O
/*
1 o 1 = 1
1 o 0 = 1
0 o 1 = 1
0 o 0 = 0
*/

// ! es el operador lógico NOT
/* 
!0 = 1
*/
//&&
resultado= ((20==="20") && (10>5));
imprimir(8, resultado);

//||
resultado= (20<10) || (10>5);
imprimir(9, resultado);

//! 
resultado=(20<10); //falso
imprimir(10, resultado);

negarResultado=!resultado;
imprimir(11, negarResultado);

//Operador condicional o ternario
/*
Sintaxis:

    var variable=(condicion)?valor_verdaro:valor_falso;

*/

//Ejemplo
var resultado=(20>10)? "Sí, 20 es mayor 10":"No, 20 no es mayor que 10";
imprimir(12,resultado);


var  convocadosSeleccionNacional = [
    {nombre:"Paolo", apellidoPaterno:"Guerrero", edad:36},
    {nombre:"Jefferson", apellidoPaterno:"Farfán", edad:35},
    {nombre:"Edinson", apellidoPaterno:"Flores", edad:25},
    {nombre:"André", apellidoPaterno:"Carrillo", edad:28},
    {nombre:"Gianluca", apellidoPaterno:"Lapadula", edad:34},
    {nombre:"Miguel", apellidoPaterno:"Trauco", edad:25},
];

var resultado=convocadosSeleccionNacional.some(function(convocado){
    return convocado.nombre=="Edison";
});
console.log("¿Está orejitas Flores convocado?");

console.log(resultado);

convocado2=resultado?"Sí, orejitas está convocado":"Nop, orejitas no está convocado";
imprimir(13, convocado2);

//La sentencia condicional

/* 
Sintaxis:
1)
    if (condicion) {
        //codigo en caso la condicion sea verdadera
    } else {
        //codigo en caso la condicion sea falsa
    }

2)
    if (condicion) {
        //código
    } else if(condicion2) {

    }

    if (condicion) {

    } else {
        if () {

        }
    }
*/
console.clear();
var dato=10;

if (dato>5) {
    console.log("Sí, "+dato+" es mayor que 5");
} else {
    console.log("No, "+dato+" no es mayor que 5");
}

console.clear();

var dato=20;

if  (dato<=10) {
    console.log("La primera condicion es verdades");
} else if (dato<=15) {
    console.log("La primera condición es falsa y la segunda es verdadera");
} else  {
    console.log("Todas las condiciones son falsas");
}

//Switch

/*
    Sintaxis:

    switch (variable) {
        case 10:
            //hacer algo;
        case 20:
            //hacer algo;
        default: 
            //hacer algo       

    }

*/

//ejemplo

console.clear();
var dato=1;

switch (dato) {
    case 10: //(dato==10)?
        console.log("El valor es 10");
        break;
    case 20: //(dato==20)?
        console.log("El valor es 20");
        break;
    default: //Ningún caso anterior es verdadero
        console.log("El valor de la variable no coincide en ningún caso");        
}

console.log("Salí del switch");

//Evento en JS

//onclick
console.clear();
function sumar(num1,num2) {
    var resultado=num1+num2;
    document.getElementById("impresion").innerHTML="Resultado de la suma:"+ resultado;
}

//onchange
function convertirMayusculas() {
    var nombre=document.getElementById("nombre");
    nombre.value=nombre.value.toUpperCase();
}

//onmouseover
function cambiarRojo() {
    document.getElementById("titulo").style.color="red";
}

function cambiarBlanco() {
    document.getElementById("titulo").style.color="white";
}
