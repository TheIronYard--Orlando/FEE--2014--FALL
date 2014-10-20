module.exports.Chess = Chess;
module.exports.newPosition = newPosition;
module.exports.Piece = Piece;
/**
 * To build Chess:
 * - Pieces x 32
 *   - ~Position
 * - Position x 32
 *
 * To build Piece:
 * - ~Position
 * - String: 'white', 'black', list of piece names
 *
 * To build Position:
 * - Numbers: x, y
 *
 * Takeaway: Build Position, then Piece, then Chess

/**
 * @constructor Position
 *
 * @param Number x coordinate
 * @param Number y coordinate
 *
 * @property Number x coordinate
 * @property Number y coordinate
 */
function newPosition(x, y){
    return { "x" : x , "y" : y };
}
/**
 * @constructor Piece
 *
 * @param String name
 * @param String color
 *
 * @method getName
 * @method getColor
 * @method setPosition
 * @method toString
 */
function Piece(){

}
/**
 * @constructor Chess
 *
 * @method getPlayer
 * @method move
 * @method opening
 * @method display
 */
function Chess(){
}