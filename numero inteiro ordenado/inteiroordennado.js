let reiniciar = true;

while (reiniciar) {
    // Solicita os dois números inteiros diferentes
    const numero1 = parseInt(prompt("Informe o primeiro número inteiro:"));
    const numero2 = parseInt(prompt("Informe o segundo número inteiro:"));

    // Limpa a saída no console
    console.clear();

    // Verifica e escreve os números em ordem crescente
    if (numero1 < numero2) {
        console.log(`Os números em ordem crescente são: ${numero1}, ${numero2}`);
    } else {
        console.log(`Os números em ordem crescente são: ${numero2}, ${numero1}`);
    }

    // Pergunta ao usuário se deseja reiniciar
    const resposta = prompt("Deseja reiniciar? (s/n)").toLowerCase();
    reiniciar = resposta === "s";
}

console.log("Programa encerrado.");
