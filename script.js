function test() {

    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItem = tabsNewAnim.find(".active");

    if (!activeItem.length) return;

    var height = activeItem.innerHeight();
    var width = activeItem.innerWidth();
    var pos = activeItem.position();

    $(".hori-selector").css({
        top: pos.top + "px",
        left: pos.left + "px",
        height: height + "px",
        width: width + "px"
    });
}

$(document).ready(function () {

    test();

    $("#navbarSupportedContent").on("click", "li", function () {

        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");

        test();
    });

    $(".navbar-toggler").click(function () {

        $(".navbar-collapse").slideToggle(300);

        setTimeout(function () {
            test();
        }, 300);

    });

    $(window).resize(function () {

        setTimeout(function () {
            test();
        }, 300);

    });

});