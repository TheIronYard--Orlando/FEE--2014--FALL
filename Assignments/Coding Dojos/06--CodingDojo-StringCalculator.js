//String Calculator Xx-Nova-Xx


function convertWords(a, b){
    
    if (a === "zero"){
        return 0;
    }
    if (a === "one"){
        return 1;
    }
    if (a === "two"){
        return 2;
    }
    if (a === "three"){
        return 3;
    }
    if (a === "four"){
        return 4;
    }
    if (a === "five"){
        return 5;
    }
    if (a === "six"){
        return 6;
    }
    if (a === "seven"){
        return 7;
    }
    if (a === "eight"){
        return 8;
    }
    if (a === "nine"){
        return 9;
    }
    if (a === "ten"){
        return 10;
    }

    var wordNum = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    
    var add = function(a, b){
        a = convertWords(a);
        b = convertWords(b);
        return a + b;
     }
    
    var print = function (a,b,c){
        console.log("It should add " + a + "plus" + b + ": ",
        add(a, b) === c);
    }
   
   wordNum.forEach(function(a, i){
       wordNum.forEach(function(b, j){
           print(a, b, i*j);
       });
   });
   
   var iCount = 0;
        wordNum.forEach(function(i){
        var jCount = 0;
            wordNum.forEach(function(j){
                print(i, j, iCount + jCount);
                jCount++;
              });
            iCount++;
        });
 


var assert = require("assert");

function assert(condition, message) {
    if (a === "one" && b === "one", 2) {
        throw message || "Assertion failed";
         
        // if (message === undefined) message = 'pass: ' + string;
    }
    
                   
}
     
  /* ////// TEST /////     
                var assert = require('assert');
                   assert(add);
                console.log('got here!');
                
               
                
                    assert.strictEqual(add);
                    console.log(message);
                }
                */
             
                
                
              
                //testHelper("");
               
                
                
}            




 
 















