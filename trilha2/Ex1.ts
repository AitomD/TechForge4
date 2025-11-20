class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser positivo.");
      return;
    }
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser positivo.");
      return;
    }
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
      return;
    }
    this.saldo -= valor;
  }

  mostrarSaldo(): void {
    console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
  }
}

const conta = new ContaBancaria("Lich", 1000);
conta.depositar(500);
conta.sacar(200);
conta.mostrarSaldo();
