var Chess = require('./chess.js').Chess;
var Position = require("./chess.js").Position;
var Piece = require("./chess.js").Piece;
console.log('This is the result of `require("./chess")`: ', Chess);

var assert = require('chai').assert;

describe('Position', function(){
    it('should have a function Position()', function(){
        assert.isFunction(Position, "STEPID!!");
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
