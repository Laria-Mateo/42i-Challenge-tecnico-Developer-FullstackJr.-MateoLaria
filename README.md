# 42i-Challenge-tecnico-Developer-FullstackJr.-MateoLaria
-El challege fue trabajado con JavaScript, en conjunto con HTML y estilos CSS.<br>
-En el mismo se realizaron 2 Ejercicios, Smallest Difference y Non-Constructible Change.<br> 
Los mismos fueron trabajados en 2 hojas distintas por medio de un metodo con el nombre del ejercicio.<br>
-Dentro de cada funcion esta comentado explicado lo que hace cada paso y para que se implemento de esa manera.<br>
-Para la realizacion de pruebas unitarias se utilizo la herramienta Jest.<br>

# Challege1 - Smallest Difference
## Resolucion
-Se implemento una funcion llamada smallestDifference, la cual recibe 2 arrays como argumentos.<br>
-Se realizo a traves de ciclos iterativos "forEach" que recorren ambas arrays recibidas con la finalidad de comparar campo por campo para obtener a traves de restas el valor positivo menor.<br>
-Esta Funcion tiene 2 posibles retornos validos, el primero se basa en encontrar el valor menor positivo de la diferencia entre los numeros de la array, y de segundo retorno si no encuentra diferencias positivas devuelve un string "No existen diferencias positivas".<br>
-Esta Funcion tiene 2 posibles retornos en caso de que se den errores en tiempo de ejecucion.<br>


# Challege2 - Non-Constructible Change
## Resolucion
-Se implemento una funcion llamada nonConstructibleChange, la cual recibe como argumento una array la cual representa valores de coins.<br>
-En primer lugar se ordena la lista de menor a mayor con la implementacion del metodo sort().<br>
-Esta funcion tiene 2 posibles retornos.<br>
El primero se da a traves de una validacion de que si la lista esta vacia y si el primero de la lista es distinto de 1, retorna 1, que representa el valor minimo de cambio que no se puede hacer.<br>
El segundo retorno se da a traves de realizar un ciclo iterativo "for" que recorre la lista de coins, guardando el valor minimo de cambio que no se puede hacer, al terminar el recorrido o finalizarse forzadamente retorna el valor de cambio + 1.<br>
-Esta Funcion tiene 2 posibles retornos en caso de que se den errores en tiempo de ejecucion.<br>


# Test Unitarios
-Los test unitarios son realizados a traves de la herramineta jest.<br>
-En ambos test se realizan distintas pruebas y se le asignan distintos valores a los argumentos de cada funcion, esperando el resultado deseado.<br>

# Para ejecutar Test Unitarios
## En una terminal Powershell ejecutar los siguientes comandos
    
    npm install
### Run

    npx jest

# Interfaz Web (Extra)
-Para esta interfaz web al ser sencilla utilize el maquetado de la pagina web en el archivo llamado index.html.<br>
-Se creo una funcion en cada hoja javascript de los ejercicios, Smallest Difference y Non-Constructible Change para ejecutar una prueba y asi obtener los resultados que se muestran en la web.<br>
-Para darle diseño utilize Boostrap y estilos CSS.<br>

## Para ejecutar Pagina Web 

## Forma 1
    Click derecho sobre index.html<br>
    Click izquierdo sobre Show in Browser<br>

## Forma 2
    Ir a la carpeta donde esta guardado el proyecto y abrir el archivo index.html con un navegador.

## Forma 3
    En un navegador abrir una pestaña en blanco, luego presionar las teclas ctrl + o, buscar el archivo index.html y abrirlo.



