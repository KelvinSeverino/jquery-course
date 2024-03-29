<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Controle Refinado | jQuery Essentials</title>

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

            .field{
                display: block;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 0.8em;
            }

            button{
                display: inline-block;
                padding: 10px 20px;
                background: #09f;
                color: #fff;
                font-weight: bold;
                border: none;
                cursor: pointer;
                font-size: 1em;
            }

            button:hover{
                background: #35acfc;
            }
            
            .load{
                display: inline-block;
                vertical-align: middle;
                margin-left: 10px;
                text-transform: uppercase;
            }
            
            .success,
            .error{
                display: block;
                width: 100%;
                margin-bottom: 20px;
                color: #fff;
                background: #b76969;
                padding: 20px;
            }
            
            .success{
                background: #72b193;
            }
        </style>
    </head>
    <body>
        <form action="create_user" method="POST" enctype="multipart/form-data">
            <label>
                <span class="field">Nome:</span>
                <input type="text" name="first_name" placeholder="Seu Nome:"/>
            </label>
            <label>
                <span class="field">Sobrenome:</span>
                <input type="text" name="last_name" placeholder="Último Nome:"/>
            </label>
            <label>
                <span class="field">E-mail:</span>
                <input type="text" name="email" placeholder="Melhor E-mail:"/>
            </label>

            <button>Cadastrar-se</button>
        </form>

        <script src="../js/jquery.js"></script>
        <script src="refinado.js"></script>
    </body>
</html>