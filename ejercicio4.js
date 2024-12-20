// 1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

function findArrayIndex(array, text) {
  let index = 0;
  for (const texto of array) {
    if (texto == text) {
      return index;
    }
    index++;
  }
}
// 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

function removeItem(array, text) {
  index = findArrayIndex(array, text);
  array.splice(index, 1);
  return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(removeItem(mainCharacters, "Leia"));
