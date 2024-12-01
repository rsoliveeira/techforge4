class Pagamento {
    processar(): void {
        console.log("Processando pagamento genérico.");
    }
}

class PagamentoCartao extends Pagamento {
    numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }


    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} processado com sucesso.`);
        } else {
            console.log(`Número de cartão inválido.`);
        }
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16; 
    }
}

class PagamentoBoleto extends Pagamento {
    codigoBoleto: string;

    constructor(codigoBoleto: string) {
        super();
        this.codigoBoleto = codigoBoleto;
    }

    
    processar(): void {
        console.log(`Boleto gerado com o código: ${this.codigoBoleto}.`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao("1234567890123456");
processarPagamento(pagamentoCartao); 

const pagamentoBoleto = new PagamentoBoleto("1234567890");
processarPagamento(pagamentoBoleto); 
