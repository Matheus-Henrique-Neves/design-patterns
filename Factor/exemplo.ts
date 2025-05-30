import BancoCaixa from "./bancoCaixa.class"
import BoletoSimplesFactory from "./bancoCaixaSimplesFactory.class"


const boletoSimplesFactory = new BoletoSimplesFactory()
const banco = new BancoCaixa(boletoSimplesFactory)

banco.gerarBoleto(10,100)