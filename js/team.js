//jquery

$("#button-description").mouseenter(function() {
    $(this).css("border-top-left-radius", "0");
    $(this).css("border-bottom-right-radius", "0");
})

$("#button-description").mouseleave(function() {
    $(this).css("border-top-left-radius", "20px");
    $(this).css("border-bottom-right-radius", "20px");
})

$(".css-introduction-avatar").mouseenter(function() {
    $(this).css("border-color", "rgba(218, 165, 32, 1)");
})

$(".css-introduction-avatar").mouseleave(function() {
    $(this).css("border-color", "rgba(218, 165, 32, 0)");
})

$(".css-schedule-item-results").mouseenter(function() {
    $(this).css("background-color", "rgba(0, 0, 0, 0.8)");
    $(this).css("border-radius", "20px");
    $(this).children(".css-schedule-item-results-team-lose").css("opacity", "100%");
    $(this).children(".css-schedule-item-results-team-lose").css("color", "white");
    $(this).children(".css-schedule-item-results-score").css("color", "white");
})

$(".css-schedule-item-results").mouseleave(function() {
    $(this).css("background-color", "rgba(0, 0, 0, 0)");
    $(this).css("border-radius", "0px");
    $(this).children(".css-schedule-item-results-team-lose").css("opacity", "10%");
    $(this).children(".css-schedule-item-results-team-lose").css("color", "black");
    $(this).children(".css-schedule-item-results-score").css("color", "black");
})

$(".css-sideBar-list-href").mouseenter(function() {
    $(this).css("color", "goldenrod");
    $(this).css("font-size", "medium");
})

$(".css-sideBar-list-href").mouseleave(function() {
    $(this).css("color", "black");
    $(this).css("font-size", "small");
})