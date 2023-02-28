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
