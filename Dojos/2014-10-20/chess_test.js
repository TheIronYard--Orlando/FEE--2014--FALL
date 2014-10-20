var Chess = require('./chess.js').Chess;
var newPosition = require("./chess.js").newPosition;
var Piece = require("./chess.js").Piece;

var assert = require('chai').assert;

describe('Position', function(){
    it('should have a function Position()', function(){
        assert.isFunction(newPosition, "STEPID!!");
    });
    it('should have an x and y coordinates', function(){
        var aPosition

        aPosition = newPosition(2,3);
        assert.strictEqual(aPosition.x, 2);
        assert.strictEqual(aPosition.y, 3);

        aPosition = newPosition(1,5);
        assert.strictEqual(aPosition.x, 1);
        assert.strictEqual(aPosition.y, 5);
    });
});

describe('Piece', function(){
    it('should have a function Piece()', function(){
        assert.isFunction(Piece, "NOOOOOOOO!!!!");
    });
});

describe('Chess', function(){
    it('should have a function Chess()', function(){
        assert.isFunction(Chess, 'Maybe?');
    });
});
