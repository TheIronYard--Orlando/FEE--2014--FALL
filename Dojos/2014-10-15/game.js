module.exports = Game;

function Board(){
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean
 */
Board.prototype.isAlive = function(x,y){
    // return true if this.board[x][y] is "alive"
    return Boolean(this[x + ',' + y]);
};

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Board.prototype.live = function(x,y){
    // make the cell at {x,y} "alive", whatever that means
   this[x + ',' + y] = true;
};

Board.prototype.kill = function(x,y){
    // make the cell at {x,y} "dead", whatever that means
    delete this[x + ',' + y];
};

function Game(){
  this.board = board();
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x, y){
    return this.board[x][y];
}

/**
 * Make the cell at {x,y} "alive", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x, y){
    this.board[x][y] = true;
}

/**
 * Make the cell at {x,y} "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){

}

/**
 * Update the `board` by applying the `rules` to each cell.
 */
Game.prototype.tick = function(){
    // Create a new board...
    var newBoard = new Board();
    var self = _self = that = this;

    // This can _replace_ lines 61-67...
    this.board = newBoard.map(function(row, x){
        return row.map(function(cell, y){
            return self.rules(cell, self.neighborsOf(x,y));
        });
    });

    // This can replace 70-76...
    newBoard.forEach(function(row, x){
        newBoard.forEach(function(cell, y){
            newBoard[x][y] = self.rules(self.board[x][y], self.neighborsOf(x,y));
        });
    });
    this.board = newBoard;

    // Apply `rules` _to each cell in the current board_...
    this.board.forEach(function(row, x){
        row.forEach(function(cell, y){
            // Record the results in the NEW board...
            newBoard[x][y] = self.rules(cell, self.neighborsOf(x,y));
        });
    });
    // Make the current board match the new board.
    this.board = newBoard;
}

/**
 * @param Boolean cell
 * @param Number neighbors representing LIVE neighbors of `cell`
 * @return Boolean
 */
Game.prototype.rules = function(cell, neighbors){
    // Survival Rule
    if ( cell && (2 <= neighbors <= 3) ){
        return true;
    }

    // Reproduction Rule
    if ( !cell && neighbors == 3 ){
        return true;
    }

    return false; // EVERYTHING ELSE IS DEATH!
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Number of live neighbors
 */
Game.prototype.neighborsOf = function(x, y){
    var neighbors = 0, diffs = [ -1, 0, +1 ];
    var self = this;

    diffs.forEach(function(dX){
        diffs.forEach(function(dY){
            if ( dX == 0 && dY == 0 ) return;

            if ( self.board[x + dX] && self.board[x + dX][y + dY] ){
                neighbors++;
            }
        });
    });

    return neighbors;
}

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
Game.prototype.display = function(){
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
