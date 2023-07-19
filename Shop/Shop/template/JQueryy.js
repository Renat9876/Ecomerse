$(document).ready(function () {

    // owlCarousel hissesi

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    // slick korusel hissesi
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    //    scroll hissesi

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".arow").fadeIn();
            }
            else {
                $(".arow").fadeOut();
            }
        })
    });


    //   showing icon hisssesi

    $('.sortt').mousemove(function () {
        $('.sortt').hide(1000);
    })

    $('.sortt').mouseout(function () {
        $('.sortt').show(1000);
    })


    // default sorting hissesi
    $('.accordion-body').hide(1);
    $('.accordion').click(function () {
        $('.accordion-body').fadeIn(1000);
    })

    // all categories show hissesi

    $('.main').hide(1);

    $('.shoesin').mousemove(function () {
        $('.main').fadeIn(100);
    })

    $('.shoesin').mouseout(function () {
        $('.main').fadeOut(100);
    })

    $('.main').mousemove(function () {
        $('.main').show(100);
    })

    $('.shoesin').mouseout(function () {
        $('.main').fadeOut(100);
    })

    // sekillerin icindeki iconlar foto1 hissesi

    $('.bottlered').mousemove(function () {
        $('.bottlered').fadeOut(1);
    })

    $('.bottleblack').mouseout(function () {
        $('.bottlered').fadeIn(1);
    })


    $('.airpodsblack').mousemove(function () {
        $('.airpodsblack').fadeOut(1);
    })

    $('.airpodsicon').mouseout(function () {
        $('.airpodsblack').fadeIn(1);
    })


    $('.iphonelightgray').mousemove(function () {
        $('.iphonelightgray').fadeOut(1);
    })

    $('.iphonegray').mouseout(function () {
        $('.iphonelightgray').fadeIn(1);
    })



    $('.airpoodblack').mousemove(function () {
        $('.airpoodblack').fadeOut(1);
    })

    $('.airpoodblue').mouseout(function () {
        $('.airpoodblack').fadeIn(1);
    })


    // foto2 hissesi iconlar

    $('.washingmachine1').mousemove(function () {
        $('.washingmachine1').fadeOut(1);
    })

    $('.washingmachine').mouseout(function () {
        $('.washingmachine1').fadeIn(1);
    })


    $('.keypboardyellow').mousemove(function () {
        $('.keypboardyellow').fadeOut(1);
    })

    $('.keypboardlight').mouseout(function () {
        $('.keypboardyellow').fadeIn(1);
    })


    $('.camerawhite1').mousemove(function () {
        $('.camerawhite1').fadeOut(1);
    })

    $('.camerawhite').mouseout(function () {
        $('.camerawhite1').fadeIn(1);
    })


    $('.mauseblue').mousemove(function () {
        $('.mauseblue').fadeOut(1);
    })

    $('.mauseblack').mouseout(function () {
        $('.mauseblue').fadeIn(1);
    })


    // foto2 hissesi iconlar

    $('.shoeseblue').mousemove(function () {
        $('.shoeseblue').fadeOut(1);
    })

    $('.shoeseblack').mouseout(function () {
        $('.shoeseblue').fadeIn(1);
    })


    $('.tvrgb').mousemove(function () {
        $('.tvrgb').fadeOut(1);
    })

    $('.tvflower').mouseout(function () {
        $('.tvrgb').fadeIn(1);
    })


    $('.frizerblack').mousemove(function () {
        $('.frizerblack').fadeOut(1);
    })

    $('.frizergray').mouseout(function () {
        $('.frizerblack').fadeIn(1);
    })



    $('.tabletfunction').mousemove(function () {
        $('.tabletfunction').fadeOut(1);
    })

    $('.tablett').mouseout(function () {
        $('.tabletfunction').fadeIn(1);
    })

});










