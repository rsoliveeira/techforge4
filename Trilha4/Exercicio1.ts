interface ProdutoTrilha4 {
    id: number; 
    nome: string; 
    preco: number; 
  }
  
  
  class ItemLojaTrilha4 implements ProdutoTrilha4 {
    id: number; 
    nome: string; 
    preco: number; 
  
    
    constructor(id: number, nome: string, preco: number) {
      this.id = id; 
      this.nome = nome; 
      this.preco = preco; 
    }
  }
  

  const produtoTrilha4 = new ItemLojaTrilha4(1, "Notebook", 3500.99);
  console.log(produtoTrilha4);
  