<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Criando Métodos | jQuery Essentials</title>

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

            .span{
                display: inline-block;
                padding: 10px 20px;
                background: #09f;
                color: #fff;
                cursor: pointer;
                text-transform: uppercase;
            }

            .span:hover{
                background: #35acfc;
            }

        </style>
    </head>
    <body>

        <span class="j_method_plugin_open span"
              data-title='Olá, #BoraProgramar em jQuery!'
              data-desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry'
              data-button='FECHA ISSO :P'>Clique Aqui!</span>


        <script src="../js/jquery.js"></script>
        <script src="metodos.js"></script>
        <script src="metodo_plugin.js"></script>
    </body>
</html>