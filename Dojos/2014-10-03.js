/**
 * Check Writing
 *
 * GIVEN: a number like 1234.56
 * WHEN: called with `toEnglish()`
 * THEN: expect 'one thousand two hundred thirty four and 56/100s'
 */
/** === PRODUCTION CODE === **/

/**
 * Function Definition: toEnglish()
 *
 * @name toEnglish Identifier
 *
 * @param Number value
 * @return String
 *
 */
function toEnglish(value){ // Function Definition
    /**
     * Variable
     * ========
     * symbol: ones
     * value: Array
     *
     * Operator:
     * =========
     * name: Assignment
     * symbol: =
     * operands:
     * - Variable: ones
     * - Array
     *
     * Type Literal
     * ============
     * name: Array
     * symbol: [ ]
     *
     * Keyword
     * =======
     * name: Variable Declaration
     * symbol: var
     */
    var ones = [
        /**
         * Type Literal
         * ============
         * name: String
         * symbol:
         * - '. . .'
         * - ". . ."
         *
         * Operator
         * ========
         * name: ????
         * symbol: ,
         */
        'zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
    ];

    /**
     * Keyword
     * =======
     * name: Variable Declaration
     * symbol: var
     *
     * Identifier
     * ==========
     * name: Variable
     * symbol: tens
     *
     * Operator
     * ========
     * name: Assignment Operator
     * symbol: =
     *
     * Type Literal
     * ============
     * name: Array
     * symbol: [
     */
    var tens = [
        /**
         * Type Literal
         * ============
         * name: String
         * symbol: '. . .'
         *
         * Operator
         * ========
         * name: Separator
         * symbol: ,
         */
        'twenty', 'thirty', 'forty'
    ];
    // {tens[0] === 'twenty'}

    /**
     * Keyword
     * =======
     * name: Conditional
     * symbol: if
     *
     * Operator
     * ========
     * name: Conditional
     * symbol: () parentheses
     *
     * Identifier
     * ==========
     * name: Parameter (Special Variable)
     * symbol: value
     *
     * Operator
     * ========
     * name: Greater Than
     * symbol: >
     * operands:
     * - value
     * - 19
     *
     * Type Literal
     * ============
     * name: Number
     * symbol: 19
     *
     * Operator
     * ========
     * name: Block
     * nickname: Moustache
     * symbol: { }
     */
    // if ( condition ) expression;
    if ( value > 19 ){
        value_ones = value - 20;

        value_tens = value / 10;

        if ( value_ones > 0 ){
            return tens[value_tens - 1] + ' ' + ones[value_ones];
        }

        return tens[value_tens - 1];
    }

    return ones[value];
}


/** === TEST CODE === **/
var assert = require('assert');

function test(actual, expected, message){
    try {
        assert.strictEqual(toEnglish(actual), expected);

        test.passes++;
    } finally {
        test.tests++;
    }
    // console.log('pass: ' + actual + ' >> ' + expected);
}
test.tests = 0;
test.passes = 0;

assert(toEnglish);
var testCases = [
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [21, 'twenty one'],
    [22, 'twenty two'],
    [23, 'twenty three'],
    [24, 'twenty four'],
    [25, 'twenty five'],
    [26, 'twenty six'],
    [27, 'twenty seven'],
    [28, 'twenty eight'],
    [29, 'twenty nine'],
    // [30, 'thirty' ],
    // [31, 'thirty one'],
    // [32, 'thirty two'],
    // [33, 'thirty three'],
    // [34, 'thirty four'],
    // [35, 'thirty five'],
    // [36, 'thirty six'],
    // [37, 'thirty seven'],
    // [38, 'thirty eight'],
    // [39, 'thirty nine'],
    // [40, 'forty'],
];

for ( var index = 0; index < testCases.length; index++ ){
    test(testCases[index][0], testCases[index][1]);
}
console.log('passed ' + test.passes + ' of ' + test.tests + ' tests');