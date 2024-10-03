// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// VARIAVÉIS DE ENTRADA DE DADOS
let inNumeroMesa;
let inQuantidadeClientes;
let inValorTotal;
let inMetodoPagamento;

// VARIAVÉIS DE SAÍDA DE DADOS
let outMesaValida;
let outClientesValidos;
let outValorTotalValido;
let outMetodoPagamentoValido;
let outDescontoOff;
let outCalculoMesaValido;
let outCalculoIndividualValido;

//--------------------------------------

//INÍCIO - FUNÇÕES DE ENTRADA DE DADOS
function inMesa() {
  const validarNumero = /[\d]{2}/;
  const mensagemErro = '\n>> ERRO: Os números das mesas válidos são de 1 a 30.'

  inNumeroMesa = readline.questionInt('\nNUMERO DA MESA: ')

  while (!validarNumero.test(inNumeroMesa)) {
    console.log(mensagemErro);
    inNumeroMesa = readline.questionInt('-> INFORME UM NUMERO DA MESA VALIDO:');
  }
  return inNumeroMesa
}

function inClientes() {
  inQuantidadeClientes = readline.questionInt('\nQUANTIDADE PESSOAS NA MESA: ');
  return inQuantidadeClientes
}

function inValor() {
  inValorTotal = (readline.questionFloat('\nVALOR TOTAL: R$ ')).toFixed(2);
  return inValorTotal
}

function inPagamento() {
  inMetodoPagamento = readline.questionInt('\nMETODO DE PAGAMENTO: \n1) Pix \n2) Dinheiro \n3) Cartao\n\n');
  return inMetodoPagamento
}


//INÍCIO - FUNÇÕES DE PROCESSAMENTO E SAÍDA DE DADOS
function validarMesa(inNumeroMesa) {
  const mensagemErro = '\n>> ERRO: Os números das mesas válidos são de 1 a 30.'

  //Mesas disponiveis de 1 a 30
  while (inNumeroMesa < 1 || inNumeroMesa > 30) {
    console.log(mensagemErro);
    inNumeroMesa = readline.questionInt('-> INFORME UM NUMERO DA MESA VALIDO:');
  }
  outMesaValida = inNumeroMesa;
  return outMesaValida
}

function validarClientes(inQuantidadeClientes) {
  const outMensagemErro = '\n>> ERRO: A conta referente a uma mesa precisa ter no mínimo 1 cliente.'

  while (inQuantidadeClientes < 1) {
    console.log(outMensagemErro);
    inQuantidadeClientes = readline.questionInt('-> INFORME UMA QUANTIDADE DE PESSOAS VALIDA: ');
  }
  outClientesValidos = inQuantidadeClientes;

  return outClientesValidos
}

function validarValor(inValorTotal) {
  const outMensagemErro = '\n>> ERRO: Uma conta não pode ter valor menor que R$ 0,00.';

  while (inValorTotal < 0.00) {
    console.log(outMensagemErro);
    inValorTotal = (readline.questionFloat('-> INFORME UM VALOR TOTAL VALIDO: ')).toFixed(2);
  }
  outValorTotalValido = inValorTotal;
  return outValorTotalValido
}

function validarPagamento(inMetodoPagamento) {
  const outMensagemErro = '\n>>> MÉTODO DE PAGAMENTO INVÁLIDO!';
  const outDivisao = '===================================';

  if (outValorTotalValido <= 0.00) {
    inMetodoPagamento = "Indisponível";
  } else {
    while (inMetodoPagamento < 1 || inMetodoPagamento > 3) {
      console.log(outMensagemErro);
      console.log(outDivisao);
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

function calcularValorMesa(outMetodoPagamentoValido, outValorTotalValido) {
  const outMensagemDesconto = '10% no Valor Total';
  const outMensagemSemDesconto = 'Não Possui Desconto no Valor Total';

  outDescontoOff = outMensagemSemDesconto;
  outCalculoMesaValido = outValorTotalValido;

  if (outMetodoPagamentoValido === 'Pix' || outMetodoPagamentoValido === 'Dinheiro') {
    outCalculoMesaValido = (outValorTotalValido * 0.9).toFixed(2);
    outDescontoOff = outMensagemDesconto;
  }
  return outCalculoMesaValido
}

function calcularValorIndividual(outCalculoMesaValido, outClientesValidos) {
  outCalculoIndividualValido = (outCalculoMesaValido / outClientesValidos).toFixed(2);
  return outCalculoIndividualValido
}

// FIM - FUNÇÕES DE ENTRADA E PROCESSAMENTO DE DADOS

//-----------------------------------------------------------------------

// FUNÇÕES DE EXIBIÇÃO DOS DADOS
function outExibirMensagemInicial() {
  console.log('INFORME OS SEGUINTES DADOS:')
}

function outExibirResultados() {
  console.log('=========================================');
  console.log('DELÍCIAS EXPRESS | CONTA GARÇOM');
  console.log('=========================================');
  console.log(`MESA: ${outMesaValida}`);
  console.log(`CLIENTES: ${outClientesValidos}`);
  console.log(`VALOR TOTAL: R$ ${outValorTotalValido}`);
  console.log(`MÉTODO DE PAGAMENTO: ${outMetodoPagamentoValido}`);
  console.log(`DESCONTO: ${outDescontoOff}`);
  console.log('========================================');
  console.log(`VALOR FINAL MESA ${outMesaValida}: R$ ${outCalculoMesaValido}`);
  if (outClientesValidos > 1) {
    console.log(`VALOR FINAL POR CLIENTE: R$ ${outCalculoIndividualValido}/cada`);
  }
  console.log('=========================================');
}

//-----------------------------------------------------------------------

// CHAMANDO AS FUNÇÕES PARA EXECUÇÃO DO PROGRAMA
outExibirMensagemInicial();

inMesa()
validarMesa(inNumeroMesa)

inClientes()
validarClientes(inQuantidadeClientes)

inValor()
validarValor(inValorTotal)

inPagamento()
validarPagamento(inMetodoPagamento)

calcularValorMesa(outMetodoPagamentoValido, outValorTotalValido)
calcularValorIndividual(outCalculoMesaValido, outClientesValidos)

// CHAMANDO FUNÇÃO SAÍDA/EXIBIÇÃO DADOS
outExibirResultados();


// EXPORTAR FUNÇÕES PARA TESTES
module.exports = {
  inMesa,
  validarMesa,
  validarClientes,
  validarValor,
  validarPagamento,
  calcularValorMesa,
  calcularValorIndividual
}
