$(function (){
    //FILTRO PARA NAO APLICAR CSS NA CLASSE p
    $("p:not('.p')").css("font-weight", "bold")

    //FILTRO PEGANDO A POSICAO
    $("p:first").css("color", "red")
    $("p:last").css("color", "red")

    //FILTRO PEGANDO TODOS OS ELEMENTOS EM POSICAO PAR
    $("p:even").css("background", "#eee")
    //FILTRO PEGANDO TODOS OS ELEMENTOS EM POSICAO IMPAR
    $("p:odd").css("background", "#ccc")

    //FILTRO PEGANDO O ELEMENTO NA POSICAO 4
    $("p:eq(4)").text("jQuery Essentials")
    //FILTRO PEGANDO O ELEMENTOS ACIMA DA POSICAO 4
    $("p:gt(4)").text("Seletores GT")
    //FILTRO PEGANDO O ELEMENTOS ABAIXO DA POSICAO 4
    $("p:lt(4)").text("Seletores LT")    
    //FILTRO PEGANDO OS ULTIMOS ELEMENTOS
    //$("p:gt(-3)").text("Seletores GT")

    $(".list :header").css({
        'font-size': "1.4em",
        color: "#888"
    })

    //MUDANDO COR DO ELEMENTO
    $(".list :header span").css("color", "blue")

    //FUNCAO PARA ANIMAR ELEMENTO EM LOOP
    function animar_elemento(elemento){
        $(elemento).fadeToggle(400, function(){
            animar_elemento(elemento)
        });
    }

    //FUNCAO PARA INCREMENTAR E ALTERAR VALOR EM TELA
    var num = 1
    setInterval(function(){
        $(":animated").text(num) //funcao que ira animar o valor em tela
        num++
    }, 800)

    //CHAMANDO FUNCAO
    animar_elemento(".list span")

    //FILTRO DE ELEMENTO COM FOCUS
    $(":focus").css("background", "grey")

    //FILTRO PARA RETORNAR TODOS OS OBJETOS PARA EXECUTAR E MANIPULAR NO JQUERY
    console.log($(":root"))
})