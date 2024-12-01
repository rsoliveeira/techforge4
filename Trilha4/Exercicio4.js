var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ tituloStrilha4: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ tituloStrilha4: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false });
biblioteca.adicionarLivro({ tituloStrilha4: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
var livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);
