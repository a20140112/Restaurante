alert("Bienvenidos al restaurante. Su cuenta es...")
//Ingresar Datos
var entrada = parseInt(prompt("Ingrese el costo de la entrada"));
var segundo = parseInt(prompt("Ingrese el costo del segundo"));
var postre = parseInt(prompt("Ingrese el costo del postre"));



//Procesar Datos
var total = entrada + segundo + postre
var totalconIGV = total + (total*0.18)

alert("preseiona la tecla F12 para motrar los resultados");
//Mostrar datos
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es es: " + segundo);
console.log("El costo del postre es: " + postre);
console.log("El costo del total es: " + total);
console.log("El costo del total con IGV es: " + totalconIGV);