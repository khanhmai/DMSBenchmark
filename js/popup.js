$(function () {
    "use strict";
    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        var $title = $(this).attr("title");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
        $(".img-show div")[0].innerHTML = '<h2 class="metricTitle">' + $title + '</h2>'
    });
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});