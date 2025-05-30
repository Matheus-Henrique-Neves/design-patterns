"use strict";
class Pizzafrango extends Pizza {
    constructor() {
        super();
        this.descricao = "pizza de frango";
        this.preco = 19;
    }
    getDescricao() {
        return this.descricao;
    }
    getPreco() {
        return this.preco;
    }
}
