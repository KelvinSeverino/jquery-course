$(function () {
    //Realizando injecao de dependencia, chamando plugin do viacep.js
    $.getScript("viacep.js", function () { 
        $(".viacep").viacep(".result", function (data) {
            $.each(data, function (i, e) {
                //console.log(i + ": " + e);
            });
        });
    });
});