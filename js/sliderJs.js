/// <reference path="jquery-2.2.4.js" />
var currentAction = 1;
var totalSlide = 0;
var sliderWidth = 500;
var move = 0;
$(document).ready(function () {
    totalSlide = parseInt($(".slider").find(".sliderBox").length);
    $(".sliderMover").css("width", (sliderWidth * totalSlide));

    $(".slider .sliderBox").each(function (cnt) {
        $(this).css("left", (sliderWidth * cnt));
    });
});
function rightMove() {
    if (currentAction < totalSlide) {
        move = sliderWidth * currentAction;
    } else {
        currentAction = 0;
        move = 0;
    }
    $(".sliderMover").animate({ left: -move }, 500, function () { });
    currentAction = currentAction + 1;
}
function leftMove() {
     if (currentAction == 1) {
        move = (totalSlide-1) * sliderWidth;
        currentAction = totalSlide+1;
    }
    else {
        move = Math.abs(parseInt($(".sliderMover").css("left")) + 500);
    }
    $(".sliderMover").animate({ left: -move }, 500, function () { });
    currentAction = currentAction - 1;
}