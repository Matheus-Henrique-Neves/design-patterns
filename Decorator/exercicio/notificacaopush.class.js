"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notificacaoDecorator_class_1 = __importDefault(require("./notificacaoDecorator.class"));
class notificacaoPush extends notificacaoDecorator_class_1.default {
    enviar(menssagem) {
        this.notificacao.enviar(menssagem);
        console.log('enviando Push: ' + menssagem);
    }
}
exports.default = notificacaoPush;
