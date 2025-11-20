// ----- CLASSE ABSTRATA -----
abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

// ----- WAREHOUSE (sem limite) -----
class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// ----- STORE (limite de 10 unidades por item) -----
class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const atual = this.items[item] || 0;
        const novo = atual + quantity;

        this.items[item] = Math.min(novo, 10);
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}
