class Animal {
  protected energia: number;

  constructor(energia: number) {
    this.energia = energia;
  }

  comer() {}

  statusEnergia() {
    console.log(`Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer() {
    this.energia -= 20;
    this.energia += 40;
    console.log("O leão caçou e comeu.");
  }
}

class Passaro extends Animal {
  comer() {
    this.energia += 10;
    console.log("O pássaro comeu sementes.");
  }
}

function alimentarAnimais(animais: Animal[]) {
  animais.forEach(animal => {
    animal.comer();
    animal.statusEnergia();
  });
}

const animais: Animal[] = [
  new Leao(50),
  new Passaro(30)
];

alimentarAnimais(animais);
