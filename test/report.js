$(function () {
    $('.nav-open').click(function () {
        $(this).toggleClass('active');
        $(this).next('nav').slideToggle();
    });
});

var basicPt = [120,110];
var bonusPt = [20,30];
var beforePt = [1000,1200];
var afterPt = 0;
document.addEventListener("DOMContentLoaded", function () {
    var changePt = document.querySelector(".basic_pt");
    changePt.innerHTML = basicPt[0];

    changePt = document.querySelector(".bonus_pt");
    changePt.innerHTML = bonusPt[0];

    changePt = document.querySelector(".before_pt");
    changePt.innerHTML = beforePt[0];

    changePt = document.querySelector(".after_pt");
    changePt.innerHTML = basicPt[0] + bonusPt[0] + beforePt[0];
    
});