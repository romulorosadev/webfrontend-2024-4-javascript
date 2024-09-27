// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// VARIAVÉIS DE ENTRADA DE DADOS
let inNumeroMesa;
let inNumeroPessoas;
let inValorTotal;
let inMetodoPagamento;

// VARIAVÉIS DE SAÍDA DE DADOS
let outMesaValida;
let outClientesValidos;
let outValorTotalValido;
let outMetodoPagamentoValido;
let outMetodoPagamentoDescontoValido;
let outCalculoMesaValido;
let outCalculoIndividualValido;

//--------------------------------------

//INÍCIO - FUNÇÕES DE ENTRADA E PROCESSAMENTO DE DADOS
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
  outMetodoPagamentoValido = inMetodoPagamento;
  return outMetodoPagamentoValido
}

function calcularValorFinalMesa() {
  if (outMetodoPagamentoValido, outValorTotalValido) {
    const descontoDinheiro10Porcento = 0.9;
    const descontoPix10Porcento = 0.9;
    outMetodoPagamentoDescontoValido = 'Não Possui Desconto no Valor Total';
    outCalculoMesaValido = outValorTotalValido;

    if (outMetodoPagamentoValido === 'Pix') {
      outCalculoMesaValido = (inValorTotal * descontoPix10Porcento).toFixed(2);
      outMetodoPagamentoDescontoValido = '10% no Valor Total';
    }
    if (outMetodoPagamentoValido === 'Dinheiro') {
      outCalculoMesaValido = (inValorTotal * descontoDinheiro10Porcento).toFixed(2);
      outMetodoPagamentoDescontoValido = '10% no Valor Total';
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
// FIM - FUNÇÕES DE ENTRADA E PROCESSAMENTO DE DADOS

//-----------------------------------------------------------------------

// FUNÇÃO DE SAÍDA/EXIBIÇÃO DOS DADOS
function outExibirMensagemInicial() {
  console.log('INFORME OS SEGUINTES DADOS:')
}

function outExibirResultados() {
  console.log('\n==========================');
  console.log('DELÍCIAS EXPRESS | CONTA');
  console.log('==========================');
  console.log(`MESA: ${outMesaValida}`);
  console.log(`CLIENTES: ${outClientesValidos}`);
  console.log(`VALOR TOTAL: R$ ${outValorTotalValido}`);
  console.log(`MÉTODO DE PAGAMENTO: ${outMetodoPagamentoValido}`);
  console.log(`DESCONTO: ${outMetodoPagamentoDescontoValido}`);
  if (outClientesValidos > 1) {
    console.log(`VALOR FINAL MESA: R$ ${outCalculoMesaValido}`);
    console.log(`VALOR FINAL POR CLIENTE: R$ ${outCalculoIndividualValido}/cada`);
  } else {
    console.log(`VALOR FINAL MESA/CLIENTE: R$ ${outCalculoMesaValido}`);
  }
}

//-----------------------------------------------------------------------


// CHAMANDO FUNÇÃO EXIBIÇÃO MENSAGEM INICIAL
outExibirMensagemInicial();

// CHAMANDO FUNÇÕES ENTRADA E PROCESSAMENTO DADOS
validarMesa()
validarQuantidadePessoas()
validarValorTotal()
validarMetodoPagamento()
calcularValorFinalMesa()
calcularValorFinalIndividual()

// CHAMANDO FUNÇÃO SAÍDA/EXIBIÇÃO DADOS
outExibirResultados();
