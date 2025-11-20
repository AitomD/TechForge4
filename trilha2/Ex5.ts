class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    if (compromisso.trim() === "") {
      console.log("O compromisso não pode ser vazio.");
      return;
    }
    this.compromissos.push(compromisso);
    console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
  }

  listarCompromissos(): void {
    if (this.compromissos.length === 0) {
      console.log("Nenhum compromisso agendado.");
      return;
    }

    console.log("📅 Lista de compromissos:");
    this.compromissos.forEach((compromisso, index) => {
      console.log(`${index + 1}. ${compromisso}`);
    });
  }
}

const minhaAgenda = new Agenda();
minhaAgenda.listarCompromissos(); 
minhaAgenda.adicionarCompromisso("Reunião às 10h");
minhaAgenda.adicionarCompromisso("Estudar TypeScript");
minhaAgenda.listarCompromissos();
