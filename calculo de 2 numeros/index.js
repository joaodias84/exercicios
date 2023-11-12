function calculadora() {
    // Receber dois valores do usuário
    var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    var valor2 = parseFloat(prompt("Digite o segundo valor: "));

    // Receber o operador do usuário
    var operador = prompt("Digite o operador (+, -, *, /): ");

    // Realizar a operação e retornar o resultado
    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
                
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
                resto = valor1 % valor2;
                console.log("Resultado da divisão: " + resultado + ", Resto: " + resto);
                return;
            } else {
                console.log("Erro: Divisão por zero. Por favor, insira um divisor diferente de zero.");
                return;
            }
        default:
            console.log("Operador inválido. Por favor, escolha entre +, -, * ou /.");
            return;
    }

    console.log("Resultado da operação: " + resultado);
}

// Chamar a função da calculadora
calculadora();
