class Temperatura {
    private valor: number; 

    constructor(valor: number) {
        this.valor = valor;
    }

    
    public paraFahrenheit() {
        return (this.valor * 9) / 5 + 32;
    }


    public paraKelvin() {
        return this.valor + 273.15;
    }
}

const temp = new Temperatura(25);

console.log(`Temperatura em Celsius: ${temp['valor']}°C`);
console.log(`Temperatura em Fahrenheit: ${temp.paraFahrenheit()}°F`);
console.log(`Temperatura em Kelvin: ${temp.paraKelvin()}K`);
