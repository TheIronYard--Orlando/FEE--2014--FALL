/** ==== CODE! ==== **/
function num2Words(dollars){
    var suffix = " dollars";
    dollars = Number(dollars).toFixed(2); 

    var ones =  [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    var tens = [ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
    var hundreds = ["zero", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    var thousands = ["zero", "one thousand", "two thousand", "three thousand", "four thousand", "five thousand", "six thousand", "seven thousand", "eight thousand", "nine thousand"]; 
 
   
dollars = dollars.toString();
var cents = dollars.slice(-2);
var dollars = dollars.slice(0, -3)
var english = cents + '/100s dollars';



   if (dollars <= 20){
       ones.push('ones');
       return "You entered " + ones[1] + " and " + english;
       
    }
   if (dollars < 100){
       return "You entered " + tens[0] + " " + ones[1] + " dollars and " + english; 
     }
   if (dollars % 10 === 0){
       return "You entered " + tens[0] + ones[1] + "dollars and " + english;
   }
   
   // if dollars % 10 === 0){
      //  return "You entered " + dollars + " dollars and " + english;
  // }
}
  // return english;
   
   
   
   
   
 

/** ==== TESTS! ==== **/
var assert = require('assert');

function testHelper(number, string, message){
    if ( message === undefined ) message = 'pass: ' + string;

    assert.strictEqual(num2Words(number), string);
    console.log(message);
}

assert(num2Words);
console.log('got here!');


testHelper(1, "You entered one and 00/100s dollars");
testHelper(2, "You entered two and 00/100s dollars");
testHelper(3, "You entered three dollars and 00/100s dollars");
testHelper(4, "four dollars");
testHelper(5, "five dollars");
testHelper(6, "six dollars");
testHelper(7, "seven dollars");
testHelper(8, "eight dollars");
testHelper(9, "nine dollars");

testHelper(10, "ten dollars");
testHelper(11, "eleven dollars");
testHelper(12, "twelve dollars");
testHelper(13, "thirteen dollars");
testHelper(14, "fourteen dollars");
testHelper(15, "fifteen dollars");
testHelper(16, "sixteen dollars");
testHelper(17, "seventeen dollars");
testHelper(18, "eighteen dollars");
testHelper(19, "nineteen dollars");

testHelper(20, "twenty dollars");
testHelper(21, "twenty one dollars");
testHelper(22, "twenty two dollars");