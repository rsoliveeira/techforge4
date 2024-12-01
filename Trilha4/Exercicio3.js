var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.codigo === codigo) {
                return produto;
            }
        }
        return undefined;
    };
    return Loja;
}());
var loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "Notebook" });
loja.adicionarProduto({ codigo: 2, nome: "Smartphone" });
console.log(loja.buscarProdutoPorCodigo(1)); // Exibe: { codigo: 1, nome: "Notebook" }
console.log(loja.buscarProdutoPorCodigo(3)); // Exibe: undefined
