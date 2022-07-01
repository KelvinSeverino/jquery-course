$(function(){
    //FILTRANDO SOMENTE P QUE TENHAM TEXTO OU ELEMENTO INTERNO
    $("p:parent").css("background", "red")

    //FILTRANDO SOMENTE P QUE ESTEJA VAZIO
    $("p:empty").html("<b>Este está vazio!</b>")

    //FILTRANDO PELO CONTEUDO NO ELEMENTO
    $("p:contains('Essentials')").css("color", "#fff")
    

    //PEGA O ELEMENTO B
    $("p:has('B')").fadeOut()
})