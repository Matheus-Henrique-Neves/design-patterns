class TopPagAdapter implements Gateway{
    private topPag:TopPag
    private Nuncartao:string|null=null
    private cvv:string|null=null
    constructor(topPag:TopPag){
        this.topPag=topPag
    }
    setValor(valor: number): void {
        this.topPag.setValortotal(valor)
    }
    setParcelas(parcelas: number): void {
        this.topPag.setQuantidadeParcelas(parcelas)
    }
    setNumeroCartao(numeroCartao: string): void {
        this.Nuncartao=numeroCartao;
        if(this.cvv !== null){
            this.topPag.setCartao(this.Nuncartao,this.cvv)
        }
    }
    setCVV(cvv: string): void {
        this.cvv=cvv
        if(this.Nuncartao !== null){
            this.topPag.setCartao(this.Nuncartao,this.cvv)
        }
    }

    validarCartao(): boolean {
        return true
    }
    realizarPagamento(): boolean {
        return this.topPag.realizarPagamento()
    }
}