class Pagamento {
  processar() {}
}

class PagamentoCartao extends Pagamento {
  constructor(private numeroCartao: string) {
    super();
  }
  processar() {
    if (this.numeroCartao.length === 16) {
      console.log("Pagamento com cartão processado com sucesso.");
    } else {
      console.log("Número do cartão inválido.");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  processar() {
    const codigoBoleto = Math.floor(Math.random() * 1000000000000);
    console.log(`Boleto gerado: ${codigoBoleto}`);
  }
}

function processarPagamentos(pagamentos: Pagamento[]) {
  pagamentos.forEach(p => p.processar());
}

const pagamentos: Pagamento[] = [
  new PagamentoCartao("1234567812345678"),
  new PagamentoBoleto()
];

processarPagamentos(pagamentos);
