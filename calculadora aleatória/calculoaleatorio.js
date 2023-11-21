
function saudacao() {
    console.log("Calculadora Aleatória.");
}

function somar(a, b) {
    return a + b;
}

const multiplicar = (a, b) => a * b;

saudacao();

console.log("Digite o primeiro número:");
const numero1 = parseFloat(prompt());

console.log("Digite o segundo número:");
const numero2 = parseFloat(prompt());

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);

console.log(`A soma de ${numero1} e ${numero2} é: ${resultadoSoma}`);
console.log(`A multiplicação de ${numero1} e ${numero2} é: ${resultadoMultiplicacao}`);
