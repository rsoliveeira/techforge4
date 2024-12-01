interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    livros: LivroBiblioteca[];
  
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro: LivroBiblioteca): void {
      this.livros.push(livro);
    }
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter((livro) => livro.genero.toLowerCase() === genero.toLowerCase());
    }
  
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter((livro) => livro.autor.toLowerCase() === autor.toLowerCase());
    }
  
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter((livro) => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }
  
  const bibliotecaGestao = new BibliotecaGestao();
  
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
  