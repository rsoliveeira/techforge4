var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.energia = 50;
    }
    Animal.prototype.comer = function () {
        this.energia += 10;
        console.log(this.getNomeClasse() + " está se alimentando. Energia aumentada.");
    };
    Animal.prototype.statusEnergia = function () {
        console.log(this.getNomeClasse() + " tem " + this.getEnergia() + " de energia.");
    };
    Animal.prototype.getNomeClasse = function () {
        if (this instanceof Leao) {
            return "Leão";
        }
        else if (this instanceof Passaro) {
            return "Pássaro";
        }
        return "Animal";
    };
    Animal.prototype.getEnergia = function () {
        return this.energia;
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.comer = function () {
        console.log("Leão está caçando... Gastando energia.");
        this['energia'] -= 20;
        _super.prototype.comer.call(this);
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function () {
        _super.prototype.comer.call(this);
    };
    return Passaro;
}(Animal));
function mostrarStatusAnimal(animal) {
    animal.statusEnergia();
}
var leao = new Leao();
var passaro = new Passaro();
leao.comer();
mostrarStatusAnimal(leao);
passaro.comer();
mostrarStatusAnimal(passaro);
