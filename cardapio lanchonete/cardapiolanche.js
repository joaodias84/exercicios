// Nome da lanchonete
const nomeLanchonete = "Lanchonete Ki-Sabor";

// Solicita o nome do usuário
const nomeUsuario = prompt("Bem-vindo à " + nomeLanchonete + "\nInforme seu nome:");

// Mensagem de boas-vindas
console.log(`Olá, ${nomeUsuario}! Bem-vindo à ${nomeLanchonete}.`);

// Opções de lanches e seus preços
console.log("\nOpções de Lanches:");
console.log("1. Hambúrguer Simples - R$ 10.00");
console.log("2. Cheeseburger - R$ 12.00");
console.log("3. X-Burguer - R$ 15.00");
console.log("4. X-Tudo - R$ 18.00");
console.log("5. Batata Frita - R$ 7.00");
console.log("6. Refrigerante - R$ 4.00");

// Solicita a escolha do usuário
const escolha = parseInt(prompt("Escolha o número do lanche desejado:"));

// Calcula o preço do lanche escolhido
let nomeLanche = "";
let precoLanche = 0;

switch (escolha) {
    case 1:
        nomeLanche = "Hambúrguer Simples";
        precoLanche = 10.00;
        break;
    case 2:
        nomeLanche = "Cheeseburger";
        precoLanche = 12.00;
        break;
    case 3:
        nomeLanche = "X-Burguer";
        precoLanche = 15.00;
        break;
    case 4:
        nomeLanche = "X-Tudo";
        precoLanche = 18.00;
        break;
    case 5:
        nomeLanche = "Batata Frita";
        precoLanche = 7.00;
        break;
    case 6:
        nomeLanche = "Refrigerante";
        precoLanche = 4.00;
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
}

// Exibe o pedido e o total a pagar
if (nomeLanche !== "") {
    console.log(`Você escolheu: ${nomeLanche}`);
    console.log(`Total a pagar: R$ ${precoLanche.toFixed(2)}`);
}

console.log("Obrigado por escolher a " + nomeLanchonete + ". Volte sempre!");
