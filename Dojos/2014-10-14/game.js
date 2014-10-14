var privates = {
  board: undefined,
  newBoard: function(){
    return [
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ],
    ]
  },
  rules: function(cell, neighbors){ /* i.e. conway(cell, neighbors) */ },
  neighborsOf: function(x,y){ /* . . . */ },
  tick: function(){
    if ( this.board[0][1] && this.board[1][1] && this.board[2][1] ){
        this.board[0][1] = false;
        this.board[2][1] = false;

        this.board[1][0] = true;
        this.board[1][2] = true;

    }

    else if ( this.board[1][0] && this.board[1][1] && this.board[1][2] ){
      this.board[1][0] = this.board[1][2] = false;
      this.board[0][1] = this.board[2][1] = true;

    }
  }
}

module.exports = {
    /**
     * @param Number x coordinate
     * @param Number y coordinate
     * @return Boolean representation of a cell
     */
    getCell: function(){

    }
    /**
     * @param Number x coordinate
     * @param Number y coordinate
     * @return Boolean if cell at {x,y} is alive
     */
    isAlive: function(x, y){

    },
    /**
     * @param Number x coordinate
     * @param Number y coordinate
     * @return NUTHIN!?
     */
    makeLive: function(){

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
