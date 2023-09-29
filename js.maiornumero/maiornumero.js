// Solicita ao usuário que insira o primeiro número
var numero1 = parseFloat(prompt("Digite o primeiro número:"));

// Solicita ao usuário que insira o segundo número
var numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica qual número é o maior
if (numero1 > numero2) {
  alert("O primeiro número (" + numero1 + ") é maior que o segundo número (" + numero2 + ").");
} else if (numero2 > numero1) {
  alert("O segundo número (" + numero2 + ") é maior que o primeiro número (" + numero1 + ").");
} else {
  alert("Os dois números são iguais.");
}
