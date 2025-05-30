"use strict";
class BordaRequeijao extends AcrescimoDecorator {
    getDescricao() {
        return this.pizza.getDescricao() + ' Borda requeijão';
    }
    getPreco() {
        return this.pizza.getPreco() + 8.50;
    }
}
