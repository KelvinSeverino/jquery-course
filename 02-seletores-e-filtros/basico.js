$(function (){
    //SELETOR DE ELEMENTO - Manipulando elemento <b>
    $("b").text("jQuery Essentials")
    //Pegando informacao no array do elemento <b> e exibindo no console do navegador
    //console.warn($("b")[0].offsetTop)
    //console.log($("b"))

    //SELETOR DE CLASSE - Mudando a cor
    $(".jquery").css("color", "red")

    //SELETOR DE ID
    $("#jquery").text("Id = jquery")

    //SELETOR QUE PEGA TODOS OS ELEMENTOS
    //$("*").css("border", "1px solid #ccc")

    //SELETOR QUE PEGA SOMENTE OS ELEMENTOS FILHOS DA DIV
    $("div *").css("border", "1px solid #ccc")

    //SELETOR MULTIPLO alterando css com varios parametros
    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius': "4px", //usar aspas simples quando tiver hifen
        padding: "10px",
        'font-size': "1.4em"
    })

    //SELETOR MULTIPLO - OUTRO MODO DE DECLARAR
    //$("b").add("p").css("font-size", "2em")
});