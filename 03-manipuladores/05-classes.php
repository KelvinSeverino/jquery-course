<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipuladores [Classes e Atributos]</title>

    <style>
        body{
            padding: 10%;
        }

        div{
            padding: 15px;
            background: #eee;
            border-bottom: 1px solid #ccc;
        }

        div p{
            font-size: 0.8em;
            margin: 10px 0 0;
        }

        .add{
            background: #000;
            color: #fff;
        }
    </style>
</head>
<body>
    <div><span>Hey, estamos aprendendo <b>jQuery</b> aqui!</span><p>is simply dummy text of the printing and typesetting industry.</p></div>
    <div class="segunda" id="unico" data-action="este"><span>E com isso podemos criar interfaces!</span><p>is simply dummy text of the printing and typesetting industry.</p></div>
    <div class="add"><span>Bora Programar aqui!</span><p>is simply dummy text of the printing and typesetting industry.</p></div>
    <div><input type="checkbox" checked="checked" value="email">Checado!</input></div>

    <script src="../js/jquery.js"></script>
    <script src="classes.js"></script>
</body>
</html>