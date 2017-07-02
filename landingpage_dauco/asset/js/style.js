/**
 * Created by Nguyen Phuong Thanh on 11/12/2015.
 */
$(document).ready(function(){
    new WOW().init();
    if($(window).width() > 992){
        $('.dropdown-toggle', $("#main-nav")).removeAttr('data-toggle');
    }
    var headerTop = $(".header").offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > headerTop ) {
            $(".header").addClass('is-fixed');
        } else {
            $(".header").removeClass('is-fixed');
        }
    });
    $('a.directional-link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    var homeProduce = $("#home-produce");
    if(homeProduce.length > 0){
        $(window).on('scroll', function(){
            if($(window).scrollTop() > homeProduce.offset().top ) {
                $("#water-drop").addClass('waterDrop');
            } else {
                $("#water-drop").addClass('waterDrop');
            }
        });
    }

    var moveMenu = $('.move-menu');
    if(moveMenu.length > 0){
        $('a[href*=#]:not([href=#])',$('.move-menu')).click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });
    }
    var menuPage = $('#page-menu');

    if (menuPage.length > 0) {
        var menuPageTopPosition = menuPage.offset().top;
        $(window).on('scroll', function(){
            if($(window).scrollTop() > (menuPageTopPosition - 70) ) {
                menuPage.addClass('is-fixed');
            } else {
                menuPage.removeClass('is-fixed');
            }
            $('#page-menu .simple-list li').each(function(){
                var t = $(this);
                var idCurrent = t.find('a[href*=#]:not([href=#])').first().attr('href');
                if(typeof idCurrent != 'undefined' && $(window).scrollTop() > ($(idCurrent).offset().top - 80) ) {
                    t.addClass('active').siblings('li').removeClass('active');
                }
            })
        });
    }
    var pagemenu = $("#page-menu .simple-list");
    if((pagemenu.length >0) && (pagemenu.find('li').length < 3)){
        pagemenu.removeClass('col-lg-12');
        pagemenu.find('li').css({
            'paddingLeft': '20px',
            'paddingRight': '20px'
        })
    }
    var fancy = $('.fancybox');
    if(fancy.length >0){
        $('.fancybox').fancybox();
    }
    //masonry
    var $grid = $('.masonry').masonry({
        itemSelector: '.fancybox',
        columnWidth: '.fancybox',
        percentPosition: true
    });
// layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

})
