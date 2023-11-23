// Simulação de um "banco de dados"
const bancoDeDadosSimulado = {
  conectar: function () {
    return new Promise((resolve, reject) => {
      // Simulando um tempo de espera para a conexão 
      setTimeout(() => {
        const conexaoBemSucedida = Math.random() < 0.8; 

        if (conexaoBemSucedida) {
          resolve('Conexão bem-sucedida com o banco de dados');
        } else {
          reject('Erro ao conectar ao banco de dados');
        }
      }, 1000); 
    });
  },
};

// Tenta conectar
bancoDeDadosSimulado
  .conectar()
  .then((mensagem) => {
    console.log(mensagem);
    
  })
  .catch((erro) => {
    console.error('Erro:', erro);
  });
