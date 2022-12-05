document.getElementById("nav_home").addEventListener("mouseover", mouseOverHome);
document.getElementById("nav_home").addEventListener("mouseout", mouseOutHome);

function mouseOverHome() {
  document.getElementById("hover-home").style.visibility = "visible";
}
function mouseOutHome() {
  document.getElementById("hover-home").style.visibility = "hidden";
}

document.getElementById("nav_club_above").addEventListener("mouseover", mouseOverClubAbove);
document.getElementById("nav_club_above").addEventListener("mouseout", mouseOutClubAbove);

function mouseOverClubAbove() {
  document.getElementById("hover-club-above").style.visibility = "visible";
}
function mouseOutClubAbove() {
  document.getElementById("hover-club-above").style.visibility = "hidden";
}