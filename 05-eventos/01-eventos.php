<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Manipulador de Evento | jQuery Essentials </title>

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

        </style>
    </head>
    <body>
        <p class="j_button button">jQuery Essentials</p>

        <div>
            <p>Focus nele!</p>
            <input type="text" name="nome" placeholder="focus">
        </div>

        <script src="../js/jquery.js"></script>
        <script src="eventos.js"></script>
    </body>
</html>