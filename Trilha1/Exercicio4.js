var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return (this.valor * 9) / 5 + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    return Temperatura;
}());
var temp = new Temperatura(25);
console.log("Temperatura em Celsius: ".concat(temp['valor'], "\u00B0C"));
console.log("Temperatura em Fahrenheit: ".concat(temp.paraFahrenheit(), "\u00B0F"));
console.log("Temperatura em Kelvin: ".concat(temp.paraKelvin(), "K"));
