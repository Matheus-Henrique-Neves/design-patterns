class Pedidov1 {
    protected valor: number;

    public getValor(): number {
        return this.valor
    }

    public setValor(valor: number): void{
        this.valor = valor
    }

    public calculaFreteComum(): number {
        return this.valor * 0.05
    }

    public calculaFreteExpresso(): number {
        return this.valor * 0.1
    }
}0