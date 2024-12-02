/*
//Implementação inicial da classe
class Order {
    private items: { name: string; price: number; quantity: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = "Pendente";
    private shippingStatus: string = "Não Enviado";
  
    addItem(name: string, price: number, quantity: number): void {
      this.items.push({ name, price, quantity });
      this.calculateTotalPrice();
    }
  
    private calculateTotalPrice(): void {
      this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  
    processPayment(): void {
      if (this.totalPrice > 0) {
        this.paymentStatus = "Pago";
        console.log("Pagamento processado com sucesso.");
      } else {
        console.log("Não é possível processar o pagamento: Nenhum item no pedido.");
      }
    }
  
    updateShippingStatus(status: string): void {
      this.shippingStatus = status;
      console.log(`Status do envio atualizado para: ${status}`);
    }
  
    displaySummary(): void {
      console.log("Resumo do Pedido:");
      console.log("Itens:", this.items);
      console.log("Preço Total: R$", this.totalPrice.toFixed(2));
      console.log("Status do Pagamento:", this.paymentStatus);
      console.log("Status do Envio:", this.shippingStatus);
    }
  }
  
  // Exemplo de uso
  const order = new Order();
  order.addItem("Notebook", 1500, 1);
  order.addItem("Teclado", 200, 2);
  order.processPayment();
  order.updateShippingStatus("Enviado");
  order.displaySummary();
  
 */ 
  

//Refatoração com Carrinho, Pagamento e Envio
class Cart {
    private items: { name: string; price: number; quantity: number }[] = [];
  
    addItem(name: string, price: number, quantity: number): void {
      this.items.push({ name, price, quantity });
    }
  
    calculateTotalPrice(): number {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  
    getItems(): { name: string; price: number; quantity: number }[] {
      return this.items;
    }
  }
  
  class Payment {
    private status: string = "Pendente";
  
    processPayment(amount: number): boolean {
      if (amount > 0) {
        this.status = "Pago";
        console.log("Pagamento processado com sucesso.");
        return true;
      } else {
        console.log("Pagamento não autorizado: Valor inválido.");
        return false;
      }
    }
  
    getStatus(): string {
      return this.status;
    }
  }
  
  class Shipping {
    private status: string = "Não Enviado";
  
    updateStatus(status: string): void {
      this.status = status;
      console.log(`Status do envio atualizado para: ${status}`);
    }
  
    getStatus(): string {
      return this.status;
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment();
      this.shipping = new Shipping();
    }
  
    addItem(name: string, price: number, quantity: number): void {
      this.cart.addItem(name, price, quantity);
    }
  
    finalizeOrder(): void {
      const totalPrice = this.cart.calculateTotalPrice();
      const paymentProcessed = this.payment.processPayment(totalPrice);
  
      if (paymentProcessed) {
        this.shipping.updateStatus("Enviado");
      }
    }
  
    exibirResumo(): void {
      console.log("Resumo do Pedido:");
      console.log("Itens:", this.cart.getItems());
      console.log("Preço Total: R$", this.cart.calculateTotalPrice().toFixed(2));
      console.log("Status do Pagamento:", this.payment.getStatus());
      console.log("Status do Envio:", this.shipping.getStatus());
    }
  }
  
  const order = new Order();
  order.addItem("Notebook", 1500, 1);
  order.addItem("Teclado", 200, 2);
  order.finalizeOrder();
  order.exibirResumo();
  
