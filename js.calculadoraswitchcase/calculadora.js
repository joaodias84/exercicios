function calculadoraSwitchCase(a, b, operacao) {
  var resultado;

  switch (operacao) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      resultado = a / b;
      break;
    default:
      return "Operação inválida. Por favor, insira um símbolo válido (+, -, *, ou /).";
  }

  return "Resultado: " + resultado;
}

var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var operacao = prompt("Digite o símbolo da operação desejada (+, -, *, ou /):");

var resultadoSwitchCase = calculadoraSwitchCase(num1, num2, operacao);

// Exibe o resultado na tela usando a função alert()
alert("O resultado do cálculo é: " + resultadoSwitchCase);

// Também podemos imprimir o resultado no console
console.log(resultadoSwitchCase);
