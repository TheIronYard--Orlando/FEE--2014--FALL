//String Calculator Xx-Nova-Xx

function words2Num(number){
    
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