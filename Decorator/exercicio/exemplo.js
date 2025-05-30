"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notificacaoSimples_class_1 = __importDefault(require("./notificacaoSimples.class"));
const notificacaoSMS_class_1 = __importDefault(require("./notificacaoSMS.class"));
const notificacaopush_class_1 = __importDefault(require("./notificacaopush.class"));
const notificacaoEmail_class_1 = __importDefault(require("./notificacaoEmail.class"));
let notificacao = new notificacaoSimples_class_1.default();
// Adicionando envio por e-mail
notificacao = new notificacaoEmail_class_1.default(notificacao);
// Adicionando envio por SMS
notificacao = new notificacaoSMS_class_1.default(notificacao);
// Adicionando envio por push notification
notificacao = new notificacaopush_class_1.default(notificacao);
// Enviando mensagem
notificacao.enviar("ESTUDE MAIS BURRU BURRU BURRU");
