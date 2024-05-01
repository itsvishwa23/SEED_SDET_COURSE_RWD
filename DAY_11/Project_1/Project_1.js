function handleClick() {
  alert("Button Clicked");
  var btn = document.querySelector(".btn");
  btn.style.backgroundColor = "red";
}

function Demo(element) {
  element.style.backgroundColor = "yellow";
  element.style.color = "green";
  element.style.textAlign = "center";
  element.style.outline = "2px solid blue";
}

function Demo2(element) {
  element.style.backgroundColor = "yellow";
  element.style.color = "red";
  element.style.textAlign = "center";
  element.style.outline = "2px solid blue";
}
