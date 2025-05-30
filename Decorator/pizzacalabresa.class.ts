class PizzaCalabresa extends Pizza{
    constructor(){
        super()
        this.descricao="pizza de calabresa"
        this.preco= 25
    }
    public getDescricao(): string{
        return this.descricao
    }
    public getPreco(): number{
        return this.preco
    }
}

