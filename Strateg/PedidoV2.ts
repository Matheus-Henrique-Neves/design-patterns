abstract class Pedidov2Eletronicos {
    protected valor: number

    public getValor(): number {
        return this.valor
    }

    public setValor(valor: number): void{
        this.valor = valor
    }

    abstract calculaFreteComum(): number
    abstract calculaFreteExpresso(): number
}

class Pedidov2EletronicosEletronicos extends Pedidov2Eletronicos {
    private nomeSetor: string

    constructor() {
        super()
        this.nomeSetor = 'Eletronicos'
    }

    public getNomeSetor() { return this.nomeSetor }

    public setNomeSetor(nome: string): void { this.nomeSetor = nome }

    public calculaFreteComum(): number {
        return this.valor * 0.05
    }

    public calculaFreteExpresso(): number {
        return this.valor * 0.1
    }
}

class Pedidov2EletronicosMoveis extends Pedidov2Eletronicos {
    private nomeSetor: string

    constructor() {
        super()
        this.nomeSetor = 'Moveis'
    }

    public getNomeSetor() { return this.nomeSetor }

    public setNomeSetor(nome: string): void { this.nomeSetor = nome }

    public calculaFreteComum(): number {
        return this.valor * 0.05
    }

    public calculaFreteExpresso(): number {
        throw new Error('Frete indisponível')
    }
}

const pedidov2Pedidov2EletronicosEletronico1 = new Pedidov2EletronicosEletronicos()
pedidov2Pedidov2EletronicosEletronico1.setValor(100)

console.log('Frete comum - ', pedidov2Pedidov2EletronicosEletronico1.calculaFreteComum())
console.log('Frete Expresso - ',pedidov2Pedidov2EletronicosEletronico1.calculaFreteExpresso())