// Importando a biblioteca readline-sync
const readline = require('readline-sync');

console.log('===================================================')
console.log('Digite os seguintes dados, conforme forem solitados.')

// Capturando o numero da mesa
let numeroMesa = readline.questionInt('\nNUMERO DA MESA: ');

// Capturando o valor total da conta
let valorTotal = (readline.questionFloat('\nVALOR TOTAL DA CONTA: ')).toFixed(2);

// Capturando o número de pessoas na mesa
let numeroPessoas = readline.questionInt('\nQUANTIDADE DE CLIENTES NA MESA: ');

// Capturando o método de pagamento
let metodoPagamento = readline.questionInt('\nMETODO DE PAGAMENTO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');

let mesaValidada = 0;
let clientesValidados = 0;
let metodoPagamentoValidado = '';
let metodoPagamentoDescontoValidado = 0;
let calculoMesaValidado = 0;
let calculoIndividualValidado = 0;

//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
function validarMesa(numeroMesa) {
  mesaValidada = numeroMesa
  while (numeroMesa < 1 || numeroMesa > 30) {
    console.log('\nNão temos esse número de mesa no restaurante.');
    numeroMesa = readline.questionInt('INFORME UM NUMERO DA MESA VALIDO: ');
  }
  return mesaValidada
}

function validarClientes(mesaValidada, numeroPessoas) {
  clientesValidados = numeroPessoas;
  while (mesaValidada && numeroPessoas < 1) {
    console.log('\nA conta referente a uma mesa precisa ter no mínimo 1 cliente.');
    numeroPessoas = readline.questionInt('\nINFORME UMA QUANTIDADE DE PESSOAS VALIDA: ');
  }
  return clientesValidados
}

function validarMetodoPagamento(mesaValidada, metodoPagamento) {
  if (mesaValidada && metodoPagamento) {
    while (metodoPagamento <= 0 || metodoPagamento >= 4) {
      console.log('\n>>> MÉTODO DE PAGAMENTO INVÁLIDO!')
      console.log('===================================')
      metodoPagamento = readline.questionInt('\nINFORME UM METODO DE PAGAMENTO VALIDO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');
    }

    if (metodoPagamento == 1) {
      metodoPagamentoValidado = 'Pix'
    }
    if (metodoPagamento == 2) {
      metodoPagamentoValidado = 'Dinheiro'
    }
    if (metodoPagamento == 3) {
      metodoPagamentoValidado = 'Cartão'
    }
    return metodoPagamentoValidado
  }
}

function calcularValorFinalMesa(mesaValidada, metodoPagamentoValidado, valorTotal) {
  if (mesaValidada && metodoPagamentoValidado && valorTotal) {
    const descontoDinheiro10Porcento = 0.9;
    const descontoPix10Porcento = 0.9;
    metodoPagamentoDescontoValidado = 'Não Possui Desconto no Valor Total';
    calculoMesaValidado = valorTotal;

    if (metodoPagamentoValidado === 'Pix') {
      calculoMesaValidado = (valorTotal * descontoPix10Porcento).toFixed(2);
      metodoPagamentoDescontoValidado = '10% no Valor Total';
    }
    if (metodoPagamentoValidado === 'Dinheiro') {
      calculoMesaValidado = (valorTotal * descontoDinheiro10Porcento).toFixed(2);
      metodoPagamentoDescontoValidado = '10% no Valor Total';
    }
    return calculoMesaValidado
  }
}

function calcularValorFinalIndividual(mesaValidada, clientesValidados, metodoPagamentoValidado, calculoMesaValidado) {
  if (mesaValidada && clientesValidados > 1 && metodoPagamentoValidado && calculoMesaValidado) {
    calculoIndividualValidado = (calculoMesaValidado / clientesValidados).toFixed(2);
    return calculoIndividualValidado
  }
}


// Exibindo os resultados
validarMesa(numeroMesa);
validarClientes(mesaValidada, numeroPessoas);
validarMetodoPagamento(mesaValidada, metodoPagamento);
calcularValorFinalMesa(mesaValidada, metodoPagamentoValidado, valorTotal);
calcularValorFinalIndividual(mesaValidada, clientesValidados, metodoPagamentoValidado, calculoMesaValidado);


console.log('\nCONTA');
console.log('===================');
console.log('MESA: ' + mesaValidada);
console.log('CLIENTES: ' + clientesValidados);
console.log('VALOR MESA: R$ ' + valorTotal);
console.log('MÉTODO DE PAGAMENTO: ' + metodoPagamentoValidado);
console.log('DESCONTO: ' + metodoPagamentoDescontoValidado);
if (clientesValidados > 1) {
  console.log('VALOR FINAL MESA: R$ ' + calculoMesaValidado);
  console.log('VALOR FINAL POR CLIENTE: R$ ' + calculoIndividualValidado);
} else {
  console.log('VALOR FINAL MESA/CLIENTE: R$ ' + calculoMesaValidado);
}
