(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    }
    else if (num2 > num1) {
      return num2;
    }
    else if (num1 === num2) {
      console.log("The numbers are equal.")
      return num1
    }
    else {
      return null;
    }
  }

  console.assert(max(3,7)===7, 'function max is incorrect');




  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
      if (num1 > num3) {
        return num1;
      }
      else {
        return num3;
      }
    }
    else {
      if (num2 > num3) {
        return num2;
      }
      else {
        return num3;
      }
    }
  }

  console.assert(maxOfThree(3, 5, 7)===7, "function maxOfThree is incorrect");




  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  function isVowel(char) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let x = 0; x < vowels.length; x++) {
      if (char === vowels[x]) {
        return true;
      }
    }
    return false;
  }

  console.assert(isVowel("i"), "function isVowel is incorrect");




  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(text) {
    let translation = "";
    let vowels = ["a", "e", "i", "o", "u"];

    for (let x = 0; x < text.length; x++) {
      let tempChar = text[x];
      if (isVowel(tempChar)) {
        translation += tempChar;
      }
      else if (tempChar === " ") {
        translation += tempChar;
      }
      else {
        translation += tempChar + "o" + tempChar;
      }
    }
    return translation;
  }

  console.assert(rovarspraket("The test") === "ToThohe totesostot", "function rovarspraket is incorrect");




  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(numbers) {
    let sum = 0;

    for (let x = 0; x < numbers.length; x++) {
      sum += numbers[x];
    }
    return sum;
  }

  console.assert(sum([1, 2]) === 3, "function sum is incorrect");

  function multiply(numbers) {
    let multipliedNumbers = 1;

    for (let x = 0; x < numbers.length; x++) {
      multipliedNumbers *= numbers[x];
    }
    return multipliedNumbers;
  }

  console.assert(multiply([1, 2]) === 2, "function multiply is incorrect");

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(text) {
    let reversed = "";

    for (let x = text.length -1; x >= 0; x--) {
      reversed += text[x];
    }
    return reversed;
  }

  console.assert(reverse("testing") === "gnitset", "function reverse is incorrect");




  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  function findLongestWord(text) {
    let count = 0;

    for (let x = 0; x < text.length; x++) {
      if (text[x].length > count) {
        count = text[x].length;
      }
    }
    return count;
  }

  console.assert(findLongestWord(["word", "tested", "longest"]) === 7, "function findLongestWord is incorrect");




  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  function filterLongWords(text, i) {
    let longWords = [];

    for (let x = 0; x < text.length; x++) {
      if (text[x].length > i) {
        longWords.push(text[x]);
      }
    }
    return longWords;
  }

  //adding this function to test equality of arrays for the console.assert
  function testArrayEquality(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let x = 0; x < array1.length; x++) {
      if (array1[x] != array2[x]) {
        return false;
      }
    }
    return true;
  }

  console.assert(testArrayEquality(filterLongWords(["word", "tested", "longest"], 5), ["tested", "longest"]), "function filterLongWords is incorrect");




  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(text) {
    let charList = {};

    for (let x = 0; x < text.length; x++) {
      if (charList[text[x]]) {
        charList[text[x]] += 1;
      }
      else {
        charList[text[x]] = 1;
      }
    }
    return charList;
  }

  let test = charFreq("testing");
  console.assert(test.t === 2 && test.n === 1, "function charFreq is incorrect");




})();
