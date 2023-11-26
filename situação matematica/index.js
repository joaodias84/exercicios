try {
    // insira um número
    let numero = parseFloat(prompt("Digite um número:"));
  
    // Verificar bem-sucedida
    if (isNaN(numero)) {
      throw "inserira um número válido.";
    }
  
    // número é negativo 
    if (numero < 0) {
      throw "Não é possível calcular a raiz quadrada de um número negativo.";
    }
  
    // raiz quadrada
    const raizQuadrada = Math.sqrt(numero);
  
    // Exibir o resultado
    console.log(`A raiz quadrada de ${numero} é: ${raizQuadrada}`);
  } catch (erro) {
    // exibir a mensagem de erro
    console.error(`Erro: ${erro}`);
  } finally {
    // Executar o código no bloco finally, 
    console.log("O código no bloco finally sempre é executado.");
  }
  