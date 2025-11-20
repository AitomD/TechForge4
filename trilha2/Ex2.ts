class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): void {
    if (this.lido) {
      console.log(`O livro "${this.titulo}" já foi marcado como lido.`);
    } else {
      this.lido = true;
      console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
  }

  mostrarInfo(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
    console.log(`Lido: ${this.lido ? "Sim" : "Não"}`);
  }
}

const livro1 = new Livro("O Hobbit", "J.R.R. Tolkien", 310);
livro1.mostrarInfo();
livro1.marcarComoLido();
livro1.mostrarInfo();
