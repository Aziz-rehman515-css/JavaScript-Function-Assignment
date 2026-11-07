// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.

function addTwoNumbers(num1,num2){
return num1 + num2;
}
    console.log(addTwoNumbers("6+7 =", 6 ,7));




// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.

function subtractNumbers(num1,num2){
    return num1 - num2;

}
console.log("10-8 =",subtractNumbers (10 ,8));



// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.

function multiplyNumbers(num1,num2){
    return num1 * num2;
}
console.log("10*5=" , multiplyNumbers(10, 5));
console.log("15*6 =", multiplyNumbers(15,6));



// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.

function divideNumbers(num1,num2){
    return num1/num2;
}
console.log("10/2 =", divideNumbers(10,2));
console.log("15/3 =", divideNumbers(15,3));
// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.
function getRemainder(num1,num2){
    return num1%num2;
}
console.log("10%3 =", getRemainder(10,3));
console.log("15%6 =", getRemainder(15,6));

// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".
function isPositive(num){
    if (num >0){
        return "Positive";
    }
    else
        { return"not Positive";
}
}
console.log(isPositive(10) );
