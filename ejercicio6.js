// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array,index1,index2){

    var temp = array[index1]
    array[index1]=array[index2];
    array[index2]=temp;

    return array
  }

  console.log(swap(fantasticFour,1,3))