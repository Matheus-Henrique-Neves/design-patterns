import Notificacao from "./notificacao.class";


export default abstract class notificacaoDecorator extends Notificacao{
protected notificacao : Notificacao

constructor(notificacao:Notificacao){
    super()
    this.notificacao = notificacao
}

abstract enviar(menssagem: string): void;




}