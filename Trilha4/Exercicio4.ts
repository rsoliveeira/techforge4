interface LivroStrilha4 {
    tituloStrilha4: string;
    autor: string;
    disponivel: boolean;
  }
  
  class Biblioteca {
    livros: LivroStrilha4[];
  
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro: LivroStrilha4): void {
      this.livros.push(livro);
    }
  
    buscarLivrosDisponiveis(): LivroStrilha4[] {
      return this.livros.filter((livro) => livro.disponivel);
    }
  }
  
  const biblioteca = new Biblioteca();
  
  biblioteca.adicionarLivro({ tituloStrilha4: "1984", autor: "George Orwell", disponivel: true });
  biblioteca.adicionarLivro({ tituloStrilha4: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false });
  biblioteca.adicionarLivro({ tituloStrilha4: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
  
  const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
  console.log(livrosDisponiveis);
  