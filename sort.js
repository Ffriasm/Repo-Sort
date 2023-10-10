const num1 = parseFloat(prompt("ingrese el numero 1: "));
const num2 = parseFloat(prompt("ingrese el numero 2: "));
const num3 = parseFloat(prompt("ingrese el numero 3: "));

function ordenarNumeros(num1, num2, num3) {
  if (num1 === num2 && num1 === num3) {
    return ("Los números son iguales");
  } else{
    let numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
        return a - b;
  });
  
  let mayor = numeros[2]
  let centro = numeros[1]
  let menor = numeros[0]

  return `
  Números de mayor a menor: ${mayor}, ${centro}, ${menor}<br>
  Números de menor a mayor: ${menor}, ${centro}, ${mayor}<br>
  Mensaje: Los números no son iguales
`;
}
}

const resultadoDOM = document.getElementById("resultado");
resultadoDOM.innerHTML = ordenarNumeros(num1, num2, num3);