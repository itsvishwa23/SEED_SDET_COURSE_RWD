$(document).ready(function () {
  $("#Total").click(function () {
    var english = parseInt($("#english").val());
    var maths = parseInt($("#maths").val());
    var hindi = parseInt($("#hindi").val());
    var marathi = parseInt($("#marathi").val());

    var total = english + maths + hindi + marathi;

    $("#total_disp").val(total);
  });

  $("#Percentage").click(function () {
    var english = parseInt($("#english").val());
    var maths = parseInt($("#maths").val());
    var hindi = parseInt($("#hindi").val());
    var marathi = parseInt($("#marathi").val());

    var total = english + maths + hindi + marathi;

    var per = (total / 400) * 100;
    $("#show").text(per + "%");
  });
});
