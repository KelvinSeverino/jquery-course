<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Desbotamento [fading] | jQuery Essentials</title>

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

            .fade{
                /*display: flex;*/
                display: none;
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
            }

            .fade_box{
                width: 500px;
                background: #fff;
                max-width: 96%;
                padding: 20px;
                margin: auto;
            }

            .fade_close{
                position: absolute;
                top: 5%;
                right: 5%;
                color: #eee;
                font-size: 2em;
                font-weight: bold;
                cursor: pointer;
            }

            .fade_close:hover{
                color: #bf7676;
            }

            .fade_box p{
                padding: 10px;
                background: #eee;
                cursor: pointer;
                margin: 0;
                color: #777;
            }

            .fade_box p:hover{
                color: #000;
            }

            .fade_box p:nth-of-type(2n+0){
                background: #fbfbfb;
            }

            .fade_box p b{
                display: inline-block;
                vertical-align: middle;
                margin-left: 30px;
                opacity: 0.5;
                padding: 2px 7px;
                background: #069;
                color: #fff;
                font-size: 0.7em;
                font-weight: bold;
                border-radius: 10%;
            }

            .active{
                background: #72b193 !Important;
            }

        </style>
    </head>
    <body>

        <div class="fade">
            <div class="fade_box">
                <p>Seletores <b>√</b></p>
                <p>Manipiladores <b>√</b></p>
                <p>Atravessadores <b>√</b></p>
                <p>Eventos <b>√</b></p>
                <p>Efeitos <b>√</b></p>
            </div>

            <span class="fade_close">X</span>
        </div>

        <p class="j_button button">Abrir</p>

        <script src="../js/jquery.js"></script>
        <script src="fade.js"></script>
    </body>
</html>