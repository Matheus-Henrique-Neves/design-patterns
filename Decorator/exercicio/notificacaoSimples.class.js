"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notificacao_class_1 = __importDefault(require("./notificacao.class"));
class notificacaoSimples extends notificacao_class_1.default {
    enviar(menssagem) {
        console.log(`notificação simples : ${menssagem} \n`);
    }
}
exports.default = notificacaoSimples;
