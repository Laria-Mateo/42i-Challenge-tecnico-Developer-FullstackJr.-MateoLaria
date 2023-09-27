/*
# Smallest Difference
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
*/
function smallestDifference(a, b) {
    
    //Se verifica que los parametros dados como argumentos sean una array.
    if(!Array.isArray(a)||!Array.isArray(b)) return "No es un Array"   
    
    //Se realiza una exception para capturar por medio del bloque try si hay un un error en tiempo de ejecución, la misma es tratada en el bloque catch.
    try {

        let valorActual;//Se define el valorActual el cual es solamente para saber cuanto vale la resta en ese momento.
        let valorMenor = -1;//Se define el valor menor y se inicia en -1 para que el positivo proximo quede guardado.

        //En estos forEach se recorren las listas recibidas como argumentos.
        a.forEach(i => {
            b.forEach(j => {

                //Se realizan las restas para encontrar el valor actual
                if (i > j) {
                    valorActual = i - j;
                }
                else {
                    valorActual = j - i;
                }
                if (valorActual < valorMenor || valorMenor < 0) {
                    //Es guardado el valor menor positivo.
                    valorMenor = valorActual;
                }

            });
        });
        if (valorMenor <= 0) {

            //Es devuelto que no existen diferencias positivas.
            //El return podria tomar valor -1 o null, para que no devuelva un string.
            return "No existen diferencias positivas"

        }
        else {

            //Es devuelto el valor menor.
            return valorMenor;
        }
    } catch (e) {
        return "ERROR"
    }
    
}
//Funcion que es utilizada para ejecutar una prueba de demostracion para interfaz Web
function ejecutarPruebaSmall() {
    var resultado = smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]);
    document.getElementById("resultadoSmall").textContent = resultado;
}

//Se utiliza para la implementacion de las pruebas unitarias.
module.exports = smallestDifference;


