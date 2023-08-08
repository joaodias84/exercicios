// Solicita o valor da compra
const valorCompra = parseFloat(prompt("Informe o valor da compra:"));

// Solicita o número de prestações desejadas
const numeroPrestacoes = parseInt(prompt("Informe o número de prestações desejadas:"));

// Calcula o valor das prestações
const valorPrestacao = valorCompra / numeroPrestacoes;

// Exibe o valor das prestações
console.log(`O valor de cada prestação é: R$${valorPrestacao.toFixed(2)}`);
