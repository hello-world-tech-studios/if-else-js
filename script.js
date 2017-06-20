document.addEventListener("DOMContentLoaded", function() { 
  // write your javascript code below.
alert("You've just entered a fortune telling website!")
var play = confirm("Would you like to have your fortune told?")
if (play == true) {
  var number = prompt("Pick a number: 1,2,3,or 4")
  var color = prompt("Pick a color: yellow or purple")
  if (number == 2 && color == "purple") {
    alert("You will have a happy life")
  }
  if (number == 1 && color == "purple") {
    alert("There is great danger in your future")
}
  if (number == 3 && color == "yellow") {
    alert("You will meet your soulmate today!")
}
  if (number == 4 && color == "purple") {
    alert("Stay away from the color purple today")
}
  if (number == 2 && color == "yellow") {
    alert("Someone in your family will die soon")
}
  else {
alert("Sorry, no fortune for you today")
}
}

else if (play == false) {
  alert("Okay, maybe next time")
}

});