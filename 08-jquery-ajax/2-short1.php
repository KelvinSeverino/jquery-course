<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Shorthands Parte 1 | jQuery Essentials</title>

        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

        <style>
            *{
                font-family: 'Open Sans', serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
            }

            body{
                padding: 10%;
            }

            input{
                display: block;
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
            }

            button,
            .getdata{
                display: inline-block;
                padding: 10px;
                background: #09f;
                color: #fff;
                font-weight: bold;
                border: none;
                cursor: pointer;
            }
            button:hover,
            .getdata:hover{
                background: #006699;
            }

            .result{
                display: block;
                padding: 20px;
                background: #000;
                color: #fff;
                margin:40px 0 20px;
            }

        </style>
    </head>
    <body>
        <form action="create_user" method="post" enctype="multipart/form-data">
            <input type="text" name="course" value="jQuery Essentials"/>
            <input type="text" name="module" value="AJAX com jQuery"/>
            <button>Enviar Requisição</button>
        </form>

        <div class="result"></div>
        <span class="getdata">Obter dados</span>

        <script src="../js/jquery.js"></script>
        <script src="short1.js"></script>
    </body>
</html>