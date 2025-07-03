/*here is one problem that is use of prompt in terminal while prompt was not in node.js so we use a package of node which is
npm install prompt-sync
so if at start of this file it show the error then copy paste the above and run at terminal and then run the program
*/
/*
const prompt = require('prompt-sync')();

const No1 = parseInt(prompt('Please enter your 1st number: '));
const No2 = parseInt(prompt('Please enter your 2nd number: '));
const operator = prompt("Please enter the operator:");

if (Math.random()<0.1) {
    if (operator == "+") {
        console.log(No1-No2);
    }
    if (operator == "*") {
        console.log(No1+No2);
    }
    if (operator == "-") {
        console.log(No1/No2);
    }
    if (operator == "/") {
        console.log(No1**No2);
    }
}else{
    if (operator == "+") {
        console.log(No1+No2);
    }
    if (operator == "*") {
        console.log(No1*No2);
    }
    if (operator == "-") {
        console.log(No1-No2);
    }
    if (operator == "/") {
        console.log(No1/No2);
    }
}
*/


let random = Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

console.log(random)
if (random > 0.1) {
    //perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}