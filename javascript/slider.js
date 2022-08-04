// $(document).ready(function() {
//     $('#slider .owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:false,
//         navText:["<em class='porto-icon-left-open-big'></em>", "<em class='porto-icon-right-open-big'></em>"],
//         items: 1,
//         autoplay:true,
//         autoplayTimeout:5000,
        
//     })
// });
$("#slider-testimonial .owl-carousel").owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 10,
    nav: false,
    dots: true,
    dotsData:true,
    items: 1,
    loop: true,
    autoplayHoverPause:true,
    });

$("#slider-project .owl-carousel").owlCarousel({
autoplay: false,
autoplayTimeout: 5000,
margin: 10,
nav: false,
dots: true,
dotsData:true,
items: 3,
loop: true,
autoplayHoverPause:true,
});