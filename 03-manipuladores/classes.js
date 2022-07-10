$(function(){

    //Manipulando atributo CSS
    $("p").css("color", "blue")

    //Manipulando VARIOS atributos CSS
    $("p").css({
        color: "#555",
        //"border-bottom": "1px solid #ccc"
    })

    //OBS:. Atributos da tag HTML são class, id, data
    //Pegando valor do atributo ID e atualizando
    var atributo = $(".segunda").attr("id", "segundo")

    //Exibindo no console
    console.log(atributo.attr("id"))

    //Verificando Propriedade checked do elemento Input
    console.warn($("input").prop("checked"))
    //Exibindo atributo da propriedade
    console.warn($("input").attr("checked"))

    //Alterando valor
    $("input").val("nome")
    //Pegando e exibindo valor    
    console.warn($("input").val())

    //Clonando elemento e alterando informacao
    $(".segunda").clone().appendTo("body").html("<b>BoraProgramar!</b>")

    //Quando clicar no elemento div
    $("div").on("click", function(){
        //toggleClass faz a mesma coisa q abaixo, mas perde o verificador para rodar outras funcoes com o atributo
        //$(this).toggleClass("add")

        //Se exstir classe
        if($(this).hasClass("add")){
            //Remove classe
            $(this).removeClass("add")
            $(this).find("p").slideUp()
            //Removendo atributo
            $("input").removeAttr("checked")
        }else{
            //Remove classe
            $(this).addClass("add")
            $(this).find("p").slideDown()
            //Adicionando atributo no checked
            $("input").attr("checked", "checked")
        }
    })

})