document.addEventListener("DOMContentLoaded", function() { 
  // write your javascript code below.
  alert("you've just entered a fortune telling website!")
 var play = confirm("would  you like to have your fortune told?")

if (play==true) {
  var number = prompt("Pick a number: 1, 2, 3 or 4")

  var color = prompt("pick a color: yellow or purple")

  if (number == 2 && color == "purple") {
    alert("you will have a happy life")
  }

  else if (number == 1 && color == "purple"){
    alert("there is a great danger in your future")
  }

  else if (number == 3 || color == "yellow"){
    alert("you will meet your soulmate today")
  }

  else if (number == 4 && color == "purple"){
    alert("say away from the color blue today")
  }
  
  else {
    alert("sorry, you did not follow the rules")
  }

} 

else {

  alert("ok maybe next time")

}

});