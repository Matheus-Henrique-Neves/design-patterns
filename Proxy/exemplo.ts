import Usuario from "./usuario.class";

// const usuario = new Usuario('Teste de nome','123456789',25)
// console.log(usuario.getNome())

/*
Permissao de Menu
const usuario = getUsuario(1) -> new usuario(dados do bd)
*/

/*
Custo de carregamento é executado aqui - 5seg + 2seg da fn()
*/
(async () => {
    const usuario = new Usuario('Teste de nome','123456789',25)
    console.log(usuario.getNome()) // feito na hora sem atraso

    const maioridade = await usuario.verificarMaioridade()
    console.log(maioridade) // leva 7seg
    
})