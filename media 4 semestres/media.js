do {
    // Solicita o nome do aluno
    const nomeAluno = prompt("Informe o nome do aluno:");

    // Inicializa a variável para armazenar as notas e a soma
    let notas = [];
    let soma = 0;

    // Lê as notas dos 4 bimestres
    for (let i = 1; i <= 4; i++) {
        const nota = parseFloat(prompt(`Informe a nota do ${i}º bimestre:`));
        notas.push(nota);
        soma += nota;
    }

    // Calcula a média aritmética
    const media = soma / 4;

    // Exibe a média aritmética do aluno
    console.log(`Média do aluno ${nomeAluno}: ${media.toFixed(2)}`);

    // Pergunta se o usuário deseja continuar
    const continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
} while (continuar === 's');

console.log("Programa encerrado.");
