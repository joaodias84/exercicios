// Inicializa a variável para armazenar a soma
let soma = 0;

// Repete a tarefa enquanto o número lido for maior que 1
let numero;
do {
    numero = parseInt(prompt("Informe um número inteiro (0 para parar):"));
    soma += numero;
} while (numero > 1);

// Escreve o resultado da soma
console.log(`A soma dos números lidos é: ${soma}`);