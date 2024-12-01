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
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        console.log("Processando pagamento genérico.");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento com cart\u00E3o ".concat(this.numeroCartao, " processado com sucesso."));
        }
        else {
            console.log("N\u00FAmero de cart\u00E3o inv\u00E1lido.");
        }
    };
    PagamentoCartao.prototype.validarCartao = function () {
        return this.numeroCartao.length === 16;
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(codigoBoleto) {
        var _this = _super.call(this) || this;
        _this.codigoBoleto = codigoBoleto;
        return _this;
    }
    PagamentoBoleto.prototype.processar = function () {
        console.log("Boleto gerado com o c\u00F3digo: ".concat(this.codigoBoleto, "."));
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamento(pagamento) {
    pagamento.processar();
}
var pagamentoCartao = new PagamentoCartao("1234567890123456");
processarPagamento(pagamentoCartao);
var pagamentoBoleto = new PagamentoBoleto("1234567890");
processarPagamento(pagamentoBoleto);
