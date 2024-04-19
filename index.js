//TAREA 1 SEMANA 1 | CALCULADORA

var valor1, valor2, tipoOperacion, resultado, colores;//Declaramos todas las variables

colores = require("colors");

console.log("\n" + "*****CALCULADORA BASICA*****".bgYellow);//Mostramos el menu
console.log("Ingresa el primer valor:");
valor1 = 100;
console.log("Ingresa el segundo valor:");
valor2 = 100;
console.log("Ingresa el simbolo segun la operacion:");

tipoOperacion = "*";//Operacion a realizar 

function respuesta(tipoOperacion, valor){//Resultado final de la operacion
 if (tipoOperacion == "*"){
    console.log("Resultado de la multiplicacion: " + valor + "\n");
 } else if (tipoOperacion == "/"){
    console.log("Resultado de la division: " + valor + "\n");
 } else if (tipoOperacion == "+"){
    console.log("Resultado de la suma: " + valor + "\n");
 } else if (tipoOperacion == "-"){
    console.log("Resultado de la resta: " + valor + "\n");
 }

}

if (tipoOperacion == "*") {//Realizamos la operacion
 resultado = valor1 * valor2;
 respuesta(tipoOperacion, resultado);
} else if (tipoOperacion == "/"){
    resultado = valor1 / valor2;
 respuesta(tipoOperacion, resultado);
} else if (tipoOperacion == "+"){
    resultado = valor1 + valor2;
 respuesta(tipoOperacion, resultado);
} else if (tipoOperacion == "-"){
    resultado = valor1 - valor2;
 respuesta(tipoOperacion, resultado);
}