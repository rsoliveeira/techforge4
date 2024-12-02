class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calcularValorEstoque() {
        return this.preco * this.quantidade;
    }
}


const produto1 = new Produto("Camiseta", 50, 10);
const produto2 = new Produto("Calça", 100, 5);

console.log(`Valor total em estoque de ${produto1['nome']}: R$${produto1.calcularValorEstoque()}`);
console.log(`Valor total em estoque de ${produto2['nome']}: R$${produto2.calcularValorEstoque()}`);
