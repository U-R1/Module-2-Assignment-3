/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

let a = 40;
let b = 20;

if (a > b) {
  console.log(a, "is larger than", b);
} else {
  console.log(b, "is larger than", a);
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

let c = 5;
let d = 4;

if ((c = a)) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

let e = 25;

console.log(e % 5);

if (5 % e) {
  console.log(e, "is divisible by 5");
} else {
  console.log("not divisible by 5");
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let f = 16;
let g = 8;

if (f - g) {
  console.log("subtraction is equal to 8");
} else {
  console.log("not equal");
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 2;

if (totalShoppingCart * 50) {
  console.log("free shipping");
} else {
  console.log("shipping cost 10");
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

if (totalShoppingCart) {
  console.log(
    "you have recieved 20% discount. pay $",
    (totalShoppingCart * 20) % 100
  );
} else {
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x = 20;
let y = 40;
let z = 60;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/
let h = 80;
let i = "80";

console.log(h === i);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/
let j = 2;

if (j % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.*/
let val = 7;
if (val < 10) {
  console.log("Less than 10");
} else if (val > 5) {
  console.log("Greater than 5");
} else {
  console.log("Greater than or equal to 10");
}

/* WRITE YOUR ANSWER HERE */

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/* WRITE YOUR ANSWER HERE */

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or 
 even, and display a message to the screen
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and 
  for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

/* WRITE YOUR ANSWER HERE */
