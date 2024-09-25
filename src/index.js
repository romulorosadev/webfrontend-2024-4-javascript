// Importando a biblioteca readline-sync
const readline = require('readline-sync');

console.log('===================================================')
console.log('Digite os seguintes dados, conforme forem solitados.')

// Capturando o numero da mesa
let numeroMesa = readline.questionInt('\nNUMERO DA MESA: ');

// Capturando o valor total da conta
let valorTotal = readline.questionFloat('\nVALOR TOTAL DA CONTA: ');

// Capturando o número de pessoas na mesa
let numeroPessoas = readline.questionInt('\nQUANTIDADE DE CLIENTES NA MESA: ');

// Capturando o método de pagamento
let metodoPagamento = readline.questionInt('\nMETODO DE PAGAMENTO: \n\n1) Pix \n2) Dinheiro \n3) Cartao\n');


//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

function validarMesa(numeroMesa) {
  while (numeroMesa < 1 || numeroMesa > 30) {
    console.log('\nNão temos esse número de mesa no restaurante.');
    numeroMesa = readline.questionInt('INFORME UM NUMERO DA MESA VALIDO: ');
  }
  return numeroMesa
}

function validarClientes(numeroMesa, numeroPessoas) {
  while (numeroMesa && numeroPessoas < 1) {
    console.log('\nA conta referente a uma mesa precisa ter no mínimo 1 cliente.');
    numeroPessoas = readline.questionInt('\nINFORME UMA QUANTIDADE DE PESSOAS VALIDA: ');
  }
  return numeroPessoas
}

function validarMetodoPagamento(numeroMesa, numeroPessoas, metodoPagamento) {
  if (numeroMesa && numeroPessoas) {
    while (metodoPagamento <= 0 || metodoPagamento >= 4) {
      console.log('\n>>> MÉTODO DE PAGAMENTO INVÁLIDO!')
      console.log('===================================')
      metodoPagamento = readline.questionInt('\nINFORME UM METODO DE PAGAMENTO VALIDO: \n\n1) Pix \n2) Dinheiro \n3) Cartao\n');
    }

    let metodoPagamentoValido;
    switch (metodoPagamento) {
      case 1:
        metodoPagamentoValido = 'Pix';
        break;
      case 2:
        metodoPagamentoValido = 'Dinheiro';
        break;
      default:
        metodoPagamentoValido = 'Cartão';
    }
    return metodoPagamentoValido
  }
}


// Exibindo os resultados
console.log('\nCONTA');
console.log('===================');
console.log('\nMESA: ' + validarMesa(numeroMesa));
console.log('\nCLIENTES: ' + validarClientes(numeroMesa, numeroPessoas));
console.log('\nMÉTODO DE PAGAMENTO: ' + validarMetodoPagamento(numeroMesa, numeroPessoas, metodoPagamento));
