$(function(){
    //Foreach percorrendo elementos P
    $.each($("p"), function(index, elemento){
        //Encapsulando elemento obtido acima no foreach
        var elemento = $(elemento)
        elemento.html(elemento.html() + " - " + index)  
        
        //Mudando cor
        $("p").eq(1).css("color", "red")
        $("p").eq(2).css("color", "orange")
        $("p").first().css("color", "silver")
        $("p").last().css("color", "pink")

        //Alterando
        $("p").slice(0, 4).css({
            background: "#000",
            padding: "10px"
        })
    })
})