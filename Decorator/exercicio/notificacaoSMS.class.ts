import notificacaoDecorator from "./notificacaoDecorator.class"


export default class notificacaoSMS extends notificacaoDecorator {
enviar(menssagem: string): void {
    this.notificacao.enviar(menssagem)
    console.log('enviando SMS: '+menssagem)
}


 
}