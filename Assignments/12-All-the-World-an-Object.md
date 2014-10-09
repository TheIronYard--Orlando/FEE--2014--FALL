### Resources:

### New Concepts:

* Refactor your katas (see below):
    * Use Objects with functions instead of loose functions
    * Use the format and `display()` function provided for "Conway"
* Attempt 2 [problems from Project Euler](http:/projecteuler.net/problems)
    * Use the format provided below for your solutions
    * Pair up with someone for at least 1 hour!

### Practice / Reading:

* Add more examples to your `Reading-JavaScript.md` file; use a branch and a PR like usual; you should probably break this line up into individual items; don't forget the checkboxes...!
* Complete the [`Array.prototype` Methods](http://j.mp/1t36RKf) assignment from yesterday:
    * Translate each one using English and maybe some examples.
    * Retype [the multidimensional array example](http://j.mp/1t37hAo)
    * Write a series of steps that adjust the array to look like [the Catalan Opening: Closed Variation](http://j.mp/1BSJj9W)
    * Write tests that verify that your "board" looks correctly at every step.

#### Using Objects instead of loose functions...

```javascript
function toEnglish(value){ /* . . . */ }
// turn ^^ into vv
var CheckWriting = {
    toEnglish: function(value){ /* . . . */ }
}
```

#### Project Euler Format

```javascript
/* === PRODUCTION CODE === */
function solution(){
    // change input to suit the solution, e.g. `limit`
    return {
        // I wanna see this one...
        solveFor: function(limit){ /* perform magic... */ },

        // For Problem 2, for example... However you solve it.
        fibonacci: function(limit){ /* . . . */ },
        filterEvens: function(list){ /* . . . */ },
        sum: function(list){ /* . . . */ }
    }
}

/* === TEST CODE === */
// You should probably write some...
```

#### Conway's Game of Life

```javascript
var game = {
    board: undefined,
    newBoard: function(){ /* i.e. board() */ },
    rules: function(cell, neighbors){ /* i.e. conway(cell, neighbors) */ },
    neighborsOf: function(x,y){ /* . . . */ },
    tick: function(){ /* accepts nothing, alters `game.board` */ },

    /**
     * WARNING: This is VOODOO MAGIC...
     *
     * GIVEN:
     *   this.board === [
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *   ];
     *
     * EXPECT:
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     */
    display: function(){
        var spacer = '+---+---+---+\n';

        return spacer +
            // Apply `renderRow` to each `row` in `board`...
            this.board.map(function renderRow(row){
                return '| ' +
                    // Apply `renderCell` to each `cell` in `row`...
                    row.map(function renderCell(cell){
                        // return 'X' if `cell` is TRUTHY otherwise return ' '
                        return cell && 'X' || ' ';
                    }).join(' | ') // Place ' | ' between each `cell`...
                + ' |\n';
            }).join(spacer) // Place `spacer` between each `row`...
        + spacer;
    } // END display
} // END game
```