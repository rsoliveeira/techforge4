var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado."));
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado."));
        }
        else {
            console.log("Saldo insuficiente!");
        }
    };
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo de ".concat(this.titular, ": R$").concat(this.saldo));
    };
    return ContaBancaria;
}());

var conta = new ContaBancaria("Rodrigo", 100);
conta.exibirSaldo(); 
conta.depositar(50); 
conta.exibirSaldo(); 
conta.sacar(30); 
conta.exibirSaldo(); 
conta.sacar(120); 
conta.exibirSaldo();
