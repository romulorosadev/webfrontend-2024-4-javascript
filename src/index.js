// Importando a biblioteca readline-sync
const readline = require('readline-sync');

console.log('===================================================')
console.log('Digite os seguintes dados, conforme forem solitados.')

// Capturando o numero da mesa
let numeroMesa;

// Capturando o número de pessoas na mesa
let numeroPessoas;

// Capturando o valor total da conta
let valorTotal;

// Capturando o método de pagamento
let metodoPagamento;

let mesaValida;
let clientesValidos;
let valorTotalValido;
let metodoPagamentoValido;
let metodoPagamentoDescontoValido;
let calculoMesaValido;
let calculoIndividualValido;

//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
function validarMesa() {
  numeroMesa = readline.questionInt('\nNUMERO DA MESA: ');
  while (numeroMesa < 1 || numeroMesa > 30) {
    console.log('\n>> ERRO: Não temos esse número de mesa no restaurante.');
    numeroMesa = readline.questionInt('\n-> INFORME UM NUMERO DA MESA VALIDO: ');
  }
  mesaValida = numeroMesa
  return mesaValida
}

function validarQuantidadePessoas(numeroPessoas) {
  numeroPessoas = readline.questionInt('\nQUANTIDADE PESSOAS NA MESA: ');
  while (numeroPessoas < 1) {
    console.log('\n>> ERRO: A conta referente a uma mesa precisa ter no mínimo 1 cliente.');
    numeroPessoas = readline.questionInt('\n-> INFORME UMA QUANTIDADE DE PESSOAS VALIDA: ');
  }
  clientesValidos = numeroPessoas;
  return clientesValidos
}

function validarValorTotal() {
  valorTotal = (readline.questionFloat('\nVALOR TOTAL: R$ ')).toFixed(2);
  while (valorTotal < 0.00) {
    console.log('\n>> ERRO: Uma conta não pode ter valor menor que R$ 0,00.');
    valorTotal = (readline.questionFloat('\n-> INFORME UM VALOR TOTAL VALIDO: ')).toFixed(2);
  }
  valorTotalValido = valorTotal;
  return valorTotalValido
}

function validarMetodoPagamento() {
  if (valorTotalValido <= 0.00) {
    metodoPagamento = "Indisponível"
  } else {
    metodoPagamento = readline.questionInt('\nMETODO DE PAGAMENTO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');

    while (metodoPagamento < 1 || metodoPagamento > 3) {
      console.log('\n>>> MÉTODO DE PAGAMENTO INVÁLIDO!')
      console.log('===================================')
      metodoPagamento = readline.questionInt('\nINFORME UM METODO DE PAGAMENTO VALIDO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');
    }

    if (metodoPagamento == 1) {
      metodoPagamento = 'Pix'
    }
    if (metodoPagamento == 2) {
      metodoPagamento = 'Dinheiro'
    }
    if (metodoPagamento == 3) {
      metodoPagamento = 'Cartão'
    }
  }
  metodoPagamentoValido = metodoPagamento;
  return metodoPagamentoValido
}


function calcularValorFinalMesa(numeroMesa, metodoPagamento, valorTotal) {
  if (numeroMesa && metodoPagamento && valorTotal) {
    const descontoDinheiro10Porcento = 0.9;
    const descontoPix10Porcento = 0.9;
    metodoPagamentoDescontoValidado = 'Não Possui Desconto no Valor Total';
    let calculoMesaValidado = valorTotal;

    if (metodoPagamento === 'Pix') {
      calculoMesaValidado = (valorTotal * descontoPix10Porcento).toFixed(2);
      metodoPagamentoDescontoValidado = '10% no Valor Total';
    }
    if (metodoPagamento === 'Dinheiro') {
      calculoMesaValidado = (valorTotal * descontoDinheiro10Porcento).toFixed(2);
      metodoPagamentoDescontoValidado = '10% no Valor Total';
    }
    return calculoMesaValidado
  }
}

function calcularValorFinalIndividual(numeroMesa, numeroPessoas, metodoPagamento, calculoMesaValidado) {
  if (numeroMesa && numeroPessoas > 1 && metodoPagamento && calculoMesaValidado) {
    let calculoIndividualValidado = (calculoMesaValidado / numeroPessoas).toFixed(2);
    return calculoIndividualValidado
  }
}


// Exibindo os resultados
validarMesa()
validarQuantidadePessoas()
validarValorTotal()
validarMetodoPagamento()

console.log('\nDELÍCIAS EXPRESS | CONTA');
console.log('==========================');
console.log('MESA: ' + mesaValida);
console.log('CLIENTES: ' + clientesValidos);
console.log('VALOR TOTAL: R$ ' + valorTotalValido);
console.log('MÉTODO DE PAGAMENTO: ' + metodoPagamentoValido);

// console.log('DESCONTO: ' + metodoPagamentoDescontoValidado);
// if (clientesValidados > 1) {
//   console.log('VALOR FINAL MESA: R$ ' + calculoMesaValidado);
//   console.log('VALOR FINAL POR CLIENTE: R$ ' + calculoIndividualValidado + "/cada");
// } else {
//   console.log('VALOR FINAL MESA/CLIENTE: R$ ' + calculoMesaValidado);
// }
