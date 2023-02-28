import $ from "./lib/lib";

$("button").click(() => {
  $("div").eq(1).toggleClass("active");
});

$("div").click(function () {
  console.log($(this).index());
});

// console.log($("div").eq(2).find(".some"));
// console.log($(".some").closest(".findmeq").addClass("divic"));
console.log($(".findme").siblings());
