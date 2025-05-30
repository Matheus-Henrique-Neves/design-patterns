import BancoCaixaBoleto10Dias from "./bancocaixaBoleto10dias.class";
import BancoCaixaBoleto30Dias from "./bancocaixaBoleto30dias.class";
import BancoCaixaBoleto60Dias from "./bancocaixaBoleto60dias.class";
import BoletoSimplesFactory from "./bancoCaixaSimplesFactory.class";
import Boleto from "./boleto.class";

export default class BancoCaixa {
    constructor(
        private boletoSimplesFactory: BoletoSimplesFactory
    ) { }

    public gerarBoleto(vencimento: number, valor: number): Boleto {
        const boleto = this.boletoSimplesFactory.criarBoleto(vencimento, valor)
        console.log(boleto)
        return boleto
    }
}

/*  public gerarBoleto(vencimento: number, valor: number): Boleto {
     //let boleto: Boleto
     
    /*  switch(vencimento){
         case 10:
             boleto = new BancoCaixaBoleto10Dias(valor)
             break
         case 30:
             boleto = new BancoCaixaBoleto30Dias(valor)
             break
         case 60:
             boleto = new BancoCaixaBoleto60Dias(valor)
             break
         default:
             throw new Error('Vencimento indisponível')
     }
     







     console.log(boleto)
     return boleto
 }
} */




