document.getElementById("nav_club_above").addEventListener("mouseover", mouseOverClubAbove);
document.getElementById("nav_club_above").addEventListener("mouseout", mouseOutClubAbove);

function mouseOverClubAbove() {
  document.getElementById("hover-club-above").style.visibility = "visible";
}
function mouseOutClubAbove() {
  document.getElementById("hover-club-above").style.visibility = "hidden";
}

document.getElementById("nav_rathskeller").addEventListener("mouseover", mouseOverRathskeller);
document.getElementById("nav_rathskeller").addEventListener("mouseout", mouseOutRathskeller);


function mouseOverRathskeller() {
  document.getElementById("hover-rathskeller").style.visibility = "visible";
}
function mouseOutRathskeller() {
  document.getElementById("hover-rathskeller").style.visibility = "hidden";
}