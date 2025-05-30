export default abstract class Boleto{
    protected valor : number=0
    protected jurus: number =0
    protected desconto: number =0
    protected multa : number =0

constructor (valor :number){
    this.valor = valor
}
public calcularJurus():number{
    return this.valor * this.jurus
}
public calcularMulta():number{
    return this.valor * this.multa
}
public calcularDesconto():number{
    return this.valor * this.desconto
}





}