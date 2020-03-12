import './scss/styles.scss';
import $ from 'jquery';
import 'slick-carousel';
import tab from './tab';
import acord from './acord';
import burger from './burger';
import scroll from './scroll';
import modal from './modal';
import cart from './cart';

scroll();

tab();

acord();

burger();

modal();

cart();

$(document).ready(function () {
    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.section--slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $("a.scrollto").on("click", function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $("html,body").animate({ scrollTop: destination }, 1100);
    });
});


