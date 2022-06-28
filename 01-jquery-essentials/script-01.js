/*
ready() é usado quando o js do documento estiver carregado
load()  é executado depois do docuemtno carregar as imagens, plugins e outros arquivos
*/

//FORMA PADRAO DE INICIALIZAR JQUERY
$(document).ready(function(){
    $(".jquery_essentials").html("JQuery inicializado")
});

//FORMA PADRAO DE INICIALIZAR SIMPLIFICADA - ******MAIS UTILIZADA******
$(function(){
    $(".jquery_essentials").html("JQuery inicializado com Gatilho")
});

//CARREGANDO ANTES DE OUTRA LIB
jQuery(function($){
    $(".jquery_essentials").html("JQuery antes de outra lib")
});

//CARREGANDO DEPOIS DE OUTRA LIB
var $j = jQuery.noConflict();
$j(document).ready(function(){
    $j(".jquery_essentials").html("JQuery depois de outra lib")
});