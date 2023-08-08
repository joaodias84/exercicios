// Solicita a temperatura corporal
var temperatura = parseFloat(prompt("Informe a temperatura corporal em graus Celsius:"));

// Verifica se a pessoa está com febre
if (temperatura > 36.7) {
    console.log("Você está com febre.");
} else if (temperatura >= 36 && temperatura <= 36.7) {
    console.log("Sua temperatura está dentro da faixa normal.");
} else {
    console.log("Você não está com febre.");
}
