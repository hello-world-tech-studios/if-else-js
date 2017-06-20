document.addEventListener("DOMContentLoaded", function() { 
  // write your javascript code below.
  alert("You'e just entered a fourtune telling website!")
  var play=confirm("Would you like to have your fourtune told?")
  if (play==true) {
    var number=prompt("Pick a number 1, 2, 3, or 4.")
    var color=prompt("Pick a color: yellow or purple.")
    if (number==2&&color=="purple") {
      alert("You will have a happy life!")
    } else if (number==1&&color=="purple") {
      alert("There is great danger in your future!")
    } else if (number==3||color=="yellow") {
      alert("You will meet your soulmate today!")
    } else if (number==4&&color=="purple")  {
      alert("Stay away from the color blue today!")
    } else{
      alert("Sorry, you didn't follow the rules.")
  } else {
    alert("Ok, maybe next time.")
  }
  

if (number==2) {

} else {}




















});