import PessoaFisicaReceitaFederal from "./pessoafisicaReceitaFedereal.class"

export default class Usuario {
    private nome: string
    private cpf: string
    private idade: number
    private pessoaFisica: PessoaFisicaReceitaFederal

    constructor(nome: string, cpf: string, idade: number){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade

        this.pessoaFisica = new PessoaFisicaReceitaFederal(cpf)
    }

    async validarNome(): Promise<boolean> {
        const nomeReceita = await this.pessoaFisica.getNome()
        return this.nome === nomeReceita
    }

    async verificarMaioridade(): Promise<boolean> {
        const idadeReceita = await this.pessoaFisica.getIdade()
        return this.idade >= 18 && this.idade === idadeReceita
    }

    getNome(): string {
        return this.nome
    }

    getCpf(): string {
        return this.cpf
    }

    getIdade(): number {
        return this.idade
    }
}