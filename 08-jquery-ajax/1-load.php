<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Ajax Load | jQuery Essentials</title>

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

            .menu{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                margin-bottom: 30px;
            }

            .menu a{
                flex-basis: 33.33%;
                text-align: center;
                background: #069;
                color: #fff;
                text-decoration: none;
                padding: 10px 0;
            }

            .menu a:hover{
                background: #09f;
            }

            .menu a.active{
                background: #35acfc;
            }

            .content p{
                margin-top: 20px;
            }

            .content img{
                display: block;
                margin: 0 auto;
            }

            .content input{
                display: block;
                padding: 10px;
                margin-top: 20px;
                width: 100%;
            }

            @media(max-width: 36em){
                .menu a{
                    flex-basis: 100%;
                }
            }

        </style>
    </head>
    <body>

        <nav class="menu">
            <a class="active j_load" href="home">Home</a>
            <a class="j_load" href="equipe">Equipe</a>
            <a class="j_load" href="contato">Contato</a>
        </nav>

        <div class="content">
            <img src="load/load.gif" alt="Carregando" title="Carregdando"/>
        </div>

        <script src="../js/jquery.js"></script>
        <script src="load.js"></script>
    </body>
</html>