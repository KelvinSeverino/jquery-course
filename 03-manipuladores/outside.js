$(function (){
    //Pegando conteudo da tag title e passando para variavel
    var title = $("title").text()

    $(".j").before("<h1>" + title + "</h1>");

    //Encapsulando texto e inserindo antes da classe j acima
    $("<p><b>Lorem Ipsumis</b> simply dummy text of the printing and typesetting industry.</p>").insertBefore($(".j"))

    var oldText = "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    //Adiciona o texto da variavel para depois da tag classe j
    $(".j").after(oldText)

    //Adiciona o tag A depois da tag classe j
    $(".j").after("<a class='a' href='#'>Continue Lendo...</a>")

    //Insere a tag A após a Tag P na ultima posicao
    $(".a").insertAfter("p:last")

})