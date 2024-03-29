<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Shorthands Parte 2 | jQuery Essentials</title>

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

            button{
                display: inline-block;
                padding: 10px;
                background: #09f;
                color: #fff;
                font-weight: bold;
                border: none;
                cursor: pointer;
            }

            .result{
                padding: 20px;
                background: #000;
                color: #fff;
                font-size: 0.875em;
            }
        </style>
    </head>
    <body>
        <input type="text" class="viacep" name="cep" placeholder="Buscar Cep:"/>
        <div class="result"></div>

        <script src="../js/jquery.js"></script>
        <script src="short2.js"></script>
    </body>
</html>