/** ==== CODE! ==== **/
function num2Words(money)

var value = money.toString();// takes input and turns it into a string. Ex = 1 turns to "1"
value = Number(value).toFixed(2); //takes the string from above and wraps it in Number wrapper(tells that it's a number) 
                                  //and makes sure it has 2 decimal points but no more. Ex = "1" = "1.00"
var cents = value.slice(-2); //creates a cents variable so that I can seperate the cents, which does not need to be changed in the output,
                            //and hold it for when it is called. Ex "10.25" = "25"
var centsWords = "dollars & " + cents + "/100s"; // creates a variable to use for printout of string to save typing Ex 1.25 = "one dollars & 25/100s

