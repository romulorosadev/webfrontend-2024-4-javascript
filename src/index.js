// Importando a biblioteca readline-sync
const readline = require('readline-sync');

console.log('===================================================')
console.log('Digite os seguintes dados, conforme forem solitados.')

// Capturando o numero da mesa
let numeroMesa = readline.questionInt('\nNUMERO DA MESA: ');

// Capturando o valor total da conta
// let valorTotal = (readline.questionFloat('\nVALOR TOTAL DA CONTA: ')).toFixed(2);

// Capturando o número de pessoas na mesa
// let numeroPessoas = readline.questionInt('\nQUANTIDADE DE CLIENTES NA MESA: ');

// Capturando o método de pagamento
// let metodoPagamento = readline.questionInt('\nMETODO DE PAGAMENTO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');

// let mesaValidada;
// let clientesValidados;
// let metodoPagamentoValidado;
// let metodoPagamentoDescontoValidado;
// let calculoMesaValidado;
// let calculoIndividualValidado;

//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
function validarMesa(numeroMesa) {
  while (numeroMesa < 1 || numeroMesa > 30) {
    console.log('\nERRO: Não temos esse número de mesa no restaurante.');
    numeroMesa = readline.questionInt('\n-> INFORME UM NUMERO DA MESA VALIDO: ');
  }
  let mesaValidada = numeroMesa
  return mesaValidada
}

function validarClientes(numeroMesa, numeroPessoas) {
  while (numeroMesa && numeroPessoas < 1) {
    console.log('\nA conta referente a uma mesa precisa ter no mínimo 1 cliente.');
    numeroPessoas = readline.questionInt('\nINFORME UMA QUANTIDADE DE PESSOAS VALIDA: ');
  }
  return numeroPessoas
}

function validarMetodoPagamento(numeroMesa, metodoPagamento) {
  if (numeroMesa && metodoPagamento) {
    while (metodoPagamento <= 0 || metodoPagamento >= 4) {
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
    return metodoPagamento
  }
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
// validarClientes(mesaValidada, numeroPessoas);
// validarMetodoPagamento(mesaValidada, metodoPagamento);
// calcularValorFinalMesa(mesaValidada, metodoPagamentoValidado, valorTotal);
// calcularValorFinalIndividual(mesaValidada, clientesValidados, metodoPagamentoValidado, calculoMesaValidado);


console.log('\nDELÍCIAS EXPRESS | CONTA');
console.log('==========================');
console.log('MESA: ' + validarMesa(numeroMesa));
// console.log('CLIENTES: ' + clientesValidados);
// console.log('VALOR MESA: R$ ' + valorTotal);
// console.log('MÉTODO DE PAGAMENTO: ' + metodoPagamentoValidado);
// console.log('DESCONTO: ' + metodoPagamentoDescontoValidado);
// if (clientesValidados > 1) {
//   console.log('VALOR FINAL MESA: R$ ' + calculoMesaValidado);
//   console.log('VALOR FINAL POR CLIENTE: R$ ' + calculoIndividualValidado + "/cada");
// } else {
//   console.log('VALOR FINAL MESA/CLIENTE: R$ ' + calculoMesaValidado);
// }
