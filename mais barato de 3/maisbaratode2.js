// Solicita os preços dos produtos
const precoProduto1 = parseFloat(prompt("Informe o preço do primeiro produto:"));
const precoProduto2 = parseFloat(prompt("Informe o preço do segundo produto:"));
const precoProduto3 = parseFloat(prompt("Informe o preço do terceiro produto:"));

// Verifica qual é o produto mais barato
let produtoMaisBarato = "";

if (precoProduto1 <= precoProduto2 && precoProduto1 <= precoProduto3) {
    produtoMaisBarato = "Produto 1";
} else if (precoProduto2 <= precoProduto1 && precoProduto2 <= precoProduto3) {
    produtoMaisBarato = "Produto 2";
} else {
    produtoMaisBarato = "Produto 3";
}

console.log(`O produto mais barato é: ${produtoMaisBarato}`);
