
/*this function takes the input, dollars, from the user */
/*this suffix will be added to the input and */
function num2Words(dollars){
var suffix = " dollars";

//variables to represent the numbers in words
    var ones = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    var tens = [ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
    var teens = [ "zero", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
    var hundreds = ["zero", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    var thousands = ["zero", "one thousand", "two thousand", "three thousand", "four thousand", "five thousand", "six thousand", "seven thousand", "eight thousand", "nine thousand"]; 
    
//  
    var cents = ((dollars - Math.floor(dollars))* 100).toFixed(0) //calculates the change, Math.floor() returns the largest integer that is less than or equal to the number entered.
                                                          // .toFixed(digits) = number of digits to appear after the decimal point.
    dollars = Math.floor(dollars) //rounds the number down to a whole number
    var val = dollars.toString(); //converts the number to an array of strings
    
    if (dollars < 20){
        return ones[dollars] + suffix;
    }

   if (dollars < 100){
       if (dollars % 10 === 0) //fixes problem for numbers like 20, 30 - no "twenty zero"
           return tens[val[0]] + suffix; // returns the tens array starting at sub zero and adds the suffix " dollars" on the end if the number is divisible by 10 with no remainder
  
       return tens[val[0]] + " " + ones[val[1]] + suffix; // returns the tens array starting at sub zero and adds the ones array starting at sub 1 and adds the suffix " dollars" on the end
    }
    
    if (dollars < 1000){
        if (val[1] === '0' && val[2] === '0'){ //fixes the issue to get numbers like 100 to work
            return hundreds[val[0]] + suffix;
        }
        if (val[1] < 2) { //fixes issues like 'one hundred ten two' != one hundred twelve
            return hundreds[val[0]] + " " + teens[val[1]] + suffix;
            
        }
        if (dollars % 10 === 0)
            return hundreds[val[0]] + " "+ tens[val[1]] + suffix;
            
        return hundreds[val[0]] + " " + tens[val[1]] + " " + ones[val[2]] + suffix;

    }
    if (dollars < 10000){
        
        if(val[1] === '0' && val[2] === '0' && val[3] === '0'){
            return thousands[val[0]] + suffix;
        }
  
        if (val[2] < 2) {
            return thousands[val[0]] + " " + teens[val[2]] + suffix;
        }  

        if (dollars % 10 === 0){
            return thousands[val[0]] + " " + hundreds[val[1]] + " " + tens[val[2]] + suffix;         
         
        }
        return thousands[val[0]] + " " + hundreds[val[1]] + " " + tens[val[2]] + " " + ones[val[3]] + suffix;
    }
        

    
    
    
    
}  
    
    
    
    
    
    
    
   //TESTING  
    
var assert = require('assert');

function testHelper(number, string, message){
    if ( message === undefined ) message = 'pass: ' + string;

    assert.strictEqual(num2Words(number), string);
    console.log(message);
}

assert(num2Words);
console.log('got here!');


testHelper(1, "one dollars");
testHelper(2, "two dollars");
testHelper(3, "three dollars");
testHelper(4, "four dollars");
testHelper(5, "five dollars");
testHelper(6, "six dollars");
testHelper(7, "seven dollars");
testHelper(8, "eight dollars");
testHelper(9, "nine dollars");
testHelper(10, "ten dollars");

testHelper(11, "eleven dollars");
testHelper(15, "fifteen dollars");
testHelper(19, "nineteen dollars");


testHelper(20, "twenty dollars");
testHelper(23, "twenty three dollars");
testHelper(30, "thirty dollars");
testHelper(40, "forty dollars");
testHelper(88, "eighty eight dollars");
testHelper(92, "ninety two dollars");
testHelper(99, "ninety nine dollars");

testHelper(100, "one hundred dollars");
testHelper(110, "one hundred ten dollars");
testHelper(190, "one hundred ninety dollars");

testHelper(275, "two hundred seventy five dollars");
testHelper(420, "four hundred twenty dollars");
testHelper(666, "six hundred sixty six dollars");
testHelper(983, "nine hundred eighty three dollars");
testHelper(999, "nine hundred ninety nine dollars");

testHelper(1000, "one thousand dollars");
testHelper(1010, "one thousand ten dollars");
testHelper(9939, "nine thousand nine hundred thirty nine dollars");
testHelper(9940, "nine thousand nine hundred forty dollars");