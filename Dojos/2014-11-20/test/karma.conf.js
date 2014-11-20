'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    browsers : ['PhantomJS'],
  });
};
