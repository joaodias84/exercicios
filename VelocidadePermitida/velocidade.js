// Solicita a velocidade do veículo
const velocidadeVeiculo = parseFloat(prompt("Informe a velocidade do veículo em km/h:"));

// Velocidade máxima permitida
const velocidadeMaxima = 110;

// Verifica se a velocidade foi excedida
if (velocidadeVeiculo > velocidadeMaxima) {
    console.log("Velocidade excedida! Você ultrapassou a velocidade máxima permitida Multa de R$:150,00reais.");
} else {
    console.log("Velocidade dentro dos limites permitidos.");
}
