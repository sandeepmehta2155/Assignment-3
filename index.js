'use strict'
const l = console.log;

/* 1. Using for loops, write a Javascript program to output the following
 pattern -
 1
 2 3
 4 5 6
 7 8 9 10 */

// Answer :
// =>
/**
 *
 * @param {*} num
 * @returns logged pattern in numeric form
 */
const patternPrinter = (num) => {
  const reqArray = [...Array(num).keys()].map((i) => i + 1);
  let newNum = 0;
  reqArray.every((item) => {
    const newArray = [...reqArray];
    l(newArray.splice(newNum, item).join(", "));
    newNum += item;
    return !newArray.splice(newNum, item).join(", ") ? false : true;
  });
};

// Output
patternPrinter(22);

/* 2. Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/

// Answer :
// =>
let numSeparatorAcc = [];

/**
 *
 * @param {*} num
 * @returns array of the num containing individual digits
 */
const numSeparator = (num) => {
  numSeparatorAcc.push(num % 10);
  return num / 10 > 1 ? numSeparator(Math.floor(num / 10)) : numSeparatorAcc;
};

/**
 *
 * @param {*} num
 * @returns whether it is ArmStrong Number or not
 */
const isArmStrongNumber = (num) => {
  const numArray = numSeparator(num) || [];
  numSeparatorAcc = [];
  return num === numArray.reduce((acc, item) => (acc += item * item * item), 0)
    ? "Yes!! it is ArmStrong Number"
    : "Ops!! it isn't ArmStrong Number";
};

// Output
l(isArmStrongNumber(153));

/*
3. Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145
*/

/**
 *
 * @param {*} num
 * @returns whether it is Special Number or not
 */
const factorialOfNum = (num) => (num !== 0 ? num * factorialOfNum(num - 1) : 1);

/**
 *
 * @param {*} num
 * @returns
 */
const isSpecialNumber = (num) => {
  const numArray = numSeparator(num) || [];
  numSeparatorAcc = [];
  return num ===
    numArray.reduce(
      (acc, item) => (acc += factorialOfNum(item)),

      0
    )
    ? "Yes!! it is Special Number"
    : "Ops!! it isn't Special Number";
};

// Output
l(isSpecialNumber(145));
