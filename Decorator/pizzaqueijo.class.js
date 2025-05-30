"use strict";
class PizzaQueijo extends Pizza {
    constructor() {
        super();
        this.descricao = "pizza de Queijo";
        this.preco = 22;
    }
    getDescricao() {
        return this.descricao;
    }
    getPreco() {
        return this.preco;
    }
}
