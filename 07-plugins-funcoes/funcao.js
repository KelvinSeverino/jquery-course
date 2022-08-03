$(function (){
    //Chamadas de Funcao individual, sendo necessario informar cada elemento a ser modificado
    //normalizeH("div div");
    //normalizeH("div .p");
    
    //Chamada de funcao pela classe, ja pegando os elementos correspondentes
    normalizeHeight(".normalize");
    $(window).resize(function(){
        normalizeHeight(".normalize");
    });   

    //FUNCOES FICA NA PARTE FINAL DO CODIGO
    function normalizeHeight(element) {
        var maxHeight = {}; //Criando array

        //Percorrendo elemento pai do elemento a normalizar, ou seja, a div pai
        $.each($(element).parent(), function (i, e) {
            $(e).find(element).css("height", "auto");
            maxHeight = $(e).find(element).map(function(il, el){
                return $(el).height();
            }).get();
            
            $(e).find(element).height(Math.max.apply(this, maxHeight));
            //console.log(maxHeight);
        });
    }

    function normalizeHeight_Old(element){
        //Resetando o CSS
        $(element).css("height", "auto");

        //Pegando a maior altura do elemento
        var maxHeight = $(element).map(function (i, e) {
            return $(e).height();
        }).get();


        $(element).height(Math.max.apply(this, maxHeight));
        console.log(maxHeight);
    }
});
