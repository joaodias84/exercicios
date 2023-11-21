const Banco = {
    conta: prompt("Digite o número da conta:"),
    saldo: parseFloat(prompt("Digite o saldo inicial:")),
    tipoDeConta: prompt("Digite o tipo de conta:"),
    agencia: prompt("Digite o número da agência:"),

    buscarSaldo: function() {
        return this.saldo;
    },

    deposito: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
        } else {
            return "O valor do depósito deve ser maior que zero.";
        }
    },

    saque: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
        } else if (valor <= 0) {
            return "O valor do saque deve ser maior que zero.";
        } else {
            return "Saldo insuficiente para realizar o saque.";
        }
    },

    numeroDaConta: function() {
        return this.conta;
    }
};

// Exibindo os resultados
console.log(`Saldo inicial: R$${Banco.saldo}`);
console.log(Banco.deposito(parseFloat(prompt("Digite o valor do depósito:"))));
console.log(Banco.saque(parseFloat(prompt("Digite o valor do saque:"))));
console.log(`Número da conta: ${Banco.numeroDaConta()}`);
