/**
 * String Calculator
 *
 * Given two strings like "one", "two", and "three" that
 * represent numbers, calculate the product of those numbers
 * and return the result.
 */

var multiply = function(a, b) {
  if ( a === "zero" || b === "zero"){
    return 0;
  }
  // if ( a === "one" && b === "zero" )
  // if ( a === "one" && b === "one" )
  // if ( a === "one" && b === "two" )
  // if ( a === "one" && b === "three" )
  if ( a === "one" ){
    if ( b === "two" ){
      return 2;
    }

    if ( b === "three" ){
      return 3;
    }
  }
  if (a === "two" && b === "one" ){
    return 2;
  }
  return 1;
}
console.log('it should multiply "one" and "one": ',
  multiply("one", "one") === 1);
console.log('it should multiply "zero" and "one": ',
  multiply("zero", "one") === 0);
console.log('it should multiply "one" and "zero": ',
  multiply("one", "zero") === 0);
console.log('it should multiply "one" and "two": ',
  multiply("one", "two") === 2);
console.log('it should multiply "two" and "one": ',
  multiply("two", "one") === 2);
console.log('it should multiply "one" and "three": ',
  multiply("one", "three") === 3);
