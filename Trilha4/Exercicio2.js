var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Conte\u00FAdo: ").concat(this.conteudo);
    };
    return Texto;
}());
var documento = new Texto("Relatório Semanal", "Os resultados foram satisfatórios.");
console.log(documento.exibir());
