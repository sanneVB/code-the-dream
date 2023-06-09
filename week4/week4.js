// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.
// Each question below has an EXAMPLE of what would be returned if you invoke/call the function.  
// To invoke/call the function for debugging, simply console.log("testing out my function for Q#: ", functionName(anyInput)) and click the green Run button at the top of the screen.  
// You will then see the output of your called functions in the Console tab to the right of this screen.  
// Check to make sure that the output you get in your Console is the expected output.


// QUESTION 1: Write a function that takes one Array parameter and returns true if the parameter is empty, false if not

// EXAMPLES:
// console.log("testing out my function for Q1: ", isEmpty([]));
//    should result in the next line appearing in your console...
// true
//
// OR if you pass an array that is not empty...
// console.log("testing out my function for Q1: ", isEmpty([1,"a","test"]));
// false


function isEmpty(entry) {
  return !entry.length
}


// QUESTION 2: Write a function that takes one Array parameter and one Number parameter and returns the element in the array at the given number index, null if it doesn't exist

// EXAMPLES:
// console.log("testing out my function for Q2: ", getElementAt([1,"a","test"], 2));
//    should result in the next line appearing in your console...
//
//
// OR if you pass an number greater than the number of items in the array...
// console.log("testing out my function for Q2: ", getElementAt([1,"a"], 2));
// null


// Attempt one
/*
function getElementAt(arrayParameter, numberParameter) {
  if (arrayParameter[numberParameter] === undefined) {
    return null
  } else {
    return arrayParameter[numberParameter]
  }
}
*/

// Attempt two

function getElementAt(list, number) {
  return (list[number] === undefined ? null : list[number]) 
}



// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` at the second position in the array, and returns the new Array

// EXAMPLE:
// console.log("testing out my function for Q3: ", insertZeroInArray([1,"a","test"]));
//    should result in the next line appearing in your console...
// [1, 0, 'a', 'test']

function insertZeroInArray(list) {
  list.splice(1, 0, 0);
  return list;
}


// QUESTION 4: Write a function that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLES:
// console.log("testing out my function for Q4: ", isEqual([1,2,3], [4,5,6]));
//    should result in the next line appearing in your console...
// false
//
// OR console.log("testing out my function for Q4: ", isEqual([1,2,3], [1,2,3]));
// true

// Attempt number one

/* 
function isEqual(firstArray, secondArray) {
  let equalCheck = true;
  firstArray.forEach((element, index) => {
    if (element !== secondArray[index]) {
      equalCheck = false
    }
  });
  return equalCheck
}
*/

// Attempt number 2

/* 
let equalCheck = true

function compare(element, index, arr) {
  if (element !== arr[index]) {
    equalCheck = false
  }
}

function isEqual(firstArray, secondArray) {
  firstArray.forEach((element, index) => compare(element, index, secondArray))
  return equalCheck
}
*/

// Attempt number three
/*
function compare(element, index, arr) {
  return element === arr[index]
}

function isEqual(numberSetA, numberSetB) {
  return numberSetA.every((element, index) => compare(element, index, numberSetB))
}
*/

// Attempt number four
/*
function isEqual(numberSetA, numberSetB) {
  return numberSetA.every((element, index) => (element === numberSetB[index]));
}
*/

// Attempt number five

function compare(first, second) {
  return first.every((element, index) => (element === second[index]));
}


function isEqual(a, b) {
  return(compare(a, b)&&compare(b, a));
}


// QUESTION 5: Write a function that takes one Array parameter and returns the sum of all the Array elements
// BONUS: use the `reduce()` method

// EXAMPLE:
// console.log("testing out my function for Q5: ", calculateArraySum([10,2,3]));
//    should result in the next line appearing in your console...
// 15

const calculateArraySum = (parameter) => {
  return parameter.reduce((accumulator, currentValue) => currentValue + accumulator);
}

// QUESTION 6: Write a function that takes one Array parameter and returns a new Array of all the even numbers
// BONUS: use the `filter()` method

// EXAMPLE:
// console.log("testing out my function for Q6: ", findEvenNumbers([10,2,3,7,6,93]));
//    should result in the next line appearing in your console...
// [10,2,6]

const findEvenNumbers = (parameter) => {
  return parameter.filter((element) => (!(element % 2) && (Number.isInteger(element))))
}

// console.log("testing out my function for Q6: ", findEvenNumbers([10,2,3,7,6,93, 'bella']));

// QUESTION 7: Write a function that takes one Array parameter and returns a new Array of all the odd numbers
// BONUS: use the `filter()` method

// EXAMPLE:
// console.log("testing out my function for Q7: ", findOddNumbers([10,2,3,7,6,93]));
//    should result in the next line appearing in your console...
// [3,7,93]

const findOddNumbers = (parameter) => {
  return parameter.filter((element) => (!!(element % 2)))
}

// console.log("testing out my function for Q7: ", findOddNumbers([10,2,3,7,6,93, 'bella']));

// QUESTION 8: Write a function that takes one Array parameter and returns a new Array with the squared values of each of the numbers
// EXAMPLE: The squared value of 4 is 4^2 = 4 * 4 = 16
// BONUS: use `map()` method

// EXAMPLE:
// console.log("testing out my function for Q8: ", squareNumbers([2,5,8]));
//    should result in the next line appearing in your console...
// [4,25,64]

const squareNumbers = (parameter) => {
  if (parameter.every(element => Number.isInteger(element))) {
    return parameter.map(x => x * x)
  } else { 
    return 'Not every element in the array is a number'
  }
}

// console.log("testing out my function for Q8: ", squareNumbers([2,5,8, 'bella']));

// QUESTION 9. STRETCH GOAL --- Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes no parameters. The function will loop from 1 to 15 and return an array of numbers. While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array. The function will return the array of values.

// EXAMPLE:
// console.log("testing out my function for Q9: ", fizzBuzz();
//    should result in the next line appearing in your console...
// [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']

// Attempt 1

/*
const fizzBuzz = () => {
  let numberList = []
  for (let i = 1; i <= 15; i++) {
    let randomNumber = (Math.ceil(Math.random()*15))
    if (!(randomNumber % 3)&&(!(randomNumber % 5))) {
      numberList.push('FizzBuzz')
    } else if (!(randomNumber % 5)) {
      numberList.push('Buzz')
    } else if (!(randomNumber % 3)) {
      numberList.push('Fizz')
    } else {
      numberList.push(randomNumber)
    }
  }
  return numberList
}  
*/

// Attempt 2

const fizzBuzz = () => {
  let numberList = []
  for (let i = 1; i <= 15; i++) {
    if (!(i % 3)&&(!(i % 5))) {
      numberList.push('FizzBuzz')
    } else if (!(i % 5)) {
      numberList.push('Buzz')
    } else if (!(i % 3)) {
      numberList.push('Fizz')
    } else {
      numberList.push(i)
    }
  }
  return numberList
}


console.log(fizzBuzz())


// DO NOT EDIT BELOW THIS LINE

module.exports = {
  isEmpty,
  getElementAt,
  insertZeroInArray,
  isEqual,
  calculateArraySum,
  findEvenNumbers,
  findOddNumbers,
  squareNumbers,
  fizzBuzz
}
