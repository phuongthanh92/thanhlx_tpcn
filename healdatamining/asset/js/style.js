$(document).ready(function () {
    $('.menu-nav .menu-drop-down-wrapper').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $('.main-menu-media').removeClass('open-normal-menu');
        }else {
            $('.menu-nav .menu-drop-down-wrapper').removeClass('active');
            $(this).addClass('active');
            $('.main-menu-media').removeClass('open-facebook-menu').addClass('open-normal-menu');
        }
    });
    $('.close-normal-menu').click(function () {
        $('.main-menu-media').removeClass('open-normal-menu');
    })
    $('.another-menu').click(function () {
        $('.main-menu-media').removeClass('open-normal-menu').toggleClass('open-facebook-menu');
    });

    $('.news-facebook-tab').click(function () {
        var currentMenu = $(this).closest('.menu-drop-down');
        currentMenu.find('.menu-orientation-bar .list-tabs .tab').removeClass('active');
        currentMenu.find('.menu-orientation-content .list-normal-news').removeClass('active');
        currentMenu.find('.menu-orientation-content .list-facebook-news').addClass('active');
        $(this).addClass('active');
    });

    $(".menu-orientation-bar .list-tabs .tab").click(function () {
        $(".menu-orientation-bar .list-tabs .tab").removeClass('active');
        var currentMenu = $(this).closest('.menu-drop-down');
        currentMenu.find('.news-facebook-tab').removeClass('active');
        currentMenu.find('.menu-orientation-content .list-normal-news').addClass('active');
        currentMenu.find('.menu-orientation-content .list-facebook-news').removeClass('active');
        $(this).addClass('active');
    });
    $('#menu-tab-list a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $('#menu-tab-list .tab').removeClass('active');
        $(this).closest('.tab').addClass('active');
    });

    $("#tab-news-lg a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $('#tab-news-lg .tab').removeClass('active');
        $(this).closest('.tab').addClass('active');
    });

    $('.menu-toggle').click(function () {
        $('.menu-mobile').toggleClass('open-menu-content');
    });

    $('.open-droplist').click(function () {
       $(this).closest('.register-box').toggleClass('show-droplist')
    });

    $('.close-droplist').click(function () {
        $(this).closest('.register-box').removeClass('show-droplist')
    });

    $('.drop-list .checkbox input').click(function () {
        $(this).closest('.item').toggleClass('selected');
    })
});