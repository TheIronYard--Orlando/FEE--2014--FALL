function toEnglish(value){
    
    var ones = [ 'zero', 'one', 'two', 'three', /*...*/];
    
    var tens = [ 'ten', 'twenty', 'thirty', 'forty', /*...*/];
    
    //123.45 >> 'one hundred twenty three and 45/100s'
    
    //123.45 >> 'ensure 2 decimal places & convert to string >> 123.45
    // 123 >> 'ensure 2 decimal places & convert to string >> 123.00
    value = Number(value).toFixed(2);                  //limits numbers to 2 decimal places. Makes sure numbers has .00 if input doesn't put it
    
    // 123.45 >> turn into String >> '123.45'
    // '123.45'
}   // '



value = value.toString();

var cents = value.slice(-2);

var dollars = value.slice(0, -3)

var english = cents + '/100s dollars';

{/* Then a miracle happens */







return english;

}


//Test cases
/*var testCases = [
        [1, 'one and 00/100s dollars'],
        [2, 'two and 00/100s dollars'],
        [3, 'three and 00/100s dollars'],
    ]; See below 
    */
    
    var testCases = [
        [0. 'zero']
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [123, 'one hundred twenty three']
    ];


/*for( var index = 0; index < testCases.length; index++ ){
    test(testCases[index][0], testCases[index][1])
}*/

// BlOCK OF CONVIENIENCE

for( var index = 0; index < testCases.length; index++ ){
    test(testCases[index][0], testCases[index][1])
}

/*testCases.forEach(function(item, index, all the items)){
    
});*/

testCases.forEach(function(testCase, index, all the items)){ //actual & expected only exist in this block = does not show in any of the other code
    var actual = toEnglish(testCase[0])
        expected = testCase[1];
        
    assert.strictEqual(actual, expected);
    
    //Can also be written assert.strictEqual(toEnglish(testCase[0], testcase[1]);
    
}); 
    actual; // {toEnglish(123)}
    expected; // {'one hundred twenty three'}

//END BLOCK OF CONVIENCIENCE


test(1, 'one and 0/100s dollars');
test(2, 'two and 0/100s dollars');
test(3, 'three and 0/100s dollars');

test(1.23, 'one and 23/100s dollars');
test(12.34, 'twelve and 34/100s dollars');
test(123.45, 'one hundred twenty three and 45/100s dollars');
