/*There are three cups on a table, at positions A, B, and C. At the start, there is a ball hidden under the cup at position B.

function cupSwapping(swaps) {
    let ballPosition = 'B';
  
    for (const swap of swaps) {
      if (swap.includes(ballPosition)) {
        ballPosition = swap.replace(ballPosition, '');
      }
    }
  
    return ballPosition;
  }
  
  // Test cases
  console.log(cupSwapping(["AB", "CA", "AB"])); 
  console.log(cupSwapping(["AB", "CA"]));     
  console.log(cupSwapping(["AC", "CA", "CA", "AC"])); 
  console.log(cupSwapping(["BA", "AC", "CA", "BC"]));


  output: C
          C
          B
          A

---------------------------------------------------------------------------*/

/*Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

function fizzBuzz(n) {
    const result = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(fizzBuzz(10)); 
  console.log(fizzBuzz(15)); 

  output: [
    1,      2,      'Fizz',
    4,      'Buzz', 'Fizz',
    7,      8,      'Fizz',
    'Buzz'
  ]
  [
    1,          2,
    'Fizz',     4,
    'Buzz',     'Fizz',
    7,          8,
    'Fizz',     'Buzz',
    11,         'Fizz',
    13,         14,
    'FizzBuzz'
  ]

---------------------------------------------------------------------------*/


/*Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

function removeABC(str) {
    if (!/[abcABC]/.test(str)) {
      return null; 
    }
  

    const modifiedStr = str.replace(/[abcABC]/g, '');
  
    return modifiedStr;
  }
  

  console.log(removeABC("This might be a bit hard"));
  console.log(removeABC("hello world!"));
  console.log(removeABC(""));

  output: This might e  it hrd
          null
          null

---------------------------------------------------------------------------*/

/*Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.


function isIsogram(str) {
    const seen = new Set();
  
    for (const char of str.toLowerCase()) {
      if (seen.has(char)) {
        return false;
      }
      seen.add(char);
    }
  
    return true;
  }
  
  // Test cases
  console.log(isIsogram("Algorism"));      // Output: true
  console.log(isIsogram("PasSword"));      // Output: false
  console.log(isIsogram("Consecutive"));   // Output: false

  output: true
          false
          false

---------------------------------------------------------------------------*/


/*Create a function that takes a number as an argument and returns a string formatted to separate thousands.


function formatNum(number) {
    return number.toLocaleString();
  }
  
  // Test cases
  console.log(formatNum(1000));    
  console.log(formatNum(100000)); 
  console.log(formatNum(20));      

  output: 1000
          100 000
          20

---------------------------------------------------------------------------*/