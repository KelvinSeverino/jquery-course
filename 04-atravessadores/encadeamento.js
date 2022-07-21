$(function () {
    //Pegando seletor
    var el = $(".article");

    //Formatando seletor e usando funcao para manter encadeamento
    // .end() - termina o filtro recente em uma cadeia de filtros
    // .add() - vai adicionar objetos ao conjuntos de elemento selecionados e existentes
    el.css({
        "font-family": "Open Sans, serif",
        "font-size": "1em",
        "margin-bottom": "20px"
    }).end().add(".article_content p").css({
        "font-size": "0.8em"
    });

    var btn = "<p class='more load'>Carregar Mais 1</p>";
    $(btn).appendTo(el.parent());

    //Ao clicar no elemento .more que esta dentro de body - Fez isso, pois no carregamento do site, o more nao existe, por isso olha pro Pai
    $("body").on("click", ".more", function () {
        $(this).stop().fadeOut(100, function () { //elemento btn some da tela
            $(".article:last") //pega ultimo atigo
                    .clone() //clona aritgo
                    .add(btn) //adiciona btn
                    .css("display", "none") //carrega oculto
                    .appendTo($(".article:last").parent()) //adiciona ao ultimo artigo
                    .slideDown(300, function () { //Faz ele ser apresentado com efeito
                        $("html, body").stop().animate({scrollTop: $(this).offset().top}, 1000);
                    });
        });

        console.clear();
        console.log($(".article").add());
        console.log($(".article").addBack());
    });
});