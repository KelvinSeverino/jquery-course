//Plugin esta dentro de uma IIF
(function () {
    //Criando namespace com $.fn.normalize_h
    $.fn.normalize_h = function () {
        var element = this; //Reservando objeto original em variavel
        var maxHeight = {}; //Criando array

        //Percorrendo elemento pai
        $.each(element.parent(), function (i, e) {
            $(e).find(element).css("height", "auto");
            maxHeight = $(e).find(element).map(function (il, el) {
                return $(el).height();
            }).get();

            //console.log(maxHeight);
            $(e).find(element).height(Math.max.apply(this, maxHeight));
        });
    };
}(jQuery));