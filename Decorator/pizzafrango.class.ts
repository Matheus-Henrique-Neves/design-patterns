class Pizzafrango extends Pizza{
    constructor(){
        super()
        this.descricao="pizza de frango"
        this.preco= 19
    }
    public getDescricao(): string{
        return this.descricao
    }
    public getPreco(): number{
        return this.preco
    }
}