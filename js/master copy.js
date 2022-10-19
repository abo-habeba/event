
function openNav() {
    if ($("#mySidenav").width() == "250") {
        closeNav();
        console.log("00")
    } else {
        $("#mySidenav").width("250px");
        $("#main").css("margin-left", "250px");
    }
}

function closeNav() {
    $("#mySidenav").width("0px");
    $("#main").css("margin-left", "0px");
}

$("a").click(function () {
    var sectionId = $(this).attr("href");

    if ($(sectionId).offset() != undefined) {
        var positionOfSection = $(sectionId).offset().top;

        $("html , body").animate({
            scrollTop: positionOfSection
        }, 500);
    }

})



function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 12, 28);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();



$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});

