// 3- if , else , if else if (Desion Making)


//1. Login System

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "admin" && password === "1234") {
    console.log("Login successful!");
}
 else {
    console.log("Wrong username or password.");
}

// 2. Age Restriction Check

let age = prompt("Enter your age:");
age = Number(age);
if (age < 18) {
    console.log("Access denied. You are under 18.");
}
 else {
    console.log("Access allowed.");
}

//3. Online Store Discount System

let orderamount = prompt("Enter order amount:");
orderamount = Number(orderamount);
if (orderamount > 200) {
    console.log("You get 20% discount!");
}
 else if (orderamount  > 100) {
    console.log("You get 10% discount!");
} 
else {
    console.log("No discount available.");
}

//4. Student Grade Checker

let marks = prompt("Enter your marks percentage:");
marks = Number(marks);
if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 5. Weather Advisory System

let weather = prompt("Enter weather (hot, cold, rainy):");
if (weather === "hot") {
    console.log("Drink water and stay cool.");
} else if (weather === "cold") {
    console.log("Wear warm clothes.");
} else if (weather === "rainy") {
    console.log("Take an umbrella.");
} else {
    console.log("Weather not recognized.");
}