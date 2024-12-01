var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao() {
        this.livros = [];
    }
    BibliotecaGestao.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
console.log(bibliotecaGestao.filtrarPorGenero("Fantasia"));
// Exibe: [{ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false }, { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true }]
console.log(bibliotecaGestao.buscarPorAutor("J.R.R. Tolkien"));
// Exibe: [{ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false }, { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true }]
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());
// Exibe: [{ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true }, { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: true }, { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true }]
