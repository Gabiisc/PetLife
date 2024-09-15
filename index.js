var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})
















 

// document= propriedade
// query= tal como tag, class e id no CSS

// console serve para aparecer a interação do JS no navegador

// #inicio = ID do CSS

// console.log(
// document.querySelectorAll(#inicio)
// )

// document.getElementById() - Serve para selecionar uma ID específica

//var elementosDuvida = document.querySelectorAll('.duvida')

//var elemento = 50
//var= variavel
//elementosDuvidas= nome que eu quiser para ela e 
//50= valor que eu atribuir

//alert(elemento) - Fará aparecer na tela este valor


///////////////////////////////////////////////
//var elementosDuvida = document.querySelectorAll('.duvida') = pegando todos os elementos

//elementosDuvida.forEach(function (duvida) = executar uma função para cada elemento duvida

//duvida.addEventListener('click', function = nessa função, será acrescido a ação de click

//duvida.classlist.add('fundo-Verde') = essa ação de click vai executar o "fundo-verde"