$(document).foundation()
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header").addClass("scrolling");
    } else {
        $(".header").removeClass("scrolling");
    }
});

$(document).ready(function () {

    var deadline = new Date("2016/06/25");

    function updateClock() {
        var today = Date();
        var diff = Date.parse(deadline) - Date.parse(today);
        if (diff <= 0) {
            clearInterval(interval);
        } else {
            var seconds = Math.floor((diff / 1000) % 60);
            var minutes = Math.floor((diff / 1000 / 60) % 60);
            var hours = Math.floor((diff / 1000 / 60 / 60) % 24);
            var days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30.5);
            var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.5) % 12);

            $("#months").text(('0' + months).slice(-2));
            $("#days").text(('0' + days).slice(-2));
            $("#hours").text(('0' + hours).slice(-2));
            $("#minutes").text(('0' + minutes).slice(-2));
            $("#seconds").text(('0' + seconds).slice(-2));

        } //EOF ELSE

    } //EOF FUNCTION

    var interval = setInterval(updateClock, 1000);

}); //EOF DOCUMENT.READY
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
