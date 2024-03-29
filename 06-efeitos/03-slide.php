<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Deslizamento [sliding] | jQuery Essentials</title>

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
                display: flex;
                /*display: none;*/
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

            .slide{
                background: #eee;
                margin: 0;
            }

            .slide:first-of-type{
                margin-top: 20px;
            }

            .slide *{
                margin: 0;
            }

            .slide h4{
                font-size: 0.875em;
                font-weight: 500;
                padding: 20px;
                margin: 0;
                border-bottom: 2px solid #ccc;
                cursor: pointer;
            }

            .slide h4:hover{
                background: #fbfbfb;
            }

            .slide_content{
                background: #000;
                color: #fff;
                display: none;
                padding: 20px 20px 5px 20px;
            }
            
            .slide_content p{
                font-size: 0.8em;
                margin-bottom: 15px;
            }

        </style>
    </head>
    <body>

        <span class="expand button">Expand ALL</span> | <span class="close button">Close All</span> | <span class="toggle button">Toggle All</span>

        <div class="slide">
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <div class="slide_content">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p>
                <p>Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div class="slide">
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <div class="slide_content">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p>
                <p>Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div class="slide">
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <div class="slide_content">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p>
                <p>Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>

        <script src="../js/jquery.js"></script>
        <script src="slide.js"></script>
    </body>
</html>