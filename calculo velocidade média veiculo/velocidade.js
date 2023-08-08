// Solicita a distância percorrida em quilômetros
const distanciaPercorrida = parseFloat(prompt("Informe a distância percorrida em quilômetros:"));

// Solicita o tempo gasto em horas
const tempoGasto = parseFloat(prompt("Informe o tempo gasto em horas:"));

// Calcula a velocidade média
const velocidadeMedia = distanciaPercorrida / tempoGasto;

// Exibe a velocidade média
console.log(`A velocidade média do veículo é: ${velocidadeMedia.toFixed(2)} km/h`);
