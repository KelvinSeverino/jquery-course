$(function(){
    //Adiciona os elementos dentro de uma div para CADA elemento
    //$("p").wrap("<div>");

    //Adiciona os elementos dentro de uma UNICA div
    $("p").wrapAll("<div>");

    //Adiciona os elementos dentro de um span para cada P respeitando o realizado acima
    $("p").wrapInner("<span>");

    //Remove tag que envolve elmento Span é envolvido pelo P
    $("span").unwrap("p");

    //Adiciona tag H2 para envolver da tag span
    $("span").wrap("<h2>");
})