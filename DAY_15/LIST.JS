$(".li2").on("mouseenter", function () {
  $(".sub").slideDown();
});

$(".li2").on("mouseout", function () {
  $(".sub").slideUp();
});

$(".btn").click(function () {
  move();
});

function move() {
  $(".box").animate({ left: "5px" });
  $(".box").animate({ top: "5px" });
  $(".box").css("border-radius", "50%");
}
