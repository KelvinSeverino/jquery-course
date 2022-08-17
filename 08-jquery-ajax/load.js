$(function(){
    var content = $(".content"); //Carregando conteudo na variavel
    var defaults = content.html(); //Padrao do conteudo
    var template = "load/load.html" //Busca fragmentos de html para carregar
    content.load(template + " #home");

    $("body").on("click", ".j_load", function (e) { //Monitora quando é feito um click na j_load
        e.preventDefault(); //Para o comportamento padrao do documento
        if ($(this).hasClass("active")) { //Verifica se a classe esta ativa/existe
            return;
        } else {
            $(".j_load").removeClass("active"); //Remove Classe active da j_load
            $(this).addClass("active"); //Adiciona classe active
        }

        var load_file = $(this).attr("href"); //Pega valor do link
        content.html(defaults).delay(400).fadeOut(100, function () {
            content.load(template + " #" + load_file, function (response, status, jqXHR) {
                console.log(response, status, jqXHR);
            }).fadeIn();
        });
    });
});