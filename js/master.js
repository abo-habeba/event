let textArea = document.querySelector("textarea");
let char = document.querySelector("#char");

$(".btnOpne").click(function () {
    $("#main").toggleClass("main-toggle");
    $("nav").toggleClass("nav-toggle");
});
$(".closebtn").click(function () {
    $("#main").removeClass("main-toggle");
    $("nav").removeClass("nav-toggle");
});

$("a").click(function () {
    let href = $(this).attr("href");
    let sectionTop = $(href).offset().top;
    $("html , body").animate({ scrollTop: sectionTop }, 2000);
});

$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});

// =========================================
let dd;
let mm;
let yy;
// =========================================
function getlocal() {
    dd = localStorage.getItem("dd");
    mm = localStorage.getItem("mm");
    yy = localStorage.getItem("yy");
}
getlocal();

// =========================================
if (dd == null) {
    var ntervalDairec = setInterval(() => {
        countdown("2022", "12", "28");
    }, 1000);
} else {
    var ntervalDairec = setInterval(() => {
        countdown(yy, mm, dd);
    }, 1000);
}
// =========================
function countdown(yyy, mmm, ddd) {
    var now = new Date();
    var eventDate = new Date(yyy, mmm, ddd);

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

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // console.log(s);
    // console.log(m);
    // console.log(h);
    // console.log(d);

    let box = `
    <div class="col">
    <div id="days" class="tim"><h3>${d} D</h3></div>
  </div>
  <div class="col">
    <div id="hours" class="tim"><h3>${h} h</h3></div>
  </div>
  <div class="col">
    <div id="minutes" class="tim"><h3>${m} m</h3></div>
  </div>
  <div class="col">
    <div id="seconds" class="tim"><h3>${s} s</h3></div>
  </div>`;

    $("#boxTaime").html(box);
}
// =========================================
$('#reset').click(function(){
    localStorage.removeItem("dd");
    localStorage.removeItem("mm");
    localStorage.removeItem("yy");
    window.location.reload();
})
//===============================================

$("#inputDate").change(function () {
    let d = new Date(this.value);
    console.log(d);
    let dd = d.getDate();
    let mm = d.getMonth() + 1;
    let yy = d.getFullYear();
    clearInterval(ntervalDairec);

    setInterval(() => {
        countdown(yy, mm, dd);
    }, 1000);

    setlocal(dd, mm, yy);
});

function setlocal(dd, mm, yy) {
    localStorage.setItem("dd", dd);
    localStorage.setItem("mm", mm);
    localStorage.setItem("yy", yy);
}

//===============================================
textArea.addEventListener("input", function (e) {
    char.innerHTML = 100 - this.value.length;
    this.value.length >= 100
        ? $(this).css("background-color", "#ee190587")
        : $(this).css("background-color", "#fff");
});
