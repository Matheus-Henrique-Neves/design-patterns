import notificacaoDecorator from "./notificacaoDecorator.class"


export default class notificacaoEmail extends notificacaoDecorator {
enviar(menssagem: string): void {
    this.notificacao.enviar(menssagem)
    console.log('enviando EMAIL: '+menssagem)
}


 
}