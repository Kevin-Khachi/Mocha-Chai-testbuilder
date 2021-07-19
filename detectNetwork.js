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

    /*
    Switch always has a prefix of 4903,
    4905, 4911, 4936, 564182, 633110,
    6333, or 6759 and a length of 16, 18, or 19
    */

    var slice1 = cardNumber.slice(1, 4);

    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {

      if (slice1 === '903' || slice1 === '905' || slice1 === '911' || slice1 === '936') {

        return 'Switch';

      }

    }

    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Visa';
    }


  }


   /*
    Switch always has a prefix of 4903,
    4905, 4911, 4936, 564182, 633110,
    6333, or 6759 and a length of 16, 18, or 19
    */


  if (cardNumber.slice(0, 6) === '564182') {

    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {

      return 'Switch';

    }

  }



  for (var a = 51; a < 56; a++) {

    if (cardNumber.slice(0, 2) === a.toString() ) {

      if (cardNumber.length === 16) {
        return 'MasterCard';
      }
    }
  }


  if (cardNumber.slice(0, 6) === '633110') {

    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {

      return 'Switch';

    }

  }

  if (cardNumber.slice(0, 4) === '6333') {

    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {

      return 'Switch';

    }

  }


  if (cardNumber.slice(0, 4) === '6759') {

    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {

      return 'Switch';

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


  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19 .

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
  China UnionPay always has a prefix of 622126-622925,
  624-626, or 6282-6288 and a length of 16-19.
  */

  for (var prefix = 622126; prefix <= 622925; prefix++) {

    for (var length = 16; length <= 19; length++) {

      if (cardNumber.slice(0, 6) === prefix.toString()) {

        if (cardNumber.length >= 16 && cardNumber.length <= 19) {

          return 'China UnionPay';

        }

      }

    }

  }


  for (var prefix = 624; prefix <= 626; prefix++) {

    for (var length = 16; length <= 19; length++) {

      if (cardNumber.slice(0, 3) === prefix.toString()) {

        if (cardNumber.length >= 16 && cardNumber.length <= 19) {

          return 'China UnionPay';

        }

      }

    }

  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {

    for (var length = 16; length <= 19; length++) {

      if (cardNumber.slice(0, 4) === prefix.toString()) {

        if (cardNumber.length >= 16 && cardNumber.length <= 19) {

          return 'China UnionPay';

        }

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


  var sufix1, ccn, ccn2, ccn3, index;

  for (var prefix = 622126; prefix <= 622925; prefix++) {

    suffix1 = '111111111';

    for (var length = 16; length <= 19; length++) {

      (function(currPre, currSuff) {

        suffix1 += '1';

        ccn = currPre.toString() + suffix1;

        detectNetwork(ccn);

        console.log(ccn);

      })(prefix);


    }

  }



  for (var prefix = 624; prefix <= 626; prefix++) {

    suffix1 = '111111111111'; //length is 15

    for (var length = 16; length <= 19; length++) {

      (function (currPrefix) {

        suffix1 += '1';

        ccn2 = currPrefix.toString() + suffix1;

        detectNetwork(ccn2);

        console.log(ccn2 + ' Length: ' + length);

      })(prefix);

    }

  }


  for (var prefix = 6282; prefix <= 6288; prefix++) {

    suffix1 = '11111111111'; //length is 14

    for (var length = 16; length <= 19; length++) {

      (function (currPrefix) {

        suffix1 += '1';

        ccn2 = currPrefix.toString() + suffix1;

        detectNetwork(ccn2);

        console.log(ccn2 + ' Length: ' + length);

      })(prefix);

    }

  }





  var prefixes = ['490311111111111', '490511111111111', '491111111111111', '493611111111111',
    '564182111111111', '633110111111111', '633311111111111', '675911111111111'];


  for (var a = 0; a < prefixes.length; a++) {

    index = prefixes[a];

    for (var length = 16; length <= 19; length++ ) {

      index += '1';

      console.log(index + ' Length: ' + length);

      if (length === 17) {

        continue;

      }

      (function (ccn) {

        detectNetwork(ccn);

      })(index);

    }

  }


};

/*
Switch always has a prefix of 4903,
4905, 4911, 4936, 564182, 633110,
6333, or 6759 and a length of 16, 18, or 19
*/

var switchTest = function() {

  var prefixes = ['490311111111', '490511111111', '49111111111', '493611111111',
    '564182111111', '633110111111', '633311111111', '675911111111'];

  var index;

  for (var a = 0; a < prefixes.length; a++) {

    index = prefixes[a];

    for (var length = 13; length <= 19; length++ ) {

      index += '1';

      console.log(index + ' Length: ' + length);

      if (length === 17) {

        continue;

      }

      (function (ccn) {

        detectNetwork(ccn);

      })(index);

    }

  }

};



// detectNetwork('34345678901234');
// detectNetwork('37345678901234');
// detectNetwork('373456789012345');
// detectNetwork('343456789012345');
// detectNetwork('4434567890123');
// detectNetwork('4434567890123456');
// detectNetwork('4434567890123456789');
// maestro();
// cup();
// switchTest();










