/*
# Non-Constructible Change
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money)
 that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).
*/

function nonConstructibleChange(coins) {

    //Se realiza una exception para capturar por medio del bloque try si hay un un error en tiempo de ejecución, la misma es tratada en el bloque catch.
    try {
        //Se verifica que la array tenga numeros
        if (!coins.every(elemento => typeof elemento === 'number'))
            return "ERROR"
        //Se rodena la lista de menor a mayor
        coins.sort((a, b) => a - b);

        //Variable valorCambio representa el ultimo valor que se puede formar
        let valorCambio = 0;

        //Se comprueba que la array tenga un elemento numerico dentro y que si en la primera posicion hay un elemento que valga 1 
        if (coins.length === 0 & coins[0] != 1) {

            //Retorna 1 porque es el valor minimo de coins que no se puede formar
            return 1;
        }

        //Con un siclo interativo for se recorre la lista de coins y se determina el valor de cambio menor que no se puede formar, el mismo es retornado.
        for (let i = 0; i < coins.length; i++) {

            if (coins[i] > valorCambio + 1) {
                break;
            }
            valorCambio += coins[i];

        }
        return valorCambio + 1;
    } catch (e) {
        return "ERROR"
    }
}
//Funcion que es utilizada para ejecutar una prueba de demostracion para interfaz Web
function ejecutarPruebaNon() {
    var resultado = nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
    document.getElementById("resultadoNon").textContent = resultado;
}

//Se utiliza para la implementacion de las pruebas unitarias.
module.exports = nonConstructibleChange;
