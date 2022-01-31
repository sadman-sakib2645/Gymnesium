$(document).ready(function(){
    "use strict";

    $(".banner-slider").slick({
        arrows:false ,
        autoplay: true ,
        dots: true,
    });
    $(".testimonial-slider").slick({
        arrows:false ,
        autoplay: true ,
        dots: true,
        slidesToShow:2
    });

    new VenoBox({
        selector: ".abt-pop",
    });
    new VenoBox({
        selector: ".gl-pop",
        navSpeed: 500,
        spinner: "grid",
        spinColo:'#d2d2d2'
    });

    $('.counter').counterUp({
        delay: 50,
        time: 10000
    });

});