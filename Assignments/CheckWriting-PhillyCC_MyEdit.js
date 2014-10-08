
var ones = ["zero", "one", "two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
"fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
"nineteen"];

var teens = ["zero", "eleven", "twelve", "thirteen", "fourteen",
"fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty",
"sixty", "seventy", "eighty", "ninety"];

var hundreds = ["zero", "one hundred", "two hundred", "three hundred",
"four hundred", "five hundred", "six hundred", "seven hundred",
"eight hundred", "nine hundred"];

var thousands = ["zero", "one thousand", "two thousand", "three thousand",
"four thousand", "five thousand", "six thousand", "seven thousand",
"eight thousand", "nine thousand"];

function num2Words(money){

  var value = money.toString(); // "1"
  value = Number(value).toFixed(2); // "1.00"
  
  var cents = value.slice(-2)// "00"
  var dollars = value.slice(0,-3);// [ "1" ]
  var centsWords = " dollars & " + cents + '/100s'; // " dollars & 00/100s"

    if (money < 20) 
        return ones[dollars] + centsWords; //for numbers 0-19

////////////////////////////////////////////////////////////

    if (money < 100){                 //for numbers 20-99
      if (money % 10 === 0){
        return tens[value[0]] + centsWords;
      }
      return tens[value[0]] + " " + ones[value[1]] + centsWords;
    };

////////////////////////////////////////////////////////////

    if (money < 1000){                 //for numbers 100-999
      if (money % 100 === 0){
        return hundreds[value[0]] + centsWords;
      }
        if (money % 10 === 0){     //numbers between 100-999 and divisible by 10
        return hundreds[value[0]]+" "+ tens[value[1]] + centsWords;
        }
          if (value[1] < 2) {   //hundreds digits, _10 < x < _20
          return hundreds[value[0]] +" "+ teens[value[2]] + centsWords;
          }
      return hundreds[value[0]] +" "+ tens[value[1]] +" "+ ones[value[2]] +centsWords;
    }


  if (money < 10000){
    if (money % 1000 === 0){return(thousands[value[0]]+ centsWords);}
      if (money % 100 === 0){return(thousands[value[0]] +" "+ hundreds[value[1]] + centsWords);}
        if (money % 10 === 0){return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] + centsWords);}
          if (value[1] < 1) {return(thousands[value[0]] + " " + tens[value[2]] + " " + ones[value[3]] + centsWords);}
            if (value[2] < 2) {return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ teens[value[3]] + centsWords);}
    return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] +" "+ ones[value[3]] + centsWords)
  }

}


//////////////////////TEST////////////////////
var assert = require('assert');

function testHelper(number, string, message){
    if ( message === undefined ) message = 'pass: ' + string;

    assert.strictEqual(num2Words(number), string);
    console.log(message);
}

assert(num2Words);
console.log('got here!');


testHelper(1, "one dollars & 00/100s");
testHelper(2, "two dollars & 00/100s");
testHelper(3, "three dollars & 00/100s");
testHelper(4, "four dollars & 00/100s");
testHelper(5, "five dollars & 00/100s");
testHelper(6, "six dollars & 00/100s");
testHelper(7, "seven dollars & 00/100s");
testHelper(8, "eight dollars & 00/100s");
testHelper(9, "nine dollars & 00/100s");

testHelper(10, "ten dollars & 00/100s");
testHelper(10.25, "ten dollars & 25/100s");
testHelper(11.31, "eleven dollars & 31/100s");
testHelper(11, "eleven dollars & 00/100s");
testHelper(12, "twelve dollars & 00/100s");
testHelper(13, "thirteen dollars & 00/100s");
testHelper(14, "fourteen dollars & 00/100s");
testHelper(15, "fifteen dollars & 00/100s");
testHelper(16, "sixteen dollars & 00/100s");
testHelper(17, "seventeen dollars & 00/100s");
testHelper(18, "eighteen dollars & 00/100s");
testHelper(19, "nineteen dollars & 00/100s");

testHelper(20, "twenty dollars & 00/100s");
testHelper(21, "twenty one dollars & 00/100s");
testHelper(22, "twenty two dollars & 00/100s");
testHelper(110, "one hundred ten dollars & 00/100s");
testHelper(5391.65, "five thousand three hundred ninety one dollars & 65/100s");
testHelper(9027.00, "nine thousand twenty seven dollars & 00/100s");
testHelper(9027.20, "nine thousand twenty seven dollars & 20/100s");






















/** Check writing
*
* Given a Number representing money -- $1234.56 -- convert
* that into its string representation in English words. For
* example, 1234.56 is "one thousand, two hundred thirty four
* and 56/100s", just like you would see on a check.
*
* In a lot of ways, this is the inverse of the "String Calculator"
* problem, so a lot of what you've learned there will be put into
* practice here, but backwards. Yey.
*/

/** Sample Data:
* 1234.56 => "one thousand, two hundred thirty four, and 56/100s"
* 123.45 => "one hundred twenty three and 45/100s"
* 12.34 => "twelve and 34/100s"
* 1.23 => "one and 23/100s"
*
*Extra credit:
*
* 12345678.90 =>
* "twelve million, three hundred fourt five thousand, six hundred
* seventy eight and 90/100s"

* Make up your own, too.
*/