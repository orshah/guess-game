/*

Task 1: Using the logical && operator

You are coding an Superhero battle game, where each superhero has certain skill levels based on the value saved in their score.

Create a variable named superhero and set it your favorite superheroname.
Create a variable named score and set it to 5


Use console.log() that includes superhero, the string " has mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator

The expected output in the console should be: "<superhero name> has mid-level skills: true".


*/

let superhero = "Batman";
let score = 5;
console.log(superhero, "has mid-level skills: ", score > 0 && score < 10);

/*
Task 2: Using the logical || operator


Now, you’re about to code some snippets related to the game over condition.

You need to code a new variable named damageReceived and set it to 0 and another variable battleTimeLeft and set it 0. 
You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either 
the value of the damageReceived variable is greater or equal to the value of the energy variable OR if battleTimeLeft is zero.

Complete the task using the following steps:

Declare the variable battleTimeLeft, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.
Declare the variable damageReceived, and assign the value of 0 to it.

Console log the following parameters: "Game over: ", and battleTimeLeft == 0 || energy > damageReceived

Note that the expected output in the console should be: "Game over: true".
Try changing the variable values to and then see how it affects the result.

*/

let battleTimeLeft = 0;
let energy = 10;
let damageReceived = 0;

console.log("Game over: " + (battleTimeLeft == 0 || energy < damageReceived));

/*
Task 3: Using the modulus operator, %, to test if a given number is odd

You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

To achieve this task, you need to declare six variables, as follows:


The first variable, named num1,  should be assigned a number value of 2.

The second variable, named num2, should be assigned a number value of 5.

The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.

The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.

The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.

The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.



Run console log two times after you've set the variables:

The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1

The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2

Note: The output to the console should be as follows:

Is 2 an even number? true

Is 5 an even number? false
*/

let num1 = 2;
let num2 = 5;

let test1 = num1 % 2;
let test2 = num2 % 2;

let result1 = test1 == 0;
let result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

/*
Task 4: Add numbers using the + operator


Console log the result of adding two numbers, 100 and 10, using the + operator.

Note: This task should be completed on a single line of code. The output in the console should be 110.
*/

console.log(100 + 10);

/*
Task 5: Concatenate numbers and strings using the + operator


Code three variables:

The first variable should be a string with the following value: "I know ". Name the variable me.

The second variable should be a number with the value: 3. Name the variable three.

The third variable should a string with the following value: "programming languages". Name the variable proLang.

Console log the following code: me + three + proLang.

*/

let me = "I know ";
let three = 3;
let proLang = " programming languages";
console.log(me + three + proLang);

/*
Task 6: Use the += operator to accumulate values in a variable

Code a new variable and name it mySkills, assigning it to the value of 0.

On the next line, use the += operator to increase the value of mySkills by 5.

On the next line, use the += operator to increase the value of mySkills by 15.

On the fourth line, console log the value of the mySkills variable.

*/

let mySkills = 0;
mySkills += 5;
mySkills += 15;

console.log(mySkills);
