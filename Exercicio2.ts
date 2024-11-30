class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido; 
    }

    public marcarComoLido() {
        this.lido = true; 
        console.log(`Você marcou o livro "${this.titulo}" como lido.`);
    }
}

const livro1 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 96);
livro1.marcarComoLido(); 
