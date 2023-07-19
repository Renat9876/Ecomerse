$(document).ready(function () {
   
    /* SECTION SPECIAL OFFER*/

    $(".indicator").click(function () {
        $(".w-100").fadeToggle(100);
    });
    $(".indicator").click(function () {
        $(".w-100").fadeIn(1000);
    });


    /* SECTION SLICE*/

    $(document).ready(function () {
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    });

    /* SECTION NAVIGATION*/

    $('.main').hide(1);

    $('.shoesin').mousemove(function () {
        $('.main').fadeIn(100);
    })

    $('.main').mousemove(function () {
        $('.main').show(100);
    })

    $('.shoesin').mouseout(function () {
        $('.main').fadeOut(100);
    })




    /*----SECTION ASAGIDAKI GOY SCROLL---*/

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


    /*SECTION CLICK*/

    // $(".button-next").click(function () {
    //     $(".texnologi1").hide(1)
    // })

    // $(".button-prev").click(function () {
    //     $(".texnologi1").show(1)
    // })


    /* SECTION 5*/

    $('.iphone-light').mousemove(function () {
        $('.iphone-light ').fadeOut(1);
       

    })

    $('.iphone-gray ').mouseout(function () {
        $('.iphone-light ').fadeIn(1);
    })


    $('.washing-machinee').mousemove(function () {
        $('.washing-machinee').fadeOut(1);
    })

    $('.washing-machine').mouseout(function () {
        $('.washing-machinee').fadeIn(1);
    })

    $('.airpod-black').mousemove(function () {
        $('.airpod-black').fadeOut(1);
    })

    $('.airpod-blue').mouseout(function () {
        $('.airpod-black').fadeIn(1);
    })

    $('.frizer-black').mousemove(function () {
        $('.frizer-black').fadeOut(1);
    })

    $('.frizer-gray').mouseout(function () {
        $('.frizer-black').fadeIn(1);
    })

    $('.keypoard-yellow').mousemove(function () {
        $('.keypoard-yellow').fadeOut(1);
    })

    $('.keypboard-light').mouseout(function () {
        $('.keypoard-yellow').fadeIn(1);
    })


    $('.mause-wirelses').mousemove(function () {
        $('.mause-wirelses').fadeOut(1);
    })

    $('.mause-wirelse').mouseout(function () {
        $('.mause-wirelses').fadeIn(1);
    })


    $('.samsung-tablets').mousemove(function () {
        $('.samsung-tablets').fadeOut(1);
    })

    $('.samsung-tablet').mouseout(function () {
        $('.samsung-tablets').fadeIn(1);
    })

    $('.camera-whites').mousemove(function () {
        $('.camera-whites').fadeOut(1);
    })

    $('.camera-white').mouseout(function () {
        $('.camera-whites').fadeIn(1);
    })

    $('.owen-blackks').mousemove(function () {
        $('.owen-blackks').fadeOut(1);
    })

    $('.owen-blackk').mouseout(function () {
        $('.owen-blackks').fadeIn(1);
    })

    $('.Redmi-80cmc').mousemove(function () {
        $('.Redmi-80cmc').fadeOut(1);
    })

    $('.Redmi-80cm').mouseout(function () {
        $('.Redmi-80cmc').fadeIn(1);
    })


    // foto2 hissesi

    $('.samsung-45s').mousemove(function () {
        $('.samsung-45s').fadeOut(1);
    })

    $('.samsung-45').mouseout(function () {
        $('.samsung-45s').fadeIn(1);
    })

    $('.mi-360s').mousemove(function () {
        $('.mi-360s').fadeOut(1);
    })

    $('.mi-360').mouseout(function () {
        $('.mi-360s').fadeIn(1);
    })


    $('.oven-63s').mousemove(function () {
        $('.oven-63s').fadeOut(1);
    })

    $('.oven-63').mouseout(function () {
        $('.oven-63s').fadeIn(1);
    })


    $('.side-bys').mousemove(function () {
        $('.side-bys').fadeOut(1);
    })

    $('.side-by').mouseout(function () {
        $('.side-bys').fadeIn(1);
    })

    $('.Cold-vts').mousemove(function () {
        $('.Cold-vts').fadeOut(1);
    })

    $('.Cold-vt').mouseout(function () {
        $('.Cold-vts').fadeIn(1);
    })



    // foto4 hissesi

    $('.camerra').mousemove(function () {
        $('.camerra').fadeOut(1);
    })

    $('.camerraa').mouseout(function () {
        $('.camerra').fadeIn(1);
    })

    $('.airpood-black').mousemove(function () {
        $('.airpood-black').fadeOut(1);
    })

    $('.airpood-blue').mouseout(function () {
        $('.airpood-black').fadeIn(1);
    })


    $('.owen1').mousemove(function () {
        $('.owen1').fadeOut(1);
    })

    $('.owen').mouseout(function () {
        $('.owen1').fadeIn(1);
    })

});


// foto1 hissesi


$(document).ready(function () {
    $('.owl-carousel-best').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        // dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 10
            }
        }
    });
});

// top categori hissesi
$(document).ready(function () {
    $('.owl-carousel-best1').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
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
    });
});

// saat olan hisse

$(document).ready(function () {
    $('.owl-carousel-best2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});

// custom review hissesi

$(document).ready(function () {
    $('.owl-carousel-best3').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});


// foto2 hissesi
$(document).ready(function () {
    $('.owl-carousel-foto2').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 10
            }
        }
    });
});

// urban carouseli olan hisse

$(document).ready(function () {
    $('.owl-carousel-urban').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
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
    });
});

// foto3 hissesi

$(document).ready(function () {
    $('.owl-carousel-foto3').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});


$('.tablet-function').mousemove(function () {
    $('.tablet-function').fadeOut(1);
})

$('.tablet-jpg').mouseout(function () {
    $('.tablet-function').fadeIn(1);
})


$('.mauses-w').mousemove(function () {
    $('.mauses-w').fadeOut(1);
})

$('.mause-w').mouseout(function () {
    $('.mauses-w').fadeIn(1);
})

$('.keypboard-yl').mousemove(function () {
    $('.keypboard-yl').fadeOut(1);
})

$('.keypboard-lg').mouseout(function () {
    $('.keypboard-yl').fadeIn(1);
})


$('.frizer-gr').mousemove(function () {
    $('.frizer-gr').fadeOut(1);
})

$('.frizer-bl').mouseout(function () {
    $('.frizer-gr').fadeIn(1);
})


$('.shoese-blu').mousemove(function () {
    $('.shoese-blu').fadeOut(1);
})

$('.shoese-bl').mouseout(function () {
    $('.shoese-blu').fadeIn(1);
})


$('.airpod-blu').mousemove(function () {
    $('.airpod-blu').fadeOut(1);
})

$('.airpod-bl').mouseout(function () {
    $('.airpod-blu').fadeIn(1);
})

$('.bag-green').mousemove(function () {
    $('.bag-green').fadeOut(1);
})

$('.bag-black').mouseout(function () {
    $('.bag-green').fadeIn(1);
})


// foto4 hissesi


$(document).ready(function () {
    $('.owl-carousel-foto4').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});


$('.samsungtabs').mousemove(function () {
    $('.samsungtabs').fadeOut(1);
})

$('.samsungtab').mouseout(function () {
    $('.samsungtabs').fadeIn(1);
})


$('.mauses-wir').mousemove(function () {
    $('.mauses-wir').fadeOut(1);
})

$('.mause-wir').mouseout(function () {
    $('.mauses-wir').fadeIn(1);
})


$('.keypboard-yel').mousemove(function () {
    $('.keypboard-yel').fadeOut(1);
})

$('.keypboard-lgg').mouseout(function () {
    $('.keypboard-yel').fadeIn(1);
})


$('.frizer-grayy').mousemove(function () {
    $('.frizer-grayy').fadeOut(1);
})

$('.frizer-blackk').mouseout(function () {
    $('.frizer-grayy').fadeIn(1);
})


$('.puma-shoes-blue').mousemove(function () {
    $('.puma-shoes-blue').fadeOut(1);
})

$('.puma-shoes-black').mouseout(function () {
    $('.puma-shoes-blue').fadeIn(1);
})

$('.Apple-airPods-black').mousemove(function () {
    $('.Apple-airPods-black').fadeOut(1);
})

$('.Apple-airPods-blue').mouseout(function () {
    $('.Apple-airPods-black').fadeIn(1);
})

$('.Traveling-bags').mousemove(function () {
    $('.Traveling-bags').fadeOut(1);
})

$('.Traveling-bag').mouseout(function () {
    $('.Traveling-bags').fadeIn(1);
})




// our latest blog hissesi
$(document).ready(function () {
    $('.owl-carousel-blog').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});


// saat hissesi

const newYear = "5/4/2023";

const daysEl = document.querySelector(".day")
const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

function timeCountdown() {
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.textContent = formatTime(days);
    hourEl.textContent = formatTime(hours);
    minuteEl.textContent = formatTime(minutes);
    secondEl.textContent = formatTime(seconds);

}


function formatTime(time) {
    return time > 0 ? time : `${time}`;
}

timeCountdown()
setInterval(timeCountdown, 1000);



// $(document).ready(function(){
//     $(".button-next").click(function(){
//         $(".count").hide(100);
//     });
// });
// $(document).ready(function(){
//     $(".button-prev").click(function(){
//         $(".count").show(100);
//     });
// });











