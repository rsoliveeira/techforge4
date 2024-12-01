interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  
  class Loja {
    produtos: ProdutoLoja[];
  
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto: ProdutoLoja): void {
      this.produtos.push(produto);
    }
  
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        for (let produto of this.produtos) {
          if (produto.codigo === codigo) {
            return produto;
          }
        }
        return undefined;
      }      
  }
  
  const loja = new Loja();
  loja.adicionarProduto({ codigo: 1, nome: "Notebook" });
  loja.adicionarProduto({ codigo: 2, nome: "Smartphone" });
  
  console.log(loja.buscarProdutoPorCodigo(1)); // Exibe: { codigo: 1, nome: "Notebook" }
  console.log(loja.buscarProdutoPorCodigo(3)); // Exibe: undefined
  