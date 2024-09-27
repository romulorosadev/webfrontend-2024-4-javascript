// Importando a biblioteca readline-sync
const readline = require('readline-sync');

console.log('===================================================')
console.log('Digite os seguintes dados, conforme forem solitados.')

// Variavéis de entrada de dados
let inNumeroMesa;
let inNumeroPessoas;
let inValorTotal;
let inMetodoPagamento;

// Variaveis de saída de dados
let outMesaValida;
let outClientesValidos;
let outValorTotalValido;
let outMetodoPagamanentoValido;
let outMedotoPagamentooDescontoValido;
let outCalculoMesaValido;
let outCalculoIndividualValido;

//Faça sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

//PROCESSAMENTO DOS DADOS//
function validarMesa() {
  inNumeroMesa = readline.questionInt('\nNUMERO DA MESA: ');
  while (inNumeroMesa < 1 || inNumeroMesa > 30) {
    console.log('\n>> ERRO: Não temos esse número de mesa no restaurante.');
    inNumeroMesa = readline.questionInt('\n-> INFORME UM NUMERO DA MESA VALIDO: ');
  }
  outMesaValida = inNumeroMesa;
  return outMesaValida
}

function validarQuantidadePessoas() {
  inNumeroPessoas = readline.questionInt('\nQUANTIDADE PESSOAS NA MESA: ');
  while (inNumeroPessoas < 1) {
    console.log('\n>> ERRO: A conta referente a uma mesa precisa ter no mínimo 1 cliente.');
    inNumeroPessoas = readline.questionInt('\n-> INFORME UMA QUANTIDADE DE PESSOAS VALIDA: ');
  }
  outClientesValidos = inNumeroPessoas;
  return outClientesValidos
}

function validarValorTotal() {
  inValorTotal = (readline.questionFloat('\nVALOR TOTAL: R$ ')).toFixed(2);
  while (inValorTotal < 0.00) {
    console.log('\n>> ERRO: Uma conta não pode ter valor menor que R$ 0,00.');
    inValorTotal = (readline.questionFloat('\n-> INFORME UM VALOR TOTAL VALIDO: ')).toFixed(2);
  }
  outValorTotalValido = inValorTotal;
  return outValorTotalValido
}

function validarMetodoPagamento() {
  if (outValorTotalValido <= 0.00) {
    inMetodoPagamento = "Indisponível";
  } else {
    inMetodoPagamento = readline.questionInt('\nMETODO DE PAGAMENTO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');

    while (inMetodoPagamento < 1 || inMetodoPagamento > 3) {
      console.log('\n>>> MÉTODO DE PAGAMENTO INVÁLIDO!');
      console.log('===================================');
      inMetodoPagamento = readline.questionInt('\n-> INFORME UM METODO DE PAGAMENTO VALIDO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');
    }

    if (inMetodoPagamento == 1) {
      inMetodoPagamento = 'Pix';
    }
    if (inMetodoPagamento == 2) {
      inMetodoPagamento = 'Dinheiro';
    }
    if (inMetodoPagamento == 3) {
      inMetodoPagamento = 'Cartão';
    }
  }
  outMetodoPagamanentoValido = inMetodoPagamento;
  return outMetodoPagamanentoValido
}

function calcularValorFinalMesa() {
  if (outMetodoPagamanentoValido, outValorTotalValido) {
    const descontoDinheiro10Porcento = 0.9;
    const descontoPix10Porcento = 0.9;
    outMedotoPagamentooDescontoValido = 'Não Possui Desconto no Valor Total';
    outCalculoMesaValido = outValorTotalValido;

    if (outMetodoPagamanentoValido === 'Pix') {
      outCalculoMesaValido = (inValorTotal * descontoPix10Porcento).toFixed(2);
      outMedotoPagamentooDescontoValido = '10% no Valor Total';
    }
    if (outMetodoPagamanentoValido === 'Dinheiro') {
      outCalculoMesaValido = (inValorTotal * descontoDinheiro10Porcento).toFixed(2);
      outMedotoPagamentooDescontoValido = '10% no Valor Total';
    }
    return outCalculoMesaValido
  }
}

function calcularValorFinalIndividual() {
  if (outCalculoMesaValido && outClientesValidos) {
    outCalculoIndividualValido = (outCalculoMesaValido / outClientesValidos).toFixed(2);
    return outCalculoIndividualValido
  }
}
// FIM PROCESSAMENTO//

//SAÍDA DOS DADOS
function outExibirResultados() {
  console.log('\nDELÍCIAS EXPRESS | CONTA');
  console.log('==========================');
  console.log('MESA: ' + outMesaValida);
  console.log('CLIENTES: ' + outClientesValidos);
  console.log('VALOR TOTAL: R$ ' + outValorTotalValido);
  console.log('MÉTODO DE PAGAMENTO: ' + outMetodoPagamanentoValido);
  console.log('DESCONTO: ' + outMedotoPagamentooDescontoValido);
  if (outClientesValidos > 1) {
    console.log('VALOR FINAL MESA: R$ ' + outCalculoMesaValido);
    console.log('VALOR FINAL POR CLIENTE: R$ ' + outCalculoIndividualValido + "/cada");
  } else {
    console.log('VALOR FINAL MESA/CLIENTE: R$ ' + outCalculoMesaValido);
  }
}

validarMesa()
validarQuantidadePessoas()
validarValorTotal()
validarMetodoPagamento()
calcularValorFinalMesa()
calcularValorFinalIndividual()


// Exibindo os resultados
outExibirResultados();
