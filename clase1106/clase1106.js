//Sentencias iterativas

//for

var datos=[20,30,40];

//let te permite declarar una variable local, lo que significa que si lo declaro dentro del for, cuando salga, ya no se va a poder hacer referencia a su valor
document.write("<br>Imprimimos usando for<br>");
console.table(datos);
for(let index=0; index<datos.length;index++) {
    document.write("el valor de datos["+index+"] es: "+datos[index]+"<br>");
}

//for ... of 
//Recorre los elemento del arreglo y los imprime
document.write("<br>Imprimimos usando for...of<br>");
for (let elemento of datos) {
    document.write(elemento+"<br>");
}

//fon ... in

const IGV=0.19;

var producto = {
    codigo:'A2454F',
    nombre:'Televisor',
    precio: 2499.99,
    colores: ['negro','plata'],
    calcularIgv: function() {
        return this.precio*IGV;
    }
}

//Escribe el valor de las propiedades del objeto
document.write("<br>Imprimimos usando for...in<br>");
for (let propiedad in producto) {

    //imprimo el nombre de la propiedad pero no el valor
    //document.write(propiedad+"<br>") 
    if (producto.hasOwnProperty(propiedad)) { //el el objeto producto tiene una propiedad con el nombre indicado?
        let elemento=producto[propiedad];
        document.write(elemento+"<br>");
    } 

}

//while
var index=0;

//Escribe los elementos del arreglo
document.write("<br>Imprimimos usando while<br>");
while (index <datos.length) { //Mientras lo que esté entre paréntesis sea true
    //Ejecuta este codigo
    document.write("el valor de datos["+index+"] es: "+datos[index]+"<br>");
    index=index+1;
} //cuando la condicion dentro del paréntesis sea falsa entonces saldrá de la condicional
//Continua por acá

//do ... while
//El codigo se ejecutará por lo menos una vez porque la validación se hace al final del bucle

index=0;

//Escribir los elementos del arreglo
document.write("<br>Imprimimos usando do ... while<br>");
do {
    document.write("el valor de datos["+index+"] es: "+datos[index]+"<br>");
    index=index+1; //index++;
} while (index<datos.length); //cuando sea falso ya no volverá al do

//Trabajamos con continue y break

document.write("<br>Imprimimos usando while y continue<br>");

index=0;

while (index<datos.length) {
    if(datos[index]==20) {
        //continue; //entrando en un bucle infinito pues nunca llega a incrementar la variable index
        break; //termina la estructura iterativa, no solo una vuelta, todas las restantes            
    }
    document.write(datos[index]+ "<br>");
    index++;
}//el break hace que el codígo continue desde la linea 86 en adelante
document.write("El valor del indice es: "+index);
document.write("hemos salido del while a causa de un break");

