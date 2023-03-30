//
function cortarOracion(cadena, largo) {
  let conversionArreglo = cadena.split(" ");
  let result = [];
  for (let i = 0; i < conversionArreglo.length; i++) {
    for (let j = i + 1; j < conversionArreglo.length; j++) {
      result.push(conversionArreglo.shift());
      if (result.join(" ").length <= largo) {
        console.log("primera oracion: ", result.join(" ")); // primera oracion:  La niña paseaba a su
      }
    }
  }
}

cortarOracion(
  "La niña paseaba a su perro. Vestía un traje azul y chupaba una paleta",
  25
);
