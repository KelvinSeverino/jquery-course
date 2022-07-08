$(function (){
    //Encapsula elemento em objeto atraves da classe selecionada e usa funcao para passar texto pro HTML
    //$(".j").text("#Bora Codar!")
    
    //Pega o texto que esta no HTML    
    var text = $(".j").text()

    //Pega o texto com a marcação do HTML 
    var html = $(".j").html() 

    //Jogando o conteudo da variavel text na div com class e
    //$(".e").text(text)
    //$(".e").text(html)
    //$(".e").html(html)

    //Inserindo o conteudo como ultimo recurso no HTML e Concatenando o resultado
    $(".e").append("<p>"+ text +"</p>")
    $(".e").append("<p>"+ html +"</p>")

    //Movendo conteudo para div
    $(".a").appendTo($(".e"))

    //Colocar conteudo no começo da div .e
    $(".e").prepend("<h2>Resultados:</h2>")
    //Joga dentro da div .e acima do primeiro P
    $("<p>Exemplos:</p>").prependTo($(".e p:first"))
})