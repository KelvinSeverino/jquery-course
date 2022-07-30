$(function (){
    var instruction = $(".result b");

    //FOCUS | CHANGE
    $("input").focus(function () { //Pega o input quando tiver foco nele
        console.log("FOCUS");
    }).focusin(function () { //Quando da o foco no elemento
        instruction.text("Informe o " + $(this).attr("placeholder").replace(":", ""));
    }).focusout(function () { //Quando o foco sai do elemento
        if (!$(this).val()) { //Se nao preencher o formulario
            instruction.text("Hey, e o título?");
        }
    }).change(function () {
        instruction.text($(this).val());
    });

    //BLUR - Pega diretamente o elemento selecionado ao sair do foco
    $("*").blur(function () {
        console.log("BLUR: " + this);
    }).focusout(function () {
        console.log("OUT: " + this);
    });

    //SELECT
    $("*").select(function (e) {
        console.log(e);
    });

    $("input, textarea").focus(function () {
        $(this).select();
        document.execCommand("copy");
    });

    //SUBMIT
    $("form").on("submit", function (e) {
        e.preventDefault();

        var form = $(this);
        var data = $(this).serialize(); //Pega cada campo do formulario e recupera o NAME

        console.log(data);

//        $.post("api.php", {data: data}, function (retorno) {
//
//        });

        form.find("button").text("Carregando!");
    });
})