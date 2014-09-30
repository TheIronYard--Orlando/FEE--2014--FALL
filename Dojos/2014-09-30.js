/**
 * =   : Assignment Operator "assigned", "assigns"
 *      var foo = "bar";
 *
 * Comparison Operators:
 * ==  : Roughly Equivalent: "double equal"
 * === : Strictly Equivalent
 * >   : "greater than"
 * <   : "less than"
 * >=  : "greater-or-equal-to"
 *
 * Boolean / Logical Operators:
 * &&  : "and" -- returns TRUE if both sides are TRUE
 * ||  : "or"  -- returns TRUE if either side is TRUE
 *
 */
function lettersToNumbers(letters){
    if (letters == "one"){
        letters = 1;
    }
    if (letters == "two"){
        letters = 2;
    }
    if (letters == "three"){
        letters = 3;
    }
    if (letters == "four"){
        letters = 4;
    }
    if (letters == "five"){
        letters = 5;
    }
    return letters;
}

function test_lettersToNumbers(a, b){
    console.log('it should convert "' + a + '" to ' + b + ': ',
        lettersToNumbers(a) === b);
}

test_lettersToNumbers('one', 1);
test_lettersToNumbers('two', 2);
test_lettersToNumbers('three', 3);
test_lettersToNumbers('four', 4);
test_lettersToNumbers('five', 5);

function add(a, b){
    a = lettersToNumbers(a);

    b = lettersToNumbers(b);

    return a + b;
}

function test_add(a, b, c){
    console.log('it should add ' + a + ' and ' + b + ': ',
        add(a, b) === c);
}

test_add("one", "one", 2);
test_add("one", "two", 3);
test_add("one", "three", 4);
test_add("one", "four", 5);
test_add("one", "five", 6);
test_add("two", "one", 3);
test_add("two", "two", 4);
test_add("two", "three", 5);
test_add("two", "four", 6);
test_add("two", "five", 7);
test_add("three", "one", 4);
test_add("three", "two", 5);
test_add("three", "three", 6);
test_add("three", "four", 7);
test_add("three", "five", 8);
test_add("four", "one", 5);
test_add("four", "two", 6);
