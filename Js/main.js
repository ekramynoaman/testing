(function ($) {
    // Use strict end
    "use strict";
    // Selectors

    var $window = $(window),
        $current_class = $('ul.navbar-nav'),
        $one_page_nav = $('ul.navbar-nav a'),
        $scroll = $('.scroll'),
        $navbar_toggle = $('.navbar-toggle'),
        $portfilo_prev = $('.portfolio_prev'),
        $counter = $('.countr'),
        $testimonial_slider = $('.testimonial_slider');


    /*--------------------------------------------------------------
     1.  Preloader - Loading animation
     --------------------------------------------------------------*/

    // makes sure the whole site is loaded
    $window.on('load', function () {
        // will first fade out the loading animation
        $('#Status').fadeOut();
        // will fade out the white DIV that covers the website.
        $('#Preloader').delay(350).fadeOut();
        $('body').css({
            'overflow': 'visible'
        });
    });

    /*--------------------------------------------------------------
    	2.  Menu Scroll - Add Current Class to active section
    --------------------------------------------------------------*/
    $current_class.onePageNav({
        currentClass: 'current'
    });

    /*--------------------------------------------------------------
     #  Menu Scroll - Smooth Scroll - One Page Navigation
     --------------------------------------------------------------*/
    $one_page_nav.on('click', function (e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            speed: 600,
            offset: -68,
            scrollTarget: link.hash
        });
    });


    /*--------------------------------------------------------------
     #  Section Scroll - Check "scroll" Class, scroll to section assigned
     --------------------------------------------------------------*/
    $scroll.on('click', function (e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            speed: 600,
            offset: -68,
            scrollTarget: link.hash
        });
    });


    /*--------------------------------------------------------------
     3.  Parallax - paroller.js
     --------------------------------------------------------------*/
    $('.cover').paroller();
    $('.counter_box').paroller();
    $('.testimonial_box').paroller();













})(jQuery); // Use strict end