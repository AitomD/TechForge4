abstract class Funcionario {
  constructor(private nome: string, private salario: number) {}

  getNome() {
    return this.nome;
  }

  getSalario() {
    return this.salario;
  }

  abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.1;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {
  funcionarios.forEach(func => {
    const salarioFinal = func.getSalario() + func.calcularBonus();
    console.log(`${func.getNome()} - Salário final: ${salarioFinal}`);
  });
}

const funcionarios: Funcionario[] = [
  new Gerente("Ana", 5000),
  new Operario("Carlos", 3000)
];

calcularSalarioComBonus(funcionarios);
