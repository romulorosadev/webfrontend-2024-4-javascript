// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o numero da mesa
let numeroMesa = readline.questionInt('Digite o número da mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o número de pessoas na mesa
let numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

function validarMesa(numeroMesa) {
  while (numeroMesa < 1 || numeroMesa > 30) {
    console.log("\nNão temos esse número de mesa no restaurante.");
    numeroMesa = readline.questionInt('Digite o número da mesa: ');
  }
  return numeroMesa
}

function validarClientes(numeroMesa, numeroPessoas) {
  while (numeroMesa && numeroPessoas < 1) {
    console.log("\nA conta referente a uma mesa precisa ter no mínimo 1 cliente.");
    numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');
  }
  return numeroPessoas
}






// Exibindo os resultados
console.log("CONTA");
console.log("===================");
console.log("Número da Mesa: " + validarMesa(numeroMesa));
console.log("Número de Pessoas: " + validarClientes(numeroMesa, numeroPessoas));
