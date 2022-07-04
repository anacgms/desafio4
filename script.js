//1 - crie uma função que exiba uma mensagem no console
function name(nome){
    console.log(`olá ${nome}!`)
}

name("Ana")

 function nome(nome){
    console.log(`Bem-vindo(a), ${nome}!`)
}

nome("Carolina")

function about(nome, idade, estilo){
     console.log(`Meu nome é ${nome}, tenho ${idade} anos e amo escutar ${estilo}!`)
 }

about("Ana", 25, "tudo")

//4 - crie uma função que receba um filme, 
//uma música (parâmetros) e exiba no console

function musica(movie, music){
     console.log(`Meu filme favorito é ${movie} e minha música favorita é ${music}`)
 }

 musica("Um amor para recordar", "Envolver")


function conta(x){
    return x + 3
 }

 console.log(conta(5))
 console.log(conta(9))