/**
 * @return Object containing `solveFor`, a method that solves Project Euler #2 for a given limit
 */
function solution(){
    return {
        /**
         * Find the sum of the even-numbered terms in the Fibonacci Sequence less
         * than `limit`
         *
         * @param Number limit e.g. 4 MILLION!
         * @return Number sum of even fibonacci terms less than limit
         */
        solveFor: function(limit){
            return this.sum(
                this.filterEvens(
                    this.fibonacci(limit)
                )
            );
        },

        /**
         * @param Number limit
         * @return Array of Number in fibonacci sequence up to limit
         */
        fibonacci: function(limit){
            var prev = 1, curr = 2, temp;
            var sequence = [ 1, 2 ];

            if ( limit < 3 ){
                return [ ];
            }

            /**
             * prev = 1, curr = 2, temp = undefined;
             * while 1 + 2 < 5
             *   temp = 1 + 2 = 3
             *   prev = curr = 2
             *   curr = temp = 3
             */
            while ( prev + curr < limit ){
                temp = prev + curr;
                prev = curr;
                curr = temp;

                sequence.push(temp);
            }
            return sequence;
        },

        /**
         * @param Array list of Number
         * @return Array of even-valued Number
         */
        filterEvens: function(list){
            /**
             * list = [ 1 ], item = 1
             * item (1) % 2 == 1
             *
             * list = [ 2 ], item = 2
             * item (2) % 2 == 0
             *
             * list = [ 3 ], item = 3
             * item (3) % 2 == 1
             */
            return list.filter(function(item){
                return ( item % 2 === 0 );
            });
        },

        /**
         * @param Array list of Number
         * @return Number sum of all items in list
         */
        sum: function(list){
            /**
             * list = [ 1, 2, 3 ]
             *
             * prev = init = 0 from reduce(list, init)
             * item = 1
             * return 0 + 1 = 1
             *
             * prev = 1 (returned)
             * item = 2
             * return 1 + 2 = 3
             *
             * prev = 3 (returned)
             * item = 3
             * return 3 + 3 = 6
             */
            return list.reduce(function(prev, item){
                return prev + item;
            }, 0);
        }
    };
} // END solution


/** === TESTING CODE === **/
var assert = require('chai').assert

describe('Project Euler #1', function(){
    var S; // or var S = solution();

    beforeEach(function(){
        S = solution();
    });

    describe('fibonacci sequence', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.fibonacci);
            assert.deepEqual(S.fibonacci(0), [ ]);
        });

        it('should calculate fibonacci numbers for a small sample', function(){
            assert.deepEqual(S.fibonacci(5), [ 1, 2, 3 ]);
            assert.deepEqual(S.fibonacci(10), [ 1, 2, 3, 5, 8 ]);
            assert.deepEqual(S.fibonacci(20), [ 1, 2, 3, 5, 8, 13]);
            assert.deepEqual(S.fibonacci(40), [
                1, 2, 3, 5, 8, 13, 21, 34
            ]);
        });
    });

    describe('filterEvens', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.filterEvens);
            assert.deepEqual(S.filterEvens([ ]), [ ]);
        });

        it('should filter out evens', function(){
            assert.deepEqual(S.filterEvens([ 1 ]), [ ]);
            assert.deepEqual(S.filterEvens([ 2 ]), [ 2 ]);

            assert.deepEqual(S.filterEvens([ 1, 2 ]), [ 2 ]);
            assert.deepEqual(S.filterEvens([ 1, 2, 3 ]), [ 2 ]);
        });
    });

    describe('sum values in a list', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.sum);
            assert.equal(S.sum([ ]), 0);
        });

        it('should sum items', function(){
            assert.equal(S.sum([ 1 ]), 1);
            assert.equal(S.sum([ 2 ]), 2);

            assert.equal(S.sum([ 1, 1 ]), 2);
            assert.equal(S.sum([ 1, 2 ]), 3);

            assert.equal(S.sum([ 1, 2, 3 ]), 6);
            assert.equal(S.sum([ 2, 2, 2 ]), 6);
            assert.equal(S.sum([ 3, 1, 4 ]), 8);
        });
    });

    describe('solveFor', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.solveFor);
        });

        it('should be able to solve simple examples', function(){
            assert.equal(S.solveFor(0), 0);
            assert.equal(S.solveFor(3), 2); // FAIL!
            assert.equal(S.solveFor(5), 2);
            assert.equal(S.solveFor(15), 10);
        });

        it('should calculate the final answer', function(){
            console.time('4M');
            console.log(S.solveFor(4.0e12));
            console.timeEnd('4M');
        });
    });
});