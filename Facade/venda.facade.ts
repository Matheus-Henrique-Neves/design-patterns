import Pedido from "./pedido.class";
import EmailPedido from "./email.class";
import Pagamento from "./Pagmento/pagamento.class";
import Consumidor from "./consumidor.class";
import Produto from "./produto.class";
import PagamentoCredito from "./Pagmento/pagamentoCredito.class";
import PagamentoBoleto from "./Pagmento/pagamentoBoleto.class";

export default class VendaFacade {
private pedido:Pedido
private email:EmailPedido
private pagamento:Pagamento|null=null;


constructor(consumidor:Consumidor){
    this.pedido = new Pedido(consumidor)
    this.email = new EmailPedido(this.pedido)
}

addProduto(produto:Produto){
    this.pedido.addProduto(produto)
}

pedidoCredito(){
   this.pagamento = new PagamentoCredito(this.pedido)
    if(this.pagamento.realizarPagamento()){
        this.email.enviarEmail("O pagamento deu certo")
    }else{
        this.email.enviarEmail("O pagamento deu errado")
    }  
}
PedidoBoleto(){
    this.pagamento = new PagamentoBoleto(this.pedido)
    if(this.pagamento.realizarPagamento()){
        this.email.enviarEmail("O pagamento deu certo")
    }else{
        this.email.enviarEmail("O pagamento deu errado")
    } 
}




}