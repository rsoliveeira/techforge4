var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorEstoque = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
var produto1 = new Produto("Camiseta", 50, 10);
var produto2 = new Produto("Calça", 100, 5);
console.log("Valor total em estoque de ".concat(produto1['nome'], ": R$").concat(produto1.calcularValorEstoque()));
console.log("Valor total em estoque de ".concat(produto2['nome'], ": R$").concat(produto2.calcularValorEstoque()));
