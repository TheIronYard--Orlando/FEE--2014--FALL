/**
 * Conway's Game of Life (LITE)
 *
 * @link http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 *
 * Consider a finite 3x3 board of cells:
 *
 *     0   1   2
 *   +---+---+---+
 * 0 |   |   |   |
 *   +---+---+---+
 * 1 |   |   |   |
 *   +---+---+---+
 * 2 |   |   |   |
 *   +---+---+---+
 *
 * Represented as:
 *
 * board = [
 *   [ false, false, false ],
 *   [ false, false, false ],
 *   [ false, false, false ],
 * ]
 *
 * Where each Boolean value represents the state of a `cell`, either
 * alive (`true`) or dead (`false`). Each cell can be accessed with
 * the index operators (`[n]`), e.g. `board[0][1]`, `board[2][2]`.
 *
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
 *
 * Use the provided `board` function to produce the initially empty
 * board, and test the following starting positions:
 *
 * Initially Empty Board
 * =====================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   |   |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Just One Cell
 * =============
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Two Cells in Any Arrangement
 * ============================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X | X | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 | X |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Three Cells in a Line
 * =====================
 *       start              tick 1             tick 2
 *     0   1   2          0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 0 |   | X |   |    0 |   |   |   |    0 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 | X | X | X | >> 1 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 2 |   | X |   |    2 |   |   |   |    2 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 *
 * You may test more starting position, if you like, of course.
 */

var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected){
    assert.strictEqual(actual, expected);
}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
function board(){
    return [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];
}

/**
 * @param Boolean cell
 * @param Array neighbors
 * @return Boolean state of cell
 */
function conway(cell, neighbors){
    var alive = 0;
    neighbors.forEach(function(neighbor){
        if ( neighbor ){
            alive++;
        }
    });

    if ( cell && alive === 2 ){
        return true;
    }
    if ( alive === 3 ){
        return true;
    }
    return false;
}

describe('generation rule', function(){

    it('should NOT generate a new cell if there are fewer than 3 neighbors', function(){
        test(conway(false, [ ]), false);
        test(conway(false, [ true ]), false);
        test(conway(false, [ true, true ]), false);
        test(conway(false, [ false, false, false ]), false);
    });

    it('should generate a new cell if there are exactly 3 neighbors', function(){
        test(conway(false, [ true, true, true ]), true);
    });

    it('should NOT generate a new cell if there are MORE than 3 neighbors', function(){
        test(conway(false, [ true, true, true, true ]), false);
        test(conway(false, [ true, true, true, true, true ]), false);
    });
});

describe('underpopulation rule', function(){
    it('should die if there are fewer than 2 or 3 neighbors', function(){
        test(conway(true, [ ]), false);
        test(conway(true, [ true ]), false);

        test(conway(true, [ false, false ]), false);
        test(conway(true, [ false, false, false ]), false);
    });
});

describe('survival rule', function(){
    it('should survive if there are exactly 2 or 3 neighbors', function(){
        test(conway(true, [ true, true ]), true);
        test(conway(true, [ true, true, true ]), true);
    });
});

describe('overpopulation rule', function(){
    it('should die if there are more than 3 neighbors', function(){
        test(conway(true, [ true, true, true, true ]), false);
        test(conway(true, [ true, true, true, true, true ]), false);
    });
});

/**
 * @param Array board of Array of Boolean (except for testing)
 * @param Number x coordinate of cell
 * @param Number y coordinate of cell
 * @return Array of values from `board` that are neighbors of cell(`x`, `y`)
 */
function neighborsOf(board, x, y){
    var diffs = [ -1, 0, +1 ],
        neighbors = [ ];

    // Apply each `diff` to the `x` coordinate...
    diffs.forEach(function(dX){
        // If no element exists, skip...
        if ( !board[x + dX] ) return;

        // Apply the `diff` to the `y` coordinate...
        diffs.forEach(function(dY){
            // skip yourself...
            if ( dX === 0 && dY === 0 ) return;

            // If no element exists, skip...
            if ( !board[x + dX][y + dY] ) return;

            neighbors.push(board[x + dX][y + dY]);
        });
    });

    return neighbors;
}

describe('neighborsOf', function(){
    it('should have a `neighborsOf()` function', function(){
        assert(neighborsOf);
    });

    var _board;

    beforeEach(function(){
        _board = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ],
        ];
    });

    describe('GIVEN a 3x3 board', function(){
        it('should return three neighbors for the corners', function(){
            assert.deepEqual(
                neighborsOf(_board, 0, 0),
                [ 2, 4, 5 ]
            );

            assert.deepEqual(
                neighborsOf(_board, 0, 2),
                [ 2, 5, 6 ]
            );

            assert.deepEqual(
                neighborsOf(_board, 2, 0),
                [ 4, 5, 8 ]
            );

            assert.deepEqual(
                neighborsOf(_board, 2, 2),
                [ 5, 6, 8 ]
            );
        });

        it('should return 5 cells for the edges', function(){
            assert.deepEqual(
                neighborsOf(_board, 0, 1),
                [ 1, 3, 4, 5, 6 ]
            );

            assert.deepEqual(
                neighborsOf(_board, 1, 0),
                [ 1, 2, 5, 7, 8 ]
            );

            assert.deepEqual(
                neighborsOf(_board, 1, 2),
                [ 2, 3, 5, 8, 9 ]
            );

            assert.deepEqual(
                neighborsOf(_board, 2, 1),
                [ 4, 5, 6, 7, 9 ]
            );
        });

        it('should return all cells for the middle', function(){
            assert.deepEqual(
                neighborsOf(_board, 1, 1),
                [ 1, 2, 3,
                  4,    6,
                  7, 8, 9 ]
            );
        });
    }); // END describe(3x3 board)
});

function tick(before){
    var after = board();

    before.forEach(function(row, x){
        row.forEach(function(cell, y){
            //console.log(cell, x, y);
            after[x][y] = conway(cell, neighborsOf(x,y));
            //console.log(after[x][y]);
        });
    });

    return after;
}

describe('tick', function(){
    it('should have a `tick()` function', function(){
        assert(tick);
    });

    describe('GIVEN a 3x3 board', function(){
        var _board;

        beforeEach(function(){
            _board = board();
        });

        describe('WHEN the board is empty', function(){
            it('should remain empty', function(){
                assert.deepEqual(tick(_board), board());
            });
        });

        describe('WHEN the board has fewer than 3 adjacent cells', function(){

            it('should die in 1 tick', function(){
                _board[0][0] = true;
                assert.deepEqual(tick(_board), board());

                _board[1][1] = true;
                assert.deepEqual(tick(_board), board());

                _board[2][2] = true;
                assert.deepEqual(tick(_board), board());
            });
        });

        describe('WHEN the board has 3 adjacent cells in a line', function(){
            it('should oscilate every tick', function(){
                _board[0][1] = true;
                _board[1][1] = true;
                _board[2][1] = true;

                expected = [
                    [ false, false, false ],
                    [ true,  true,  true  ],
                    [ false, false, false ],
                ];

                assert.deepEqual(_board, [
                    [ false, true,  false ],
                    [ false, true,  false ],
                    [ false, true,  false ],
                ]);
                assert.deepEqual(tick(_board), expected);
            });
        });
    }); // END describe(3x3 board)

    // Changed the file!
});