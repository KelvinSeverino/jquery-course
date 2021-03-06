<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Encadeamento</title>

        <style>
            body{
                padding: 10%;
            }

            .article{
                padding: 20px;
                border: 1px solid #eee;
            }

            .article_header{
                margin-bottom: 20px;
                border-bottom: 1px solid #eee;
            }

            .article_link{
                display: inline-block;
                padding: 10px 20px;
                background: #006699;
                color: #fff;
                text-decoration: none;
            }

            .active{
                background: #bf7676;
                padding: 10px;
                color: #fff;
            }

            .a{
                padding-bottom: 3px;
                border-bottom: 3px solid #ccc;
            }
            
            .load{
                display: inline-block;
                padding: 10px 20px;
                background: #eee;
                color: #888;
                cursor: pointer;
            }
        </style>
    </head>
    <body>

        <article class="article">
            <header class="article_header">
                <h1>Curso jQuery Essentials</h1>
                <p>Aprender a trabalhar com a biblioteca javascript que está presente em mais de 77% dos principais sites do mundo. Escreva menos e faça mais.</p>
            </header>

            <div class="article_content">
                <p>Lorem Ipsum is simply dummy text of the <mark>printing and typesetting industry.</mark> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap <a href="#" title="Link">into electronic</a> typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing...</p>
                <p>Lorem Ipsum passages, <b>and more recently with desktop <a href="#" title="Link">into electronic</a> publishing software like Aldus PageMaker</b> including versions of Lorem Ipsum.</p>
            </div>
        </article>

        <script src="../js/jquery.js"></script>
        <script src="encadeamento.js"></script>
    </body>
</html>