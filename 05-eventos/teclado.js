$(function () { 
    var input = $("input");
    var textarea = $("textarea");

    input.keypress(function (e){ //Funcao keypress nao detecta quando pressiona teclas shift, ctrl...etc
        console.log("PRESS: " + e.which);
    }).keydown(function (e){ //Funcao keypress DETECTA todas as teclas
        console.log("DOWN: " + e.which);
        console.log(e.metaKey);

        if(e.metaKey){
            if(e.which === 85){
                alert("Apertou U!");
            }
            if(event.which === 74){
                alert("Apertou J!");
            }
        }
    }).keyup(function (){ //Evento que monitora quando solta o dedo da tecla
        console.log("UP");
    });

    //Evento que monitora quando solta o dedo da tecla
    $("input").on("keyup", function (e) {
        var input = $(this);
        //input.val(input.val().toUpperCase()); //Possui Bug ao adicionar letra no começo, ele leva o marcador para o final

        if (!$(".result").find("h1").length) {
            $(".result").prepend("<h1>" + input.val().toUpperCase() + "</h1>");
        } else {
            $(".result h1").text(input.val().toUpperCase());
        }
    });

    $("textarea").on("keyup", function (e) {
        var textarea = $(this);

        if (!$(".result").find("div").length) {
            $(".result").append("<div><p>" + textarea.val() + "</p></div>"); //Adiciona texto na div
        } else {
            $(".result div").html("<p>" + textarea.val().replace(/\n/g, "</p><p>") + "</p>"); //Cada vez que quebra a linha, instancia nova paragrafo
        }
    });
    
    //Redimensionando elemento
    $(window).resize(function (event) {
        console.log($(this).outerWidth());
        //console.log(event);
    });
    
    //Evento de Scroll do mouse
    $("body").height(1500);
    $(window).scroll(function (event) {
        console.log($(this).scrollTop()); //Mostra de acordo com a distancia
        //console.log(event);
    });
});
