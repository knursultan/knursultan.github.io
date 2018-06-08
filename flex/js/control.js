// JavaScript document

$(function () {
    'use strict';

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top
            },
            800
        );
    });

    let offset = $('#bottom_header').offset();

    $(window).scroll(function () {
        if ( $(window).scrollTop() > offset.top ) {
            $('#bottom_header').addClass('fixedNav');
        } else {
            $('#bottom_header').removeClass('fixedNav');
        }
    });
});