import Consumidor from "./consumidor.class"
/* import EmailPedido from "./email.class"
import PagamentoBoleto from "./Pagmento/pagamentoBoleto.class" 
import Pedido from "./pedido.class" */
import Produto from "./produto.class"
import VendaFacade from "./venda.facade"

const consumidor = new Consumidor ("teste" , "12345678900", "email@email.com")

const produto1 = new Produto("produto 1", "desc", 80.49)
const produto2 = new Produto("produto 2", "desc", 50.49)
const produto3 = new Produto("produto 3", "desc", 89.49)

/*  const pedido = new Pedido(consumidor)*/
/* pedido.addProduto(produto1)
pedido.addProduto(produto2)
pedido.addProduto(produto3)


const pagamento = new PagamentoBoleto(pedido)
const email = new EmailPedido(pedido)

if(pagamento.realizarPagamento()){
    email.enviarEmail("pagamento com sucesso")
}else{
    email.enviarEmail("pagamento com Problema")
} */
const vendaFacade = new VendaFacade(consumidor)
vendaFacade.addProduto(produto1)
vendaFacade.addProduto(produto2)
vendaFacade.addProduto(produto3)

vendaFacade.PedidoBoleto()
