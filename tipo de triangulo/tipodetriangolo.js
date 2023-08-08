// Solicita as medidas dos lados do triângulo
const lado1 = parseFloat(prompt("Informe a medida do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Informe a medida do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Informe a medida do terceiro lado do triângulo:"));

// Verifica o tipo de triângulo
let tipoTriangulo = "";

if (lado1 === lado2 && lado2 === lado3) {
    tipoTriangulo = "Equilátero";
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipoTriangulo = "Isósceles";
} else {
    tipoTriangulo = "Escaleno";
}

// Limpa a saída no console
console.clear();

// Exibe o resultado
console.log(`O triângulo é do tipo: ${tipoTriangulo}`);
