var html = $("#para").html();
var text = $("#para").text();
$("#html").click(function () {
  alert("The HTML is" + html);
  $("#showp").text(html);
});

$("#text").click(function () {
  alert("The Text is" + text);
  $("#showp2").text(text);
});

$("#img_btn").click(function () {
  $("#img").attr("src", "https://picsum.photos/seed/picsum/200/300");
});
