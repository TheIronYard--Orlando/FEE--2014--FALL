//String Calculator Xx-Nova-Xx



var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var wordNum = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    
wordNum[0] = num[0];
wordNum[1] = num[1];
wordNum[2] = num[2];
wordNum[3] = num[3];
wordNum[4] = num[4];
wordNum[5] = num[5];
wordNum[6] = num[6];
wordNum[7] = num[7];
wordNum[8] = num[8];
wordNum[9] = num[9];
wordNum[10] = num[10];


    function add(a, b){
        
    if(a === "one" && b === "one"){   
        a + b;
        return 2;
    }
 
 
     

        
}     
     
  ////// TEST /////     
                var assert = require('assert');
                
                function testHelper(string, message){
                    if (message === undefined) message = 'pass: ';
                
                    assert.strictEqual(add);
                    console.log(message);
                }
                
                assert(add);
                console.log('got here!');
                
                
              
                testHelper(2);
                //testHelper(54.31, "fifty four dollars & 31/100s");
                //testHelper(500, "five hundred dollars & 00/100s");
                //testHelper(5000, "five thousand dollars & 00/100s");
                //testHelper(9027.20, "nine thousand twenty seven dollars & 20/100s");
                
                
                




 
 


/* /////////////Tests/////////////
var assert = require('assert'); //this calls the assert library, variable name can be anything

    function testHelper(number, string, message){
        if(message === undefined) message = "pass: " + string;
        
        assert.strictEqual(convert(a), number);
        console.log(message);
    }

        assert(convert);
        console.log("You've gotten to this point...");
        

testHelper(1);




}







/*
}
if()




    function add(num, wordNUm){
    
    }










wordNum[1] = num[1];
wordNum[0] = num[0];
wordNum[2] = num[2];
wordNum[3] = num[3];
wordNum[4] = num[4];
wordNum[5] = num[5];
wordNum[6] = num[6];
wordNum[7] = num[7];
wordNum[8] = num[8];
wordNum[9] = num[9];
wordNum[10] = num[10];

 

















/* function words2Num(number){
    
    if (number == "one"){
        number = 1;
    }
    
    if (number == "two"){
        number = 2;
    }
    
    if (number == "three") {
       number = 3; 
    }
    
    if (number == "four") {
        number = 4;
    }
    
    if (number == "five") {
        number = 5;
    }
    
    if (number == "six")  {
        number = 6;
    }
    
    if (number == "seven") {
        number = 7;
    }
    
    if (number == "eight") {
        number = 8;
    }
    
    if (number == "nine") {
        number = 9;
    }
    
    if (number == "ten")  {
        number = 10;
    }
     
    return number;   
}
    var sum = "a + b == ";
    
    function add(a, b){
        if(a === "one" && b === "one"){
        return sum + 2;
        }   
        if(a === "one" && b === "two"){
        return sum + 3;
        }
        if(a === "two" && b === "three"){
        return sum + 5;
        }
        if(a === "three" && b ==="four"){
        return sum + 7;
        }
    }
    
   
   /* var expect = require('chai').expect;
    describe("Turning word numbers into numbers", function(){
          it('should return a number for words', function(){
            expect(sum).to.be.a('string');
        })
 
    
    var assert = require('assert');

function testHelper(number, string, message){
    if ( message === undefined ) message = 'pass: ' + string;

    assert.strictEqual(words2Num(number), string);
    console.log(message);
    }

    assert(words2Num);
    console.log('got here!');


    testHelper("one" , "one", "one + one === 2");
    //testHelper(2, "two");
    //testHelper(3, "three");
    
    
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

*/
    
    
    
 