document.addEventListener("DOMContentLoaded", function() {
  // write your javascript code below.
  alert("You have just entered a fortune telling website!")

  var play = confirm("Would you like to have your fortune told?")


  if (play == true){

    var number = prompt("pick a numer: 1, 2, 3, or 4");

  }
  else{
    alert("My Site's cool and you're a fool. Now get out and drool.")
  }
  var color = prompt("Pick a color: Yellow or Purple.")

  if (number == 2 && color == "Purple") {
    alert("You will have a hapy life!")
}

  else if (number == 1 && color == "Purple"){
    alert("There is great danger in your future!")
  }
  else if (number == 3 || color == "Yellow"){
    alert("You will meet your soulmate today!")
  }


  //prompt()
});
