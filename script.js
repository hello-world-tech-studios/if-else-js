document.addEventListener("DOMContentLoaded", function() { 
  // write your javascript code below.
console.log("test")
  alert("You've just entered a fortune telling website!");
  var play = confirm("Would you like to have your fortune told?");

  if(play == true){
    var number = prompt("Pick a number: 1,2,3, or 4.");
    var color = prompt("Pick a color: yellow or purple")
    if(number == 2 && color == "purple"){
     alert("You will live a happy life!")

    }
  } else{
    alert("Okay, maybe next time!");
  }
  
  
});