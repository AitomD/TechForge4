class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal(): number {
    return this.preco * this.quantidade;
  }

  mostrarInfo(): void {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$${this.preco.toFixed(2)}`);
    console.log(`Quantidade em estoque: ${this.quantidade}`);
    console.log(`Valor total em estoque: R$${this.calcularValorTotal().toFixed(2)}`);
  }
}

const produto1 = new Produto("Mouse Gamer", 150, 10);
produto1.mostrarInfo();
