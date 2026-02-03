// cosas requeridas por la actividad: 3 eventos
$(document).ready(function(){
    //cambio de modos de color
    $("#modos").click(function(){
            $("body").toggleClass("bg-dark text-white");
            $("header").toggleClass("bg-success");
            $(".col").toggleClass("bg-dark");
            $(this).toggleClass("btn-secondary text-white btn-outline-secondary text-dark");


        });

});


//accidentalmente cree el efecto en el tema claro, no pregunten cómo lo hice//

