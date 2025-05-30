import notificacaoSimples from "./notificacaoSimples.class";
import notificacaoSMS from "./notificacaoSMS.class";
import notificacaoPush from "./notificacaopush.class";
import notificacaoEmail from "./notificacaoEmail.class";
let notificacao = new notificacaoSimples();
// Adicionando envio por e-mail
notificacao = new notificacaoEmail(notificacao);
// Adicionando envio por SMS
notificacao = new notificacaoSMS(notificacao);
// Adicionando envio por push notification
notificacao = new notificacaoPush(notificacao);
// Enviando mensagem
notificacao.enviar("ESTUDE MAIS BURRU BURRU BURRU");
