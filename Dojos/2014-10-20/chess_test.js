var Chess = require('./chess.js').Chess;
var Position = require("./chess.js").Position;
var Piece = require("./chess.js").Piece;

var assert = require('chai').assert;

describe('Position', function(){
    it('should have a function Position()', function(){
        assert.isFunction(Position, "STEPID!!");
    });
    it('should have an x and y coordinates', function(){
        var aPosition = new Position(2,3);
        assert.strictEqual(aPosition.x, 2);
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
