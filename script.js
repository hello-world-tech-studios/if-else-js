document.addEventListener("DOMContentLoaded", function() { 
  alert("you have just entered a fortune telling website")
  var enter = confirm("would you like to have your fortune told?")
  if (enter == true){
    var number = prompt("1, 2, 3, or 4")
    var color = prompt("pick a color yellow or purple")
    if (color == "purple" && number == 2 ){
      
        alert("you will have a happy life." )
    }else if(color == "purple" && number == 2) { 
        alert("there is great danger in your future.")
      
    }else if(color == "yellow" || number == 3){
      
        alert("you will meet a soulmate today.")
    }else if (number == 4 && color == "yellow"){
        alert("stay away from the color blue today.")
    }else{
      alert("jbkegiojnuvek nxvoygruehrguoknstfygggggggirstviezohtdksjinrgvyu esuialrdfgskjwjgietnsdgsk rgryjkcfsgb u")
    }
  }else{
    alert("maybe next time.")
  }
  
});