var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
        console.log("Voc\u00EA marcou o livro \"".concat(this.titulo, "\" como lido."));
    };
    return Livro;
}());
var livro1 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 96);
livro1.marcarComoLido();
