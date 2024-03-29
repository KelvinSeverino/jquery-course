<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Criando Funções | jQuery Essentials</title>

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

            .div{
                display: inline-block;
                vertical-align: top;
                width: 24%;
                margin: 0.5%;
                background: #069;
                color: #fff;
                padding: 20px;
            }

            .p{
                display: inline-block;
                vertical-align: top;
                width: 49%;
                margin: 0.5%;
                padding: 30px;
                background: #09f;
                color: #fff;
            }

            @media(max-width: 50em){
                .div{
                    width: 49%;
                }
            }

            @media(max-width: 38em){
                .div{
                    width: 100%;
                    margin: 0 0 1% 0;
                }
            }

        </style>
    </head>
    <body>

        <div>
            <div class="div normalize">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div><div class="div normalize">
                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div><div class="div normalize">
                <p>It was popularised in the 1960s with the release of Letraset</p>
            </div><div class="div normalize">
                <p>It was popularised in the 1960s with the release of Letraset</p>
                <p>when an unknown printer took a galley of type and scr</p>
            </div>
        </div>

        <div>
            <p class="p normalize">
                It was popularised in the 1960s with the release of Letraset
            </p><p class="p normalize">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>


        <script src="../js/jquery.js"></script>
        <script src="funcao.js"></script>
    </body>
</html>