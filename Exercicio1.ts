class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado.`);
    }

    public sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado.`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    public exibirSaldo() {
        console.log(`Saldo de ${this.titular}: R$${this.saldo}`);
    }
}

const conta = new ContaBancaria("Rodrigo", 100);
conta.exibirSaldo(); 
conta.depositar(50);
conta.exibirSaldo();
conta.sacar(30);
conta.exibirSaldo();
conta.sacar(120);
conta.exibirSaldo();