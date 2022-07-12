$(function(){
    //Aciona funcao ao clicar no elemento P
    $("p").on("click", function(){
        console.clear()

        //Verifica se possui seletor j
        if($(this).is(".j")){
            console.log("TRUE")
        }else{
            console.log("FALSE")
        }

        //
        if($(this).is(":first-of-type")){
            console.log("first")
        }
    })    

    //Filtra elemento correspondente a aquele que TENHA elemento/atributo ligado ao seletor
    $("p").has("span").append("<sup>Has SPAN</span>")

    //Filtra elemento correspondente a aquele que NÃO TENHA elemento/atributo ligado ao seletor
    $("p").not(":contains('jQuery')").css("color", "red")
    $("p").not(":eq(2)").css("border", "1px solid red")

    //Filtra elemento correspondente a aquele que TENHA elemento/atributo ligado ao seletor
    $("p").filter(":contains('jQuery')").css({
        color: "red",
        border: "1px solid red"
    })

    $("p").css({
        padding: "10px",
        background: "#eee"
    }).filter(function(index){
        return index % 2 === 1
    }).css("background", "#ccc")

    var mapa = $("p").map(function (indice, elemento){
        //exibindo no console o objeto
        console.log($(elemento))

        return "<p>" + indice + " - " + $(elemento).text() + "</p>"
    }).get().join("")

    $("<div>" + mapa + "</div>").appendTo("body")
})