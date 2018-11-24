"use strict"

$(document).ready(function(){
    $('.burger').click(function(){
        $('.nav').toggleClass('show');
    });
});

$('.owl-carousel').owlCarousel({
    stagePadding:50,
    loop:true,
    margin:100,
    nav:true,
  	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})