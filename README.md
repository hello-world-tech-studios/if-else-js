# If Else Statements

## Fortune Teller
### Set the scene
###### You will be writing your code in the `script.js` file.
* Use `alert()` to alert the user: "You've just entered a fortune telling website!".
* Use `confirm()` to ask the user: "Would you like to have your fortune told?"
* Save the `confirm()` from the previous step as a variable called `play`.
* Stop, open your website in chrome and check for the alert and confirm messages.
* When the user clicks 'Ok' after the confirm `play == true`. Use this to write an if/else statement: 
  * If user clicks okay on the `confirm()` use `prompt()` to ask the user to "Pick a number: 1, 2, 3, or 4.". Save this `prompt()` in a variable called `number`
  * Otherwise, use `alert()` to say: "Okay, maybe next time!". 
* Stop, open your website in chrome and make sure everything works. Test all combinations
* Okay, after asking for a number, `prompt()` the user: "Pick a color: yellow or purple". Save this in a variable called `color`

### The if elses and else ifs
* After asking for a number and a color we are going to be writing an if and some else ifs.
* First: If the number is equal to 2 AND the color is equal to purple, `alert()` the user: "You will have a happy life!"
  * Check to see if it works
* Second: Else if the number is equal to 1 AND the color is equal to purple, `alert()` the user: "There is great danger in your future!"
  * Check to see if it works
* Third: Else if the number is equal to 3 OR the color is equal to yellow, `alert()` the user: "You will meet your soulmate today!"
  * Check to see if it works
* Fourth: Else if the number is equal to 4 AND the color is equal to purple, `alert()` the user: "Stay away from the color blue today."
  * Check to see if it works
* Fifth: Else "Sorry, you did not follow the rules!"
  * Check to see if it works