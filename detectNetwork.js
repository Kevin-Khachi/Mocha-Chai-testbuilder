// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

const detectNetwork = function(cardNumber) {
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

    const slice1 = cardNumber.slice(1, 4);

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




  if (cardNumber.slice(0, 2) >= 51 && cardNumber.slice(0, 2) <= 56) {

    if (cardNumber.length === 16) {
      return 'MasterCard';
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


  if (cardNumber.slice(0, 3) >= 644 && cardNumber.slice(0, 3)) {

    if (cardNumber.length === 16 || cardNumber.length === 19) {

      return 'Discover';

    }

  }


  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19 .

  const prefixes = ['5018', '5020', '5038', '6304'];

  for (const preIndex = 0; preIndex < 4; preIndex++) {

    if (cardNumber.slice(0, 4) === prefixes[preIndex]) {

      if (cardNumber.length >= 12 && cardNumber.length <= 19) {

        return 'Maestro';

      }

    }



  }


  /*
  China UnionPay always has a prefix of 622126-622925,
  624-626, or 6282-6288 and a length of 16-19.
  */

  if (cardNumber.slice(0, 6) <= 622925 && cardNumber.slice(0, 6) >= 622126) {

    if (cardNumber.length >= 16 && cardNumber.length <= 19) {

      return 'China UnionPay';

    }

  }


  if (cardNumber.slice(0, 3) >= 624 && cardNumber.slice(0, 3) <= 626) {

    if (cardNumber.length >= 16 && cardNumber.length <= 19) {

      return 'China UnionPay';

    }

  }

  if (cardNumber.slice(0, 4) >= 6282 && cardNumber.slice(0, 4) <= 6288) {

    if (cardNumber.length >= 16 && cardNumber.length <= 19) {

      return 'China UnionPay';

    }

  }


};










