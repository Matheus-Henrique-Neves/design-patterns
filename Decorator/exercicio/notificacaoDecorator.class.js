"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notificacao_class_1 = __importDefault(require("./notificacao.class"));
class notificacaoDecorator extends notificacao_class_1.default {
    constructor(notificacao) {
        super();
        this.notificacao = notificacao;
    }
}
exports.default = notificacaoDecorator;
