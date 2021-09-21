$(document).ready(function() {
    $(".contentShow").click(function() {
        $(".contentShow").toggle();
        $(".contentHide").toggle();
    });
    $(".contentHide").click(function() {
        $(".contentShow").toggle();
        $(".contentHide").toggle();
    });
    $(".growthShow").click(function() {
        $(".growthShow").toggle();
        $(".growthHide").toggle();
    });
    $(".growthHide").click(function() {
        $(".growthShow").toggle();
        $(".growthHide").toggle();
    });
    $(".recShow").click(function() {
        $(".recShow").toggle();
        $(".recHide").toggle();
    });
    $(".recHide").click(function() {
        $(".recShow").toggle();
        $(".recHide").toggle();
    });

    $(".growthShow").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $(".contentShow").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });
    $(".recShow").hover(function() {
        $(this).css("opacity","0.5");
    },function() {
        $(this).css("opacity","unset");
    });











});