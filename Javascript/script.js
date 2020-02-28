function mouseDown() {
  document.getElementById("neon").style.color = "#E6FB04";
}

function mouseUp() {
  document.getElementById("neon").style.color = "grey";
}



function second(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

function first(x) {
  x.style.height = "50px";
  x.style.width = "50px";
}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Zeroes and Ones") {
    x.innerHTML = "Sadie Plant";
  } else {
    x.innerHTML = "Zeroes and Ones";
  }
}


