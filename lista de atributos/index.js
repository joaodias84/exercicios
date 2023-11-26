    // Objeto Material: Livro
let livro = {
    titulo: "Aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    numeroPaginas: 300,
    abrir: function() {
        console.log("Livro aberto.");
    },
    ler: function(pagina) {
        console.log(`Lendo a página ${pagina}...`);
    },
    fechar: function() {
        console.log("Livro fechado.");
    }
};

// Objeto Material: Bicicleta
let bicicleta = {
    marca: "Trek",
    cor: "Azul",
    velocidadeAtual: 0,
    pedalar: function(velocidade) {
        this.velocidadeAtual += velocidade;
        console.log(`Pedalando a ${this.velocidadeAtual} km/h.`);
    },
    frear: function() {
        console.log("Freando a bicicleta.");
    },
    pintar: function(novaCor) {
        this.cor = novaCor;
        console.log(`Bicicleta pintada de ${novaCor}.`);
    }
};

// Objeto Abstrato: Conta Bancária
let contaBancaria = {
    numeroConta: "123456",
    saldo: 1000,
    titular: "Alice",
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    },
    consultarSaldo: function() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
};

// Objeto Abstrato: Agenda
let agenda = {
    nome: "Agenda Pessoal",
    contatos: ["Amigo 1", "Familiar 1", "Colega 1"],
    dataUltimaAtualizacao: new Date(),
    adicionarContato: function(contato) {
        this.contatos.push(contato);
        console.log(`Contato ${contato} adicionado à agenda.`);
        this.atualizarData();
    },
    removerContato: function(contato) {
        const index = this.contatos.indexOf(contato);
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log(`Contato ${contato} removido da agenda.`);
            this.atualizarData();
        } else {
            console.log(`Contato ${contato} não encontrado na agenda.`);
        }
    },
    atualizarData: function() {
        this.dataUltimaAtualizacao = new Date();
        console.log("Data de atualização da agenda atualizada.");
    }
};

// Exemplos de uso
console.log("--- Livro ---");
livro.abrir();
livro.ler(1);
livro.fechar();

console.log("--- Bicicleta ---");
bicicleta.pedalar(20);
bicicleta.frear();
bicicleta.pintar("Vermelho");

console.log("--- Conta Bancária ---");
contaBancaria.depositar(200);
contaBancaria.sacar(150);
contaBancaria.consultarSaldo();

console.log("--- Agenda ---");
agenda.adicionarContato("Novo Amigo");
agenda.removerContato("Familiar 1");
