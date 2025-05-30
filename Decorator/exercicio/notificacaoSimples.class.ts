import notificacao from "./notificacao.class"

export default class notificacaoSimples extends notificacao{

public enviar(menssagem: string): void {
    console.log(`notificação simples : ${menssagem} \n`)
}



}