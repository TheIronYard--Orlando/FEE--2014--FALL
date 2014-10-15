### Resources:

* [Eloquent JavaScript](http://eloquentjavascript.net)
* [CodeCombat](http://codecombat.com) (DON'T DO THIS NOW!)
* [Vim Adventures](http://vim-adventures.net) (ALSO THIS!)
* [Ruby Warrior](http://bloc.io/ruby-warror) (ITSATRAP!)
* [Chess.com](http://chess.com) | [Catalan opening, closed variation](http://j.mp/1BSJj9W)
* [Chess on Stack Exchange](http://chess.stackexchange.com)

### Let's build a Game!

* You know how to play Chess, don't you?
* Well, you know an opening, at least...
* See format below.

### Reading JavaScript (50)
* Add 10 more examples of JavaScript OBJECTS
* Look for:
    * `Capitalized` function definitions (Constructors)
    * using the `new` keyword
    * all them `prototypes` everywhere
* Use the format below...


### Chessboard Interface

* `@constructor Chess`: Setup a `board` with `Pieces` representing an initial chessboard.
    * `@method getPlayer()`
        * `@return String either "white" or "black" representing current player`
    * `@method display()`
        * `@return String representation of board`
    * `@method move(piece, destination)`: Move `piece` to `destination` and...?
       * `@param Piece piece to move`
       * `@param Position destination to move piece to`
    * `@method opening()`: Advance the `board` to [Catalan Opening, Closed Variation](http://j.mp/1BSJj9W)
* `@constructor Position(x,y)`: Represent a position on a chessboard with coordinates
    * usage: `new Position(1,1)`
    * `@property Number x coordinate`
    * `@property Number y coordinate`
* `@constructor Piece(name, color)`: Represent a chesspiece on the `board` with `name` and `color` and appropriate starting position
    * usage: `new Piece('Queen', 'black')`
    * `@method getName()`
        * `@return String name of Piece, e.g. 'Queen', 'Pawn'`
    * `@method getColor()`:
        * `@return String player 'black' or 'white'`
    * `@method setPosition(position)`: Set `Piece` to `position` on board
        * `@param Position position`
    * `@method toString()`
        * `@return String representation of Piece`
        * example: `"Q" === String(new Piece("Queen", "white"))`
        * example: `"r" === String(new Piece("Rook", "black"))`

### Reading JavaScript

```javascript
var foo = 'bar'; // this is a comment
```

* Symbol: `var`
  * Type: Keyword
  * Name: "var"
  * Meaning: Create an identifier
  * Operands: `foo`
* Symbol: `foo`
  * Type: Identifier
  * Name: "variable foo"
  * Meaning: Variable (bucket) to hold a value.
* Symbol: `=`
  * Type: Operator
  * Name: "is assigned"
  * Meaning: Store the value to the right in the identifier on the left
  * Operands: `foo`, `'bar'`
* Symbol: `'bar'`
  * Type: Type Literal
  * Name: "string bar"
  * Meaning: Create a literal String value containing "bar"
* Symbol: `;`
  * Type: Operator
  * Name: "semicolon", "statement operator"
  * Meaning: End the statement
  * Operands: `var foo = 'bar'`
* Symbol: `//`
  * Type: Comment
  * Name: Inline Comment
  * Meaning: Do not interpret anything until the end of the line