// PROBLEM 1: Reverse a String
// Resturn a string in reverse
// Example: reverseString('solo') === 'olos'

function reverseString(str) {
  // Method 1
  // const stringArray = str.split("");
  // stringArray.reverse();
  // const reversedString = stringArray.join("");
  // return reversedString;
  // Method 1 Simplified
  // return str.split("").reverse().join("");
  // Method 2
  //   let revString = "";
  //   for (let char of str) {
  //     revString = char + revString;
  //   }
  //   return revString;
  // Method 3 with high order functions
  //   let revString = "";
  //   str.split("").forEach((char) => {
  //     revString = char + revString;
  //   });
  //   return revString;
  // Method 4
  // return str.split('').reduce((revString)=>{
  //    return char + revString
  // }, '')
}

// PROBLEM 2: Validate a palindrome
// Return true if the word is a palindrome
// Example: isPalindrome('solo') === false, isPalindrome('racecar') === true

function isPalindrome(str) {
  const revString = str.split("").reverse().join("");
  return revString === str;
}

// PROBLEM 3: REVERSE AN INTEGER
// Example: reverseInt('123') === 321

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");

  return parseInt(revString);
}

// PROBLEM 4: CAPITALIZE THE FIRTS LETTER
// Example: capitalizeLetters('turco') === 'Turco'

function capitalizeLetter(str) {
  //   // Method 1
  //   return str
  //     .toLowerCase()
  //     .split(" ")
  //     .map((word) => {
  //       return word[0].toUpperCase() + word.substr(1);
  //     })
  //     .join(" ");

  // Method 2 with Regex
  // Regex rules:
  // \b: word boudary
  // [a-b]: range
  // / /g: global ()
  // / /i: case Sensitive
  return str.replace(/\b[a-z]/gi, (char) => {
    return char.toUpperCase();
  });
}

// PROBLEM 5: MAX CHARACTER
// Return the character that is most common in a string
// Example: maxCharacter('aabbbc') === "b"

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]; //Property Value
      maxChar = char; //Property name
    }
  }

  return `The character that is most repeated is ${maxChar}`;
}

// PROBLEM 6: FIZZBUZZ
// Write a program to print all the numbers from 1 to
// 100. For multiples of 3, instead of the number, print
// 'Fizz', for multiples of 5, print 'Buzz'. For numbers
// wich are multiples of both 3 and 5 print 'FizzBuzz'

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// PROBLEM 7: LONGEST WORD
// Return the logest word of a sentence (string)
// If there is more than one longest word put it in an array

function longestWord(sentence) {
  //Create filtered array of words
  const wordArray = sentence.toLowerCase().match(/[a-z0-9]+/g);

  //Sort By length
  const sortedArray = wordArray.sort((a, b) => {
    return b.length - a.length;
  });

  //If multiple words, put into array
  const longestWordArray = sortedArray.filter((word) => {
    return word.length === sortedArray[0].length;
  });

  // Check if more than one array value
  if (longestWordArray.length === 1) {
    return longestWordArray[0];
  } else {
    return longestWordArray;
  }
}

// PROBLEM 7: Rearange an Int
// Your task is to make a function that can take any non-negative integer as a argument and
// return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function rearrangeInt(int) {
  let stringifiedInt = int
    .toString()
    .split("")
    .sort((a, b) => {
      return b - a;
    })
    .join("");

  return parseInt(stringifiedInt);
}

// PROBLEM 8: Array Chuncking
// Split an array into chuncked arrays of specific length
// Ex: chunckedArray([8,9,1,6,3], 3) === [[8,9,1],[6,3]]

function chunckedArray(arr, len) {
  // //Method 1
  // // Init chucked array
  // const chunckedArray = [];
  // // Set index
  // let i = 0;
  // // Loop while index is less than array lenght
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunck length and push on to
  //   // array
  //   chunckedArray.push(arr.slice(i, i + len));
  //   i += len;
  // }
  // return chunckedArray;
}

// PROBLEM 9: Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg: validatePIN("1234") === true

function validatePin(pin) {
  
}

// Call Function
const output = chunckedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

console.log(output);
