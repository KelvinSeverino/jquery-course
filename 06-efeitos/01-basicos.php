<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Efeitos Básicos | jQuery Essentials</title>

        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

        <style>
            *{
                font-family: 'Open Sans', serif;
            }

            body{
                padding: 10%;
            }

            .button{
                display: inline-block;
                padding: 10px 15px;
                background: #09f;
                color: #fff;
                font-weight: bold;
                text-shadow: 1px 1px 0 #000;
                cursor: pointer;
            }

            .button:hover{
                background: #069;
            }
            
            div{
                display: block;
                margin-bottom: 20px;
                background: #069;
                color: #fff;
                padding: 20px;
            }

        </style>
    </head>
    <body>
        
        <div class="hide">jQuery Essencials Hide</div>
        <div class="show" style="display: none;">jQuery Essencials Show</div>
        <div class="toggle">jQuery Essencials Toggle</div>

        <p class="j_button button">Rodar Effeito</p>

        <script src="../js/jquery.js"></script>
        <script src="basicos.js"></script>
    </body>
</html>