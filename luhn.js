/*
Given a number determine whether or not it is valid per the Luhn formula.

The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The task is to check if a given string is valid.

Validating a Number Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.

Example 1: valid credit card number 4539 1488 0343 6467 The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling

4_3_ 1_8_ 0_4_ 6_6_
If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:

8569 2478 0383 3437
Then sum all of the digits:

8+5+6+9+2+4+7+8+0+3+8+3+3+4+3+7 = 80
If the sum is evenly divisible by 10, then the number is valid. This number is valid!



Example 2: invalid credit card number

8273 1232 7352 0569
Double the second digits, starting from the right

7253 2262 5312 0539
Sum the digits

7+2+5+3+2+2+6+2+5+3+1+2+0+5+3+9 = 57
57 is not evenly divisible by 10, so this number is not valid.
*/

/*
  Steps of the Luhn Algorithm:
  Checks:
    1. Checks
      1.1 Length <= 1
        1.1.1 Yes? invalid
      1.2 Includes non-digit character?
        1.2.1 Yes? Invalid
  
    2. Double every second digit (odd index)
      2.1 Doubled Number >= 9 ? 
        2.1.1. Subtract 9 From Doubled Number
    3. Sum All Digits
      3.1 Sum Divisible by 10?
        3.1.1 Yes? Then valid?
        3.1.2 No? Then invalid?

  Input: String
*/

function luhn(numStr) {
  let luhnStr = '';
  const reducer = (accumulator, value) => {
    return Number(accumulator) + Number(value);
  }
  numStr = stripSpace(numStr);
  if (!validNum()) {
    return false;
  }
    
  // Double Every Second Digit
  for (let index = 0; index < numStr.length; index++) {
    let number = numStr[index];

    if (index % 2 !== 0) {
      number *= 2;

      if (number > 9) {
        number -= 9;
      }   
    }
    
    luhnStr += number;
  }
  
  let sum = (luhnStr.split('').reduce(reducer)); // Sum Every Digit
  return ((sum % 10) === 0)

  function stripSpace(string) {
    const SPACE_STRIPPER = /\w/g;

    return string.match(SPACE_STRIPPER).join('');
  }

  function validNum() {
    if (!(numStr.length > 1)) {
      return false;
    }

    if (/\D/.test(numStr)) {
      return false;
    }

    return true;
  }
}


console.log(luhn("055 444 286")); // False
console.log(luhn("055 444 285")); // True
console.log(luhn(" 0")); // False
console.log(luhn(":9")); // False
