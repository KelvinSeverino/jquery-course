$(function (){
    //ELEMENTO DENTRO DE OUTRO
    $("div p").css("color", "red")

    $("body *").css({
        display: "block",
        "margin-botton": "10px"
    })

    //Pegando elemento filho direto do article
    $("article > p").css("color", "blue")

    //Pega Elemento Anterior mais o Posterior - imediatamente seguido pelo Posterior 
    //Usando * serve para todos os elementos relacionados
    $("div + *").css("background", "yellow")

    //Pega todos os elementos que são filhos do elemento DIV
    $("div ~ p").text("Irmão")

});