<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atributos</title>

    <style>
        p,
        div > div{
            padding: 10px;
            background: #eee;
        }
    </style>
</head>
<body>
    <div style="padding: 10%;">
        <p class="jquery" data-jquery="true">Curso jQuery Essentials</p>
        <p><a href="#" title="Link">Link</a></p>
        <p class="jquery-essentials">jQuery-Essentials</p> 
        <div class="jquery-div">Div jQuery</div>       
        <p class="jqueryessentials">jQueryEssentials</p>         
        <p><a href="#" title="Link2">Link</a></p>
        <p class="jquery Essentials">jQuery Essentials</p>

        <h2>Novo Exemplo:</h2>        
        <p class="jquery-essentials">jquery-essentials</p>         
        <p class="jquery-essentials-title">jquery-essentials-title</p>         
        <p class="jquery-essentials-title-sub">jquery-essentials-title-sub</p> 
    </div>

    <script src="../js/jquery.js"></script>
    <script src="atributos.js"></script>
</body>
</html>