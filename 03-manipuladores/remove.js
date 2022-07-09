$(function(){

    // Executando funcao visual fadeout por 2seg e apos isso remove o elemento do DOM
    //$(this) sempre é referente a quem esta logo antes da abertura da chaves, no caso elemento $(".b")
    /*
    $(".b").fadeOut(2000, function(){
        $(this).remove()
    })
    */

    //Removendo elemento do DOM
    $(".b").remove()

    //Limpa conteudo do elemento d
    $(".d").empty()

    //Executando funcao de espera por 2seg, e apos isso roda comando text
    setTimeout(function(){        
        //Inserindo texto no elemento .d
        $(".d").text("Bora Programar!")
    }, 2000)

    //Quando clicar no elemento P, sera executado uma funcao
    $("p").on("click", function(){
        //adiciona uma classe active dentro do escopo, ou seja, dentro de P
        $(this).toggleClass("active")
    })

    //Cria variavel vazia
    var p

    //Quando clicar no elemento de botao, sera executado uma funcao
    $(".button").on("click", function(){
        if(p){
            //Adiciona elemento p na classe r
            p.appendTo(".r");
            p = null
        }else{
            //Remove elemento p, porem mantem ativa as funcoes
            p = $("p").detach()
        }
    })


    var href = $(".e").text()
    //Substitui o elemento por um novo elemento
    $(".e").replaceWith("<p><a target='_blank' href='https://" + href + "'>" + href +"</a></p>");

    //Substitui o conteudo de todos os elementos P
    $("<p>Bora Programar!</p>").replaceAll("p")
})