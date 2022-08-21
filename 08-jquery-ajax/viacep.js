(function () {
    $.fn.viacep = function (target, callback) { //Passando o objeto CEP, e retornando dados pelo callback
        var input = this; //Objeto jQuery
        input.on("keyup", function (e) { //Monitora quando solta a tecla
            e.preventDefault(); //Trava evento padrao
            var cep = input.val(); //Pega valor do campo
            var len = cep.length; //Pega quantidade de caracteres
            var url = "https://viacep.com.br/ws/" + cep + "/json"; //Criando url com cep digitado

            if (len === 8) { //Verifica se possui 8 caracteres
                //Monta classe no HTML para informar
                $(target).html("<p class='load'>Aguarde, obtendo endereço...</p>");

                //Pega o JSON de resposta da API
                $.getJSON(url, function (response) {
                    if (!response.erro) {
                        var viacep = "<p>";
                        //Montando variavel com index de resposta da API
                        viacep += response.localidade + "/" + response.uf + "<br>";
                        viacep += response.logradouro + "<br>";
                        viacep += response.bairro;
                        viacep += "</p>";

                        //Some com a classe load apos obter variavel acima
                        $(".load").fadeOut(200, function () {
                            $(this).remove();
                            $(target).html(viacep);
                        });

                        //Retorna o objeto de resposta
                        callback(response);
                    } else {
                        if ($(".load").length) {
                            $(".load").fadeOut(200, function () {
                                $(this).remove();
                                $(target).html("<p>Erro ao consultar o endereço!</p>");
                            });
                        } else {
                            $(target).html("<p>Erro ao consultar o endereço!</p>");
                        }
                        callback({
                            erro: "Endereço não encontrado!"
                        });
                    }
                });
            }
        });
        return this;
    };
}(jQuery));