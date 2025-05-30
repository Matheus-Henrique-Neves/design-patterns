"use strict";
class PizzaCalabresa extends Pizza {
    constructor() {
        super();
        this.descricao = "pizza de calabresa";
        this.preco = 25;
    }
    getDescricao() {
        return this.descricao;
    }
    getPreco() {
        return this.preco;
    }
}
