import Boleto from "./boleto.class";

export default class BancoCaixaBoleto10Dias extends Boleto{
    constructor(valor:number){
        super(valor)
        this.jurus=0.02
        this.desconto=0.1
        this.multa=0.05
    }
}