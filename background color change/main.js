var i = 0;
var colors = ["red", "pink", "blue", "yellow"];

function myfunction() {
  if (i === colors.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("a").style.background = colors[i];
}

