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
        slidesToShow:2,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false ,   
                }
            }
        ],
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
        time: 3000
    });

     $(".money-slider").slick({
        
        autoplay: true ,
        dots: false,
        slidesToShow:5,
        centerMode: true,
        centerPadding: '0px',
        prevArrow:'<i class="fas fa-chevron-left leftarrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right rightarrow"></i>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false
                }
            },
            {
                breakpoint:768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false
                }
            }
            
            
        ],
        
    });

});