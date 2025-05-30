import notificacaoDecorator from "./notificacaoDecorator.class"


export default class notificacaoPush extends notificacaoDecorator {
enviar(menssagem: string): void {
    this.notificacao.enviar(menssagem)
    console.log('enviando Push: '+menssagem)
}


 
}