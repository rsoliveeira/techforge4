var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inventory = /** @class */ (function () {
    function Inventory(items) {
        if (items === void 0) { items = {}; }
        this.items = items;
    }
    // Método concreto: com implementação
    Inventory.prototype.getInventory = function () {
        return this.items;
    };
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        }
        else {
            this.items[item] = quantity;
        }
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        delete this.items[item];
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxQuantity = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        if (this.items[item]) {
            if (this.items[item] + quantity <= this.maxQuantity) {
                this.items[item] += quantity;
            }
            else {
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(quantity, " unidades de ").concat(item, ". Limite m\u00E1ximo atingido."));
            }
        }
        else {
            if (quantity <= this.maxQuantity) {
                this.items[item] = quantity;
            }
            else {
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(quantity, " unidades de ").concat(item, ". Limite m\u00E1ximo atingido."));
            }
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        delete this.items[item];
    };
    return StoreInventory;
}(Inventory));
// Exemplo de uso
var warehouse = new WarehouseInventory();
warehouse.addItem("itemA", 100);
warehouse.addItem("itemB", 50);
console.log(warehouse.getInventory()); // { itemA: 100, itemB: 50 }
var store = new StoreInventory();
store.addItem("itemC", 5);
store.addItem("itemC", 6);
console.log(store.getInventory());
