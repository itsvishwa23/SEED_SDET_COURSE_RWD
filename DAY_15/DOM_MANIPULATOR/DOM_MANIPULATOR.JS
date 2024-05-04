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
