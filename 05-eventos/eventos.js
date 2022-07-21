$(function () {
    var content = "<div>Opa, esta div é pós carregamento <p class='j_close button'>Remover</p></div>";

    //Adicionando ao corpo da pagina quando clicar no button
    $(".j_button").on("click", function(event){
        console.log(event);
        $(content).prependTo("body")
    })

    //Colocando jQuery para monitorar elemento body que ja existe, pois o j_close é criado após carregamento do DOM
    $("body").on("click", ".j_close", function(){
        console.log("remover");
        $(this).parent().remove(); //Pegando elemento parente do encapsulado, no caso o j_close
    });

    //Monitorando o ato do mouse sair do jclose
    //data = tudo que está dentro do escopo {text: ...}
    //function(e) reservando e para monitorar os eventos
    $("body").on("click mouseleave", ".j_close", {text: "<p class='clear'>Removido</p>"}, function(e){
        $("body").prepend(e.data.text);
        $(this).parent("div").remove();
    })

    //Este codigo sera rodado somente uma vez, pois usa a funcao ONE
    $(".j_button").one("click", function(){
        console.log("Primeiro click");
    })

    //Utilizando evento trigger, um evento gatilho para rodar funcoes automaticamente
    $(".j_button").on("jQ.remove", function(){
        $(".clear").remove();
        console.log("jQ.remove Executado!");
    }).on("click", function(){ //Encadeando evento, poderia ser feito separando as funcoes também
        var cc = $(".clear").length; //Contando quantos elmentos clear existem no DOM
        if(cc >= 1){
            $(this).trigger("jQ.remove"); //Executando funcao trigger, ou seja o evento acima
        }
    });

    //.click() funciona igual ao on.("click"), exceto que no on.("click") pode-se passar parametros data conforme usado acima, o .click() seria algo mais simples
    $("div p").click(function(){
        console.log("CLICK");

        //Pegando input e encpsulando na variavel
        var input = $(this).parent().find("input");

        //Monitorando evento focus ao clicar no "input nele!"
        input.focus(function(){
            console.log("FOCUSED");
        });

        //Ao clicar no P, o focus sera criado
        //input.trigger("focus"); 

        //Executando somente o evento atrelado ao jQUERY, ou seja, o evento focus
        input.triggerHandler("focus");

        //Desligando evento
        input.off("focus");
        $(this).off("click").on("click", function(){
            console.warn("Outro Click");
        })
    })
});
