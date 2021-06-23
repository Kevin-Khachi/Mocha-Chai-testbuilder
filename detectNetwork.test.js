/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    //Deleted the throw error, making the test pass
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num) {
      return num / 2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
      return num % 2 === 0; //reciprocal of num / 2 is 0 when even
    };

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //deleted the throw new Error('Delete Me!')
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') { //corrected detectNetwork's param
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.

  //   http://chaijs.com/
  var assert = chai.assert; //accesed object value

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('Prefix of 51', function() { //Added string arguemnt
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
  it('Prefix of 52', function() { //Added string arguemnt
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
  it('Prefix of 53', function() { //Added string arguemnt
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard'); //argument updated to 'MasterCard'
  });
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard'); //argument updated to 'MasterCard'
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

   /*
  Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  */

  var assert = chai.assert; // defined assert

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011567890123456') === 'Discover');
  });

  it('has a prefix of 6011 and a length of 19', function () {
    assert(detectNetwork('6011567890123456789') === 'Discover');
  });

  it('has a prefix of 65 and a length 16', function() {
    assert(detectNetwork('6511567890123456') === 'Discover');
  });

  it('has a prefix of 65 and a length 19', function() {
    assert(detectNetwork('6511567890123456789') === 'Discover');
  });


  for (var prefix = 644; prefix < 650; prefix++) {

    (function(currentPrefix) {

      var ccnLength = currentPrefix + '4567890123456789';
      currentPrefix = currentPrefix + '4567890123456';

      it('has a prefix of ' + currentPrefix.slice(0, 3) + ' and a length of 16', function() {

        assert(detectNetwork(currentPrefix) === 'Discover');

      });

      it('has a prefix of ' + ccnLength.slice(0, 3) + ' and a length of 19', function() {

        assert(detectNetwork(ccnLength) === 'Discover');

      });

    })(prefix);

  }

});

describe('Maestro', function() {

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  var assert = chai.assert; //defined assert

  var prefixes = ['5018', '5020', '5038', '6304'];

  for (var a = 0; a < prefixes.length; a++) {

    var ccn = prefixes[a] + '5678901';

    for (var lengths = 12; lengths <= 19; lengths++) {

      ccn += '1';

      (function(testPrefix, testLength) {

        it ('has a prefix of ' + testPrefix + ' and a length of ' + testLength, function() {

          assert(detectNetwork(ccn) === 'Maestro');

        });

      })(prefixes[a], lengths);

    }

  }

});

describe('China Union Pay', function() {

  /*
  always has a prefix of 622126-622925, 624-626,
  or 6282-6288 and a length of 16-19.
  */

  var assert = chai.assert;

  for (var prefix = 622126; prefix <= 622925; prefix++) {

    for (var pre2 = 624; pre2 <= 626; pre2++) {

      for (var pre3 = 6282; pre2 <= 6288; pre3++) {

        (function() {



        })();

      }

    }

  }

});


