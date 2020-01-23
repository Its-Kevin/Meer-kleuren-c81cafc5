function changeColor(type) {
  let color = document.getElementById("color").value;
  switch (type) {
    case "Background":
      changeBackground(color);
      break;
    case "h1":
      changeH1(color);
      break;
    case "fullPage":
      changeBackground(color);
      changeH1(color);
      break;
    default:
      alert("error 404: color not found");
  }
}

function changeBackground(color) {
  let body = document.getElementsByTagName("body").item(0);
  body.style.backgroundColor = color;
}

function changeH1(color) {
  let h1s = document.getElementsByTagName("h1");
  for (let h1 of h1s) {
    h1.style.color = color;
  }
}
