$(document).ready(function () {
  var arr = [];
  alert("Array Initialized Successfully");

  $("#push").click(function () {
    var push_element = $("#inpt").val();
    if (push_element === "") {
      alert("Array Element Empty");
    } else {
      arr.push(push_element);
      alert("Array Element Added Successfully");
      var arrayOutput = $("#arrayOutput");
      arrayOutput.empty();
      for (var i = 0; i < arr.length; i++) {
        arrayOutput.append(arr[i] + "<br>");
      }
    }
  });

  $("#pop").click(function () {
    arr.pop();
    alert("Last Array Element Removed Successfully");
  });

  $("#show").click(function () {
    var arrayOutput = $("#arrayOutput");
    arrayOutput.empty();
    for (var i = 0; i < arr.length; i++) {
      arrayOutput.append(arr[i] + "<br>");
    }
  });
});
