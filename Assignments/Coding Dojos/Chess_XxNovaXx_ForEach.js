//Creating a .forEach for chess. 
var assert = require('assert');

var board = [
            ['R','N','B','Q','K','B','N','R'],
            ['P','P','P','P','P','P','P','P'],
            [' ',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ',' '],
            ['p','p','p','p','p','p','p','p'],
            ['r','n','b','q','k','b','n','r']
            ];
    
      /*
    
    ['0,0','0,1','0,2','0,3','0,4','0,5','0.6','0,7']
    ['1,0',                                         ]
    ['2,0',                                         ]
    ['3,0',                                         ]
    ['4,0',                                         ]
    ['5,0',                                         ]
    ['6,0',                                         ]
    ['7,0',                                         ]
    
    */
function chess(board){

var moves = [
        [ board[4][3], board[6][3] ],
        [ board[2][5], board[0][6] ],
        [ board[4][2], board[6][2] ], 
        [ board[2][4], board[1][4] ],
        [ board[5][6], board[6][6] ], 
        [ board[3][3], board[1][3] ],
        [ board[6][6], board[7][5] ],
        [ board[1][4], board[0][5] ],
        [ board[5][5], board[7][6] ],
        ];
        
    moves.forEach(function(move,index){
        move.forEach(function(x, y){
            x = y;
            y = ' ';
            
        });
        console.log(board.join ('\n'));
    });
        
    }    
  
chess(board);


    