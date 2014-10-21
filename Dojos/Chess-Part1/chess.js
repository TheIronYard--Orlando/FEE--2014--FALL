var _ = require('lodash');

/**
 * @constructor Position(x,y): Represent a position on a chessboard with coordinates
 *
 * @property Number x coordinate
 * @property Number y coordinate
 */
var Position = module.exports.Position = function(x,y){
    this.x = x;
    this.y = y;
};


/**
 * @constructor Piece(name, color): Represent a chesspiece on the board with name and color and appropriate starting position
 * @method toString()
      * @return String representation of Piece
      * example: "Q" === String(new Piece("Queen", "white"))
      * example: "r" === String(new Piece("Rook", "black"))
 */
var Piece = module.exports.Piece = function(name, color){
    this.name = name;

    this.color = color;
};

/**
 * @method getName()
 * @belongsTo Piece
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */
Piece.prototype.getName = function(){
    return this.name;
};

/**
 * @method getColor():
 * @belongsTo Piece
 * @return String player 'black' or 'white'
 */
Piece.prototype.getColor = function(){
    return this.color;
};

/**
 * @method setPosition(position): Set Piece to position on board
 * @param Position position
 */
Piece.prototype.setPosition = function(position){
    this.position = position;
};



/**
 * @constructor Chess: Setup a board with Pieces representing an initial chessboard.
 *
 * @method getPlayer()
      * @return String either "white" or "black" representing current player
 * @method move(piece, destination): Move piece to destination and...?
      * @param Piece piece to move
      * @param Position destination to move piece to
 * @method opening(): Advance the board to [Catalan Opening, Closed Variation](http://j.mp/1BSJj9W)
 */
var Chess = module.exports.Chess = function Chess(){
    this.board = [ ];

    /**
     * This block and the next one are identical except for the identifier,
     * the name and color of the piece, and the position assigned to it. How
     * could we abstract?
     */
    { // BLOCK OF CONVENIENCE
        var whiteQueenRook = new Piece('Rook', 'white');

        whiteQueenRook.setPosition(new Position(8,'a'));

        this.board.push(whiteQueenRook);
    } // END BLOCK OF CONVENIENCE

    { // BLOCK OF CONVENIENCE
        var blackQueenRook = new Piece('Rook', 'black');

        blackQueenRook.setPosition(new Position(1,'a'));

        this.board.push(blackQueenRook);
    } // END BLOCK OF CONVENIENCE
}

Chess.prototype.pieceAt = function(x,y){
    var piece;
    for ( var index = 0; index < this.board.length; index++ ){
        piece = this.board[index];

        if ( piece.position.x === x && piece.position.y === y ){
            return piece;
        }
    }
};

/**
 * @method display()
 *
 * @return String representation of board
 */
Chess.prototype.display = function(){
    var spacer =  "  +---+---+---+---+---+---+---+---+",
    board = [
        "    a   b   c   d   e   f   g   h", spacer
    ],
    numRows = 8, numCols = 8;

    _.times(numRows, function(row){
        var rank = (row + 1);

        if ( rank == 1 ){
            board.push("1 | r | n | b | q | k | b | n | r |");
        } else if ( rank == 2 ){
            board.push("2 | p | p | p | p | p | p | p | p |");
        } else if ( rank == 7 ){
            board.push("7 | P | P | P | P | P | P | P | P |");
        } else if ( rank == 8 ){
            board.push("8 | R | N | B | Q | K | B | N | R |");
        } else {
            board.push(rank + ' | ' +
                _.times(numCols, function(cols){
                    return ' ';
                }).join(' | ') +
            ' |');
        }
        board.push(spacer);
    });
    return board.join("\n");
};

