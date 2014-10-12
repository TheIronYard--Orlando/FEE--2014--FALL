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
            
              console.log(board.join('\n') + '\n\n');
              //First move white pawn to D4. First set of coordinates is for where the piece has moved, other two are the previous spot. 
               board[4][3] = board[6][3];
                board[6][3] = ' ';
                console.log(board.join('\n') + '\n\n');
              
                
              //Black Knight to F6.
              board[2][5] = board[0][6];
                board[0][6] = ' ';
                console.log(board.join('\n') + '\n\n');
              
              
             //White Pawn to C4  
              board[4][2] = board[6][2];
                board[6][2] = ' ';
                console.log(board.join('\n') + '\n\n');
                
              //Black Pawn to E6
              board[2][4] = board[1][4];
                board[1][4] = ' ';
                console.log(board.join('\n') + '\n\n');
              
              //White Pawn to G3
              board[5][6] = board[6][6];
                board[6][6] = ' '; 
                console.log(board.join('\n') + '\n\n');
                
              //Black Pawn to D5
              board[3][3] = board[1][3];
                board[1][3] = ' ';
                console.log(board.join('\n') + '\n\n');
              
              //White Bishop to G2
              board[6][6] = board[7][5];
                board[7][5] = ' ';
                console.log(board.join('\n') + '\n\n');
              
              //Black Bishop to E7
              board[1][4] = board[0][5];
                board[0][5] = ' ';
                console.log(board.join('\n') + '\n\n');
              
              //White Knight to F3 **CheckMate**
              board[5][5] = board[7][6];
                board[7][6] = ' ';
                console.log(board.join('\n') + '\n\n');
              
                
              



