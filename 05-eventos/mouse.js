$(function (){

    //Funcao executa ao clicar no botao
    $(".j_click").click(function (event){
        $(this).off("click"); //Desliga a funcao click
        console.log(event);
        $("<di></div>").appendTo("body").html("<div>Event: <b>" + event.type + "</b>"); //Adiciona elemento HTML
    }).mousedown(function(event){ //Encadeando evento de soltar do mouse
        console.log(event.type);
    }).mouseup(function (event){ //Encadeando evento apertar do mouse
        console.log(event.type);
    });

    //Funcao de clicar duas vezes
    $(".j_dblclick").dblclick(function (event){
        event.preventDefault();
        $(this).off("dbclick");
        console.log(event);
        $("<di></div>").appendTo("body").html("<div>Event: <b>" + event.type + "</b>"); //Adiciona elemento HTML
    });

    //Funcao de contextMenu, clicar com botao direito do mouse
    $(".j_contextmenu").contextmenu(function(event){
        event.preventDefault();
        console.log(event);
        $(this).css("position", "relative").append("<span class='menu'>Menu Desabilitado</span>");
        $(this).find("span").slideDown();

        //Evento de tirar o mouse do elemento
        $(this).mouseleave(function(){
            console.log(event);
            $(this).off("mouseleave").find("span").slideUp();
        })
    });

    //Funcao de passar mouse por cima
    $(".j_hover").hover(function (event){
        console.log(event);
        if(!$(".hover").length){ //Conta os elementos
            $("<div class='hover'></div>").appendTo("body").html("<div>Event:" + event.type + "</div>");
        } else {
            $(".hover div").append(" | Event: " + event.type);
        }
    }).mouseenter(function(){ //Passando mouse em cima
        $(this).text("Clique Aqui!");
    }).mouseleave(function(){ //Tirando mouse
        $(this).text("Saiu!");
    }).click(function(){ //Clicando
        $(this).text("Clicou!").off("hover mouseleave mouseenter");
    });

    //Funcao para pegar movimento do mouse
    $(".j_mousemove").mousemove(function(event){
        if (!$(this).hasClass("stop")) {
            $(this).offset({top: event.pageY - $(this).outerHeight() / 2, left: event.pageX - $(this).outerWidth() / 2});
        }
    }).click(function () {
        $(this).toggleClass("stop");
    });

    //Funcao para pegar entrada do mouse no elemento
    $(".j_over").mouseover(function (event) {
        console.log("-");
        console.log("Entrou em " + event.target);
    }).mouseout(function (event) { //Saindo do elemento
        console.log("-");
        console.log("Saiu de " + event.target);
    });
});