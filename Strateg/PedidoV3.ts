interface Frete {
    calcula(valorPedido: number): number
}

class FreteComum implements Frete {
    public calcula(valorPedido: number): number {
        return valorPedido * 0.05
    }
}

class FreteExpresso implements Frete {
    public calcula(valorPedido: number): number {
        return valorPedido * 0.1
    }
}



abstract class Pedido {
    protected valor: number
    protected tipoFrete: Frete

    public getValor(): number { return this.valor }
    public setValor(valor: number): void { this.valor = valor}

    public setTipoFrete(frete: Frete): void { this.tipoFrete = frete }
    public calculaFrete(): number {
        if(!this.tipoFrete) {
            throw new Error('Frete não definido')
        }

        return this.tipoFrete.calcula(this.valor)
    }
}



class PedidoEletronicos extends Pedido {
    private nomeSetor: string

    constructor(){
        super()
        this.nomeSetor = 'Eletronicos'
    }

    public getNomeSetor(): string { return this.nomeSetor }
    public setNomesetor(nome:string):void{this.nomeSetor=nome}
}

class PedidoMoveis extends Pedido {
    private nomeSetor: string

    constructor(){
        super()
        this.nomeSetor = 'Moveis'
    }

    public getNomeSetor(): string { return this.nomeSetor }
    public setNomesetor(nome:string):void{this.nomeSetor=nome}
}

const pedidoEletronicoStrategy = new PedidoEletronicos()
pedidoEletronicoStrategy.setValor(100)

const freteComum = new FreteComum()
pedidoEletronicoStrategy.setTipoFrete(freteComum)

console.log('Frete Comum - ',pedidoEletronicoStrategy.calculaFrete())
