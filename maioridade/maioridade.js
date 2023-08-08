//// Solicitar a idade da pessoa
 const idade = parseInt(prompt("Informe sua idade:"));
 
// Verificar se a pessoa já chegou a maioridade
 if (idade >= 18 ) {
    console.log ("Você é maior de idade.");   
} else {
    const anosFaltantes = 18 - idade;   
    console.log(`Você ainda não é maior de idade. Faltam ${anosFaltantes} anos para a maioridade.`);
}
