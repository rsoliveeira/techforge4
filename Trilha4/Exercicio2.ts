interface Documento {
    titulo: string;
    conteudo: string;
  }
  
  class Texto implements Documento {
    titulo: string;
    conteudo: string;
  
    constructor(titulo: string, conteudo: string) {
      this.titulo = titulo;
      this.conteudo = conteudo;
    }
  
    exibir(): string {
      return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
  }
  
  const documento = new Texto("Relatório Semanal", "Os resultados foram satisfatórios.");
  console.log(documento.exibir());
  