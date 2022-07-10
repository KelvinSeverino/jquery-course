$(function(){
    //Pegando informacoes de largura da primeira div
    console.group("W")
    console.log($("div:first").width())
    console.log($("div:first").innerWidth())
    console.log($("div:first").outerWidth())
    console.groupEnd()

    //Pegando informacoes de altura da primeira div
    console.group("H")
    console.log($("div:first").height())
    console.log($("div:first").innerHeight())
    console.log($("div:first").outerHeight())
    console.groupEnd()

    //Alterando CSS
    $("div").css("float", "left").outerWidth("50%")

    var h = 0
    $("div").each(function (i, el){
        if($(el).outerHeight() > h){
            h = $(el).outerHeight()
        }
    }).outerHeight(h)
})