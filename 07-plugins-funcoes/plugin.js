$(function () {

    //Chamando o plugin
    $(".normalize").normalize_h();
    $(window).resize(function () {
        $(".normalize").normalize_h();
    });

});