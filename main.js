//Vamos a crear función que haga la operación
const calcularAreaCuadrado = () => {
  //Vamos a recuperar el valor del input
  let valorCuadrado = document.getElementById("valor1").value;
  //Verificamos el valor recuperado
  console.log(valorCuadrado);
  //Hacemos la operación matemática para determinar el área del valor del cuadrado
  let areaCuadrado = valorCuadrado * valorCuadrado;
  //Imprimimos en pantalla el resultado de la operación
  document.getElementById("resultado").innerHTML = `
  <h5>El resultado del área del cuadrado es: ${areaCuadrado}</h5>
  `;
};

//Función para calcular el área de un rectángulo
const calcularAreaRectangulo = () => {
  //Vamos a recuperar el valor del input1
  const valorRectangulo1 = document.getElementById("valorRectangulo1").value;
  console.log(valorRectangulo1);
  //Vamos a recuperar el valor del input2
  const valorRectangulo2 = document.getElementById("valorRectangulo2").value;
  console.log(valorRectangulo2);
  //Vamos a sacar la operación matemática para calcular el área del rectángulo
  const areaRectangulo = valorRectangulo1 * valorRectangulo2;
  console.log(areaRectangulo);
  //Necesito llevar el resultado al HTML
  document.getElementById("resultadoRectangulo").innerHTML = `
  <h5>El resultado del área del rectángulo es: ${areaRectangulo}</h5>
  `;
};
