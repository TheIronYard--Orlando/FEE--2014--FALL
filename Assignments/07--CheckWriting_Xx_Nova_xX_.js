/** ==== CODE! ==== **/
function num2Words(dollars){
    var suffix = " dollars";
    var suffix2 = "twenty"

    /**
     * 1. "one"
     * 2. "two"
     * 3. "three"
     * 4. "four"
     * 5. "five"
     */
    var ones =  [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    var teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];

    if (dollars >= 10){
        return teens[dollars - 10] + suffix;
    }
    return ones[dollars] + suffix;
    
    if (dollars >= teens){
        return ones[dollars] + suffix2;
    }
}

/** ==== TESTS! ==== **/
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
testHelper(12, "twelve dollars");
testHelper(13, "thirteen dollars");
testHelper(14, "fourteen dollars");
testHelper(15, "fifteen dollars");
testHelper(16, "sixteen dollars");
testHelper(17, "seventeen dollars");
testHelper(18, "eighteen dollars");
testHelper(19, "nineteen dollars");