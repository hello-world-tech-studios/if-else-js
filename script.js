document.addEventListener("DOMContentLoaded", function() {
  // write your javascript code below.
  alert("You've just entered a fortune telling website!");
  var play = confirm("Would you like to have your fortune told?")
  console.log(play);
  if (play == true) {
  var number = prompt("Pick a number: 1, 2, 3, or 4.")
}else{
  alert("BYE!")
}
var color = prompt("Pick a color: yellow or purple")
if (number == 2 && color == "purple") {
  alert("You will have a happy life!")
}else if (number == 1 && color == "purple"){
    alert("There is great danger in your future!")
}else if (number == 3 || color == "purple"){
    alert("You will meet your soulmate today!")



});
