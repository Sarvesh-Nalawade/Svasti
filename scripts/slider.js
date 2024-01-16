$(document).ready(function(){
    $('.brands-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // Adjust based on how many logos you want to show at once
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

        // for the manual arrows
        prevArrow: $('.destination__nav .left'),
        nextArrow: $('.destination__nav .right'),

        responsive: [
            {
                breakpoint: 1024,
                settings: 
                {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: 
                {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: 
                {
                    slidesToShow: 1,
                }
            }
        ]
        });
    });

    // Enabling this turn off the dots slider by default
    // $('.brands-slider').slick({
    //     // ... other settings ...

    // });
    