function reveal() {
  var reveals = document.querySelectorAll(".club-above-gallery-1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function reveal2() {
  var reveals = document.querySelectorAll(".club-above-gallery-2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);

document.getElementById("nav_home").addEventListener("mouseover", mouseOverHome);
document.getElementById("nav_home").addEventListener("mouseout", mouseOutHome);

function mouseOverHome() {
  document.getElementById("hover-home").style.visibility = "visible";
}
function mouseOutHome() {
  document.getElementById("hover-home").style.visibility = "hidden";
}


document.getElementById("nav_rathskeller").addEventListener("mouseover", mouseOverRathskeller);
document.getElementById("nav_rathskeller").addEventListener("mouseout", mouseOutRathskeller);


function mouseOverRathskeller() {
  document.getElementById("hover-rathskeller").style.visibility = "visible";
}
function mouseOutRathskeller() {
  document.getElementById("hover-rathskeller").style.visibility = "hidden";
}