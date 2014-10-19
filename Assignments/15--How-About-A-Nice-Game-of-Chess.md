### Resources
* [Lo-Dash] (https://lodash.com/docs)
* [Chess]   (http://www.chessgames.com/perl/chessgame?gid=1765299)
* [ Writing to a File(?)](https://docs.nodejitsu.com/articles/file-system/how-to-write-files-in-nodejs)

### Roll Your Own

* Take 2 Lo-Dash methods
    * some
    * identity

* Look at the documentation for how they work and produce a naive implementation for them. ("Naive implementation" = "a function that can reproduce the examples in the documentation, at least in the simplest cases without any optional arguments")

* then

* Look at the Lo-Dash source code on GitHub. Compare your implementation to theirs. How close is the heart of their algorithm to yours? Of the pieces they have that you don't, what makes perfect sense, what do you basically understand, what can you kind of guess the meaning of, and what is just dude wtf?

Also - look at the number of closed issues in that repo. Look at the number of bugs they've found. This is the collective work of a lot of smart hardworking people, and things break sometimes. 

### How About a Nice Game of Chess?

The Catalan opening is nice and all as an opening, but to really play chess you gotta capture stuff. It's also nice to know who's ahead at any point in the game. Oh, and being able to see the game would be fun. I'll give you a set of moves for a complete game, which starts with the Catalan opening and continues until checkmate. Feed that into yesterday's Chess object, making the following changes:

* To figure out who's ahead at any moment, you need to calculate how much each player's pieces are worth. We'll use the most common assessment of point values:

    * Pawn = 1
    * Knight = 3
    * Bishop = 3
    * Rook = 5
    * Queen = 9

Don't just make the point value a property of the piece, though. Set up a separate value function that relates the name of a piece to its value. Then you can calculate a "score" for each side by adding up the point values of all the pieces for that side that are on the board at that moment.

* if a piece moves into a position that is occupied by another piece, that other piece gets captured. If you don't account for that, the scores will never change.

* A turn consists of one move for each side. After each turn, print out an update, consisting of:
-the turn number
-the score for each side
-a representation of the board



NOTE: The chess assignment has a lot of pieces. If you and your coding buddies get stuck on one, leave it alone and go to another one. My bullet points are not necessarily the same as the pieces. 

### Moves
/* these are coordinates for all the moves in the game 
 * http://www.chessgames.com/perl/chessgame?gid=1765299,
 * using 0,0 as the top left (black queen's rook)
 */
//start	finish
3, 6	3, 4
6, 0	5, 2

2, 6	2, 4
4, 1	4, 2

6, 6	6, 5
3, 1	3, 3

6, 7	5, 5
5, 0	4, 1
//I'm breaking up castling into 2 moves. 
5, 7	6, 6
7, 0	5, 0

7, 7	5, 7
4, 0	6, 0

4, 7	6, 7
2, 1	2, 2

1, 7	3, 6
1, 1	1, 2

3, 7	2, 6
2, 0	1, 1

4, 6	4, 4
1, 0	0, 2

4, 4	4, 3
5, 2	3, 1

2, 4	3, 3
0, 2	1, 4
// first capture coming up
2, 6	1, 5
1, 4	3, 3

3, 6	4, 4
7, 1	7, 2
//CARNAGE!
2, 7	3, 6
2, 2	2, 3

3, 4	2, 3
3, 1	2, 3

4, 4	2, 3
5, 1	2, 3

1, 5	0, 4
3, 0	4, 1

0, 6	0, 5
0, 1	0, 3

5, 7	4, 7
5, 1	5, 3

5, 5	7, 4
5, 3	5, 4

7, 4	6, 2
2, 3	5, 6

6, 7	7, 7
4, 1	5, 1

6, 2	5, 0
5, 4	5, 5

6, 6	7, 5
5, 6	4, 7

3, 6	4, 7
5, 5	5, 6

4, 7	5, 6
3, 3	5, 4

7, 5	6, 6
5, 4	6, 6

7, 7	6, 7
0, 0	5, 0

5, 6	1, 2
6, 6	4, 5

1, 2	4, 5
5, 1	5, 5
