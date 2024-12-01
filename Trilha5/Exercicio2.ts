abstract class Inventory {
    constructor(protected items: Record<string, number> = {}) {}

    // Método abstrato: sem implementação
    abstract addItem(item: string, quantity: number): void;

    // Método abstrato: sem implementação
    abstract removeItem(item: string): void;

    // Método concreto: com implementação
    getInventory(): Record<string, number> {
        return this.items;
    }
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }
}

class StoreInventory extends Inventory {
    private readonly maxQuantity: number = 10;

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            if (this.items[item] + quantity <= this.maxQuantity) {
                this.items[item] += quantity;
            } else {
                console.log(`Não é possível adicionar ${quantity} unidades de ${item}. Limite máximo atingido.`);
            }
        } else {
            if (quantity <= this.maxQuantity) {
                this.items[item] = quantity;
            } else {
                console.log(`Não é possível adicionar ${quantity} unidades de ${item}. Limite máximo atingido.`);
            }
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }
}

// Exemplo de uso
const warehouse = new WarehouseInventory();
warehouse.addItem("itemA", 100);
warehouse.addItem("itemB", 50);
console.log(warehouse.getInventory()); // { itemA: 100, itemB: 50 }

const store = new StoreInventory();
store.addItem("itemC", 5);
store.addItem("itemC", 6); 
console.log(store.getInventory()); 
