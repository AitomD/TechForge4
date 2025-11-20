class Temperatura {
  valor: number; 

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return this.valor * 1.8 + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }

  mostrarConversoes(): void {
    console.log(`Temperatura em Celsius: ${this.valor}°C`);
    console.log(`Em Fahrenheit: ${this.paraFahrenheit().toFixed(2)}°F`);
    console.log(`Em Kelvin: ${this.paraKelvin().toFixed(2)}K`);
  }
}

const temp1 = new Temperatura(25);
temp1.mostrarConversoes();
