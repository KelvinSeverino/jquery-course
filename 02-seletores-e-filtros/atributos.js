$(function(){
    //PEGA A EXISTENCIA DE ATRIBUTO
    $("[class]").css("background", "#ccc")

    //PEGA o ATRIBUTO
    $("[data-jquery='true']").css("background", "#006699")

    //PEGA O ATRIBUTO DIFERENTE
    $("a[title!='Link']").css("background", "red")

    //PEGA CLASSE QUE COMECE COM jquery
    $("[class^='jquery']").css("background", "#0099ff")

    //PEGA CLASSE QUE TERMINA COM div
    $("[class$='div']").css("color", "#fff")

    //PEGA CLASSE ONDE O VALOR APARECE NELE
    $("[class*='r'").css("font-weight", "bold")

    //PEGA CLASSE ONDE O VALOR É IGUAL DE FATO
    $("[class~='jquery'").css("text-transform", "uppercase")

    //PEGA CLASSE NO MESMO ESCOPO
    $("[class|='jquery-essentials']").css("border-bottom", "3px solid red")

    //PEGA CLASSE ONDE CONTENHA
    $("[class*='jquery']").css("color", "pink")

    //PEGA CLASSE COM ATRIBUITO ESPECIFICO
    $("[class*='jquery'][data-jquery]").css("text-transform", "uppercase")
    
})