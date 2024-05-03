function Calc() {
  event.preventDefault();
  document.getElementById("tb1").style.display = "inline";

  var name = document.getElementById("Name").value;
  var name_show = document.getElementById("Name_Show");
  name_show.innerHTML = name;

  var roll = document.getElementById("Roll").value;
  var roll_show = document.getElementById("Roll_no_Show");
  roll_show.innerHTML = roll;

  var class_val = document.getElementById("Class").value;
  var class_show = document.getElementById("Class_Show");
  class_show.innerHTML = class_val;

  var div_val = document.getElementById("Div").value;
  var div_show = document.getElementById("Div_Show");
  div_show.innerHTML = div_val;

  var eng = document.getElementById("eng").value;
  var Eng_Show = document.getElementById("Eng_Show");
  Eng_Show.innerHTML = eng;

  var mar = document.getElementById("Mar").value;
  var Mar_Show = document.getElementById("Mar_Show");
  Mar_Show.innerHTML = mar;

  var hin = document.getElementById("Hin").value;
  var Hin_Show = document.getElementById("Hin_Show");
  Hin_Show.innerHTML = hin;

  var his = document.getElementById("his").value;
  var His_Show = document.getElementById("His_Show");
  His_Show.innerHTML = his;

  var geog = document.getElementById("geog").value;
  var Geog_Show = document.getElementById("Geog_Show");
  Geog_Show.innerHTML = geog;

  var pt = document.getElementById("pt").value;
  var PT_Show = document.getElementById("PT_Show");
  PT_Show.innerHTML = pt;

  var eng = parseInt(document.getElementById("eng").value);
  var mar = parseInt(document.getElementById("Mar").value);
  var hin = parseInt(document.getElementById("Hin").value);
  var his = parseInt(document.getElementById("his").value);
  var geog = parseInt(document.getElementById("geog").value);
  var pt = parseInt(document.getElementById("pt").value);

  var total_marks = eng + mar + hin + his + geog + pt;
  var pct = (total_marks / 600) * 100;

  var pct_show = document.getElementById("Per_Show");
  pct_show.innerHTML = pct.toFixed(2) + "%";

  drawChart();
}

function hide_table() {
  document.getElementById("tb1").style.display = "none";
}

