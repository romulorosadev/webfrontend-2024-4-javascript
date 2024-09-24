// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o numero da mesa
let numeroMesa = readline.questionInt('Digite o número da mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

function validarMesa(numeroMesa) {
  while (numeroMesa < 1 || numeroMesa > 30) {
    console.log("Não temos esse número de mesa no restaurante.")
    numeroMesa = readline.questionInt('Digite o número da mesa: ');
  }
  return numeroMesa
}




// Exibindo os resultados
console.log(validarMesa(numeroMesa));
