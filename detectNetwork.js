// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.


  if (cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') {
    if (cardNumber.length === 14) {
      return 'Diner\'s Club';
    }
  }

  if (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') {
    if (cardNumber.length === 15) {
      return 'American Express';
    }
  }

  if (cardNumber.slice(0, 1) === '4') {
    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Visa';
    }
  }

  for (var a = 51; a < 56; a++) {
    if (cardNumber.slice(0, 2) === a.toString() ) {
      if (cardNumber.length === 16) {
        return 'MasterCard';
      }
    }
  }


  /*
  Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  */

  if (cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 2) === '65') {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  }

  var disPrefix = 644;

  for (disPrefix; disPrefix < 650; disPrefix++) {

    if (cardNumber.slice(0, 3) === disPrefix.toString()) {

      if (cardNumber.length === 16 || cardNumber.length === 19) {

        return 'Discover';

      }

    }

  }


  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  var prefixes = ['5018', '5020', '5038', '6304'];

  for (var preIndex = 0; preIndex < 4; preIndex++) {

    if (cardNumber.slice(0, 4) === prefixes[preIndex]) {

      for (var length = 12; length < 20; length++) {

        if (cardNumber.length === length) {

          return 'Maestro';

        }

      }

    }

  }

  /*
  China Union Pay - always has a prefix of 622126-622925,
  624-626, or 6282-6288 and a length of 16-19.
  */

  var length = cardNumber.length;

  var getCut = function(start, end) {

    cardNumber.slice(start, end);

  };


  if (length === 16 || length === 17 || length === 18 || length === 19) {

    for (var prefix = 622126; prefix <= 622925; prefix++) {

      prefix.toString();

      if (getCut(0, 6) === prefix) {

        return 'China Union Pay';

      }

    }

    for (var pre2 = 624; pre2 <= 626; pre2++) {

      pre2.toString();

      if (getCut(0, 3) === pre2) {

        return 'China Union Pay';

      }

    }

    for (var pre3 = 6282; pre2 <= 6288; pre3++) {

      pre3.toString();

      if (getCut(0, 4) === pre3) {

        return 'China Union Pay';

      }

    }

  }


};






var maestro = function() {

  var prefixes = ['5018', '5020', '5038', '6304'];

  for (var a = 0; a < prefixes.length; a++) {

    var ccn = prefixes[a] + '5678901'; //length is 11

    for (var lengths = 12; lengths <= 19; lengths++) {

      ccn += '1';

      detectNetwork(ccn);

      console.log(ccn + ' ' + ccn.length);

    }

  }

  console.log('COMPLETED');

};


var cup = function() {

/*
China Union Pay - always has a prefix of 622126-622925,
624-626, or 6282-6288 and a length of 16-19.
*/

  var suffix1 = '111111111'; // length is 9
  var ccn, ccn2, ccn3;

  for (var prefix = 622126; prefix <= 622925; prefix++) {

    for (var length = 16; length <= 19; length++) {

      suffix1 += '1';
      ccn = prefix.toString() + suffix1;
      detectNetwork(ccn);
      console.log(ccn);

    }

  }

  var suffix2 = '111111111111';

  for (var prefix = 624; prefix <= 626; prefix++) {

    for (var length = 16; length <= 19; length++) {

      suffix2 += '1';
      ccn2 += prefix.toString() + suffix2;
      detectNetwork(ccn2);
      console.log(detectNetwork(ccn2));

    }

  }

  var suffix3 = '11111111111'; //length is 11

  for (var prefix = 6282; prefix <= 6288; prefix++) {

    for (var length = 16; length <= 19; length++) {

      suffix3 += '1';
      ccn += prefix.toString + suffix3;
      detectNetwork(ccn3);
      console.log(ccn3);

    }

  }


};


