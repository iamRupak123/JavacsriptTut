console.log("hello world")

//condotion if,else if,else
// var num = prompt("Enter your marks:");

// if(num<=100 && num>=90){
//     console.log("A");
// }
// else if(num<90 && num>=80){
//     console.log("B");
// }
// else if(num<80 && num>=70){
//     console.log("C");
// }
// else if(num<70 && num>=60){
//     console.log("D")
// }
// else{
//     console.log("F");
// }

//Arithmatic operation
// let a = parseFloat(prompt("Enter first number: "));  // Convert input to number
// let b = parseFloat(prompt("Enter second number: ")); // Convert input to number

// function add(c, d) {
//     let sum = c + d;  // Declare 'sum' using 'let'
//     console.log("Sum:", sum);
// }

// function subs(c, d) {
//     let sub = c - d;  // Declare 'sub' using 'let'
//     console.log("Difference:", sub);
// }

// function multi(c, d) {
//     let mul = c * d;  // Declare 'mul' using 'let'
//     console.log("Product:", mul);
// }

// function division(c, d) {
//     if (d !== 0) {  // Check for division by zero
//         let div = c / d;  // Declare 'div' using 'let'
//         console.log("Quotient:", div);
//     } else {
//         console.log("Error: Division by zero");
//     }
// }

// let choice = prompt("Enter your choice (1 for Add, 2 for Subtract, 3 for Multiply, 4 for Divide): ");

// switch (choice) {
//     case "1":
//         add(a, b);
//         break;
//     case "2":
//         subs(a, b);
//         break;
//     case "3":
//         multi(a, b);
//         break;
//     case "4":
//         division(a, b);
//         break;
//     default:
//         console.log("Invalid choice");
// }

// 

// let username = prompt("Enter your full name:");
// let size = username.length;
// let genName = "@"+username+size
// console.log(`Your name should be ${genName}`)

// practise question 

// let arr = [200,300,400,600,800];
// let brr=[]
// for(let elem of arr){
//     elem = elem-(elem*10/100);
//     console.log(
//         elem
//     )
// }

let compannies = ["Bloomberg","microsoft","uber","google","ibm","netflix"];
// compannies.shift(); // shift() is use for remove element from the first occurence
// compannies.splice(2,1,"ola")
compannies.push("Amazon")
console.log(compannies)

 