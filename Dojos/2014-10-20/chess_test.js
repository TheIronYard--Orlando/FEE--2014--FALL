var Chess = require('./chess.js').Chess;
var Position = require("./chess.js").Position;
console.log('This is the result of `require("./chess")`: ', Chess);

var assert = require('chai').assert;

describe('Position', function(){
    it('should have a function Position()', function(){
        assert.isFunction(Position, "STEPID!!");
    });
});

describe('Piece', function(){
    it('should have a function Piece()'
});

describe('Chess', function(){
});
