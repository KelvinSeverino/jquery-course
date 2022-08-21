$(function () {
    var url = "short1.php";

    //POST
    $("form").submit(function (e) {
        e.preventDefault();
        var form_data = $("form").serialize();

        $.post(url, form_data, function (response) {
            responseThis(response, ".result");
        }, "json"); //Informando o formato de retorno para jQuery
    });

    //GET
    $(".getdata").click(function (e) {
        e.preventDefault();
        $.get(url, {user: "Kelvin Severino"}, function (response) {
            responseThis(response, ".result"); 
        }, 'json');  //Informando o formato de retorno para jQuery
    });

    //Metodo para tratar o retorno e enviar pro HTML
    function responseThis(response, target) {
        console.clear();
        console.log(response);
        if (response.success) {
            var return_response = "<h1>" + response.course + "</h1>";
            return_response += "<p>" + response.module + "</p>";
            return_response += response.student ? "<p>" + response.student + "</p>" : "";
            $(target).prepend(return_response);
        } else {
            $(target).prepend("<p>Erro ao processar!</p>");
        }
    }
});