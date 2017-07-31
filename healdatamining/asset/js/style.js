
$(document).ready(function() {
    $('.news-facebook-tab').click(function () {
        $(this).closest('.menu-drop-down').find('.menu-orientation-bar .list-tabs .tab').removeClass('active');
        $(this).addClass('active');
        console.log("thanh đẹp");
    });

    $(".menu-orientation-bar .list-tabs .tab").click(function () {
        $(".menu-orientation-bar .list-tabs .tab").removeClass('active');
        $(this).closest('.menu-drop-down').find('.news-facebook-tab').removeClass('active');
        $(this).addClass('active');
        console.log("thanh xinh");
    })
})