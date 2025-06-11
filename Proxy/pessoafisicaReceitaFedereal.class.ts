import ReceitaFederalInterface from "./receitafederal.interface";

export default class PessoaFisicaReceitaFederal implements ReceitaFederalInterface{
    private nome: string
    private cpf: string
    private idade: number
    private cpfAtivo: boolean

    constructor(cpf: string) {
        this.cpf = cpf;
        this.nome = "teste nome"
        this.idade = 25
        this.cpfAtivo = true

        this.sleep(5000).then(() => {
            console.log("pessoa fisica criada com sucesso!")
        })
    }
    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async getNome(): Promise<string> {
        await this.sleep(2000)
        return this.nome
    }

    async getIdade(): Promise<number> {
        await this.sleep(2000)
        return this.idade
    }

    async CPFAtivo(): Promise<boolean> {
        await this.sleep(3000)
        return this.cpfAtivo
    }


}