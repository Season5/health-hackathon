$(document).foundation()
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header").addClass("scrolling");
    } else {
        $(".header").removeClass("scrolling");
    }
});
