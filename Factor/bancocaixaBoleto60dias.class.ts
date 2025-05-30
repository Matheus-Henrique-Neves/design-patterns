import Boleto from "./boleto.class";

export default class BancoCaixaBoleto60Dias extends Boleto{
    constructor(valor:number){
        super(valor)
        this.jurus=0.1
        this.multa=0.2
    }
}