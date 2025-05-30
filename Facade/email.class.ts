import Pedido from "./pedido.class";

export default class EmailPedido{
    constructor(private pedido: Pedido){

    }
    enviarEmail(msg:string){
        console.log(`email para ${this.pedido.consumidor.email}:${msg}`)

    }
}