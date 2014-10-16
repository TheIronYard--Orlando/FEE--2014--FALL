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
