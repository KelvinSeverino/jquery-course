$(function(){
    $(".jquery_essentials").html("JQuery inicializado com Gatilho")
    
    console.group("Mensagens Gerais")
    console.log("jQuery Essentials")
    console.info("jQuery carregado com sucesso")
    console.warn("Um Alerta")
    console.error("Um Erro")
    console.groupEnd()

    var cadastro = false

    console.group("Cadastro de usuário")
    console.info("Cadastro iniciado")
    if(cadastro === true){
        console.log("Cadastro realizado")
    }else{
        console.warn("Erro ao cadastrar")
    }
    console.groupEnd()
});