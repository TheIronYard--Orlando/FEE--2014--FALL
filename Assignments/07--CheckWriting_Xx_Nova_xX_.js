/** ==== CODE! ==== **/
function num2Words(money){

    var value = money.toString();// takes input and turns it into a string. Ex = 1 turns to "1"
    value = Number(value).toFixed(2); //takes the string from above and wraps it in Number wrapper(tells that it's a number) 
                                     //and makes sure it has 2 decimal points but no more. Ex = "1" = "1.00"
    
    var dollars = value.slice(0,-3);
    var cents = value.slice(-2); //creates a cents variable so that I can seperate the cents, which does not need to be changed in the output,
                                //and hold it for when it is called. Ex "10.25" = "25"
    var centsWords = "dollars & " + cents + "/100s"; // creates a variable to use for printout of string to save typing Ex 1.25 = "one dollars & 25/100s
    
    var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    
    var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    var hundreds = ["zero", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    
    var thousands = ["zero", "one thousand", "two thousand", "three thousand", "four thousand", "five thousand", "six thousand", "seven thousand", "eight thousand", "nine thousand"];
    
    //Above are my variables to call in the function to replace numbers with words

    if (money < 20)
        return ones[dollars] + " " + centsWords;
        
        if (money < 100){
            if (money % 10 === 0){
                return tens[value[0]] + " " + centsWords;
            }
            return tens[value[0] ] + " " + ones[ value[1] ] + centsWords;
        }

            if (money < 1000){
                if (money % 100 === 0){
                    return hundreds[value[0]] + " " + centsWords;
                }
                    if (money % 10 === 0){
                    return hundreds[value[0]] + tens[value[1]] + " " + centsWords;
                    }
            
                        if (value[1] < 2) {   //hundreds digits, _10 < x < _20
                         return hundreds[ value[0] ] +" "+ tens[value[2]] + centsWords;
                        }
                        
            return hundreds[value[0]] +" "+ tens[value[1]] +" "+ ones[value[2]] + centsWords;
            }
            
                    if (money < 10000){
                        if (money % 1000 === 0){return(thousands[value[0]]+ " " + centsWords);}
                          if (money % 100 === 0){return(thousands[value[0]] +" "+ hundreds[value[1]] + centsWords);}
                            if (money % 10 === 0){return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] + centsWords);}
                              if (value[1] < 1) {return(thousands[value[0]] + " " + tens[value[2]] + " " + ones[value[3]] + centsWords);}
                                if (value[2] < 2) {return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ teens[value[3]] + centsWords);}
                        return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] +" "+ ones[value[3]] + centsWords)
  }
    }
   









// TEST
var assert = require('assert');

function testHelper(number, string, message){
    if ( message === undefined ) message = 'pass: ' + string;

    assert.strictEqual(num2Words(number), string);
    console.log(message);
}

assert(num2Words);
console.log('got here!');


testHelper(1, "one dollars & 00/100s");
//testHelper(50, "fifty dollars & 00/100s");
testHelper(500, "five hundred dollars & 00/100s");
testHelper(5000, "five thousand dollars & 00/100s");
