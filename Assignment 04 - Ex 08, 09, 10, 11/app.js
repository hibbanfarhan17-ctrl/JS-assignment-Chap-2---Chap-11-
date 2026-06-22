//Q1
var userName = prompt("Please enter your name");
alert ("Hi, " + userName);

//Q2
var multiplicationNum = prompt("Enter a number to print its multiplication table" , "5");
document.write("Multiplication table of " + multiplicationNum + ":<br><br>");
for (var i = 1; i <= 10; i++) {
    document.write(multiplicationNum + " x " + i + " = " + (multiplicationNum * i) + "<br>");
}

//Q3
var city = prompt("Please enter your city");
if (city == "karachi" || city == "Karachi" || city == "KARACHI") {
    alert("Welcome to city of lights");
}

//Q4
var gender = prompt("What is your gender?")
if (gender === "Male" || gender === "male" || gender === "MALE") {
    alert("Good Morning Sir")
}else if (gender === "Female" || gender === "female" || gender === "FEMALE") {
    alert("Good Morning Ma'am")
}

//Q5
var trafficInput = prompt("Enter the colour of road traffic signal")
var msg
if (trafficInput === "red" || trafficInput === "Red" || trafficInput === "RED") {
    msg = alert("Vehicles must stop")
}else if (trafficInput === "yellow" || trafficInput === "Yellow" || trafficInput === "YELLOW") {
    msg = alert("Vehicles should get ready to move ")
}else if (trafficInput === "green" || trafficInput === "Green" || trafficInput === "GREEN") {
    msg = alert("Vehicles can move now")
}

//Q6
var maxAge = prompt("Enter maximum age")
var currentAge = prompt("Enter current age")
while (currentAge === "" && maxAge === ""){
    alert("Please enter your age")
    maxAge = prompt("Enter maximum age")
    currentAge = prompt("Enter current age")
}
var maxAgeNum = Number(maxAge)
var currentAgeNum = Number(currentAge)
if (currentAge <= maxAge) {
    alert("You are welcome")
}

//Q7
carFuel = +prompt("Enter the remaining fuel in your car (in litres)")
if (carFuel < 0.25){
    alert("Please refill the fuel in your car")
}

//Q8
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

//Q9
var m1 = +prompt("Enter marks of 1st subject");
var m2 = +prompt("Enter marks of 2nd subject");
var m3 = +prompt("Enter marks of 3rd subject");
var total = 300;
var obtained = m1 + m2 + m3;
var avg = obtained / 3;
document.write("<h2>Marks Sheet</h2>");
document.write("Marks Obtained: " + obtained);
document.write("<br>Total Marks: " + total);
document.write("<br>Average: " + avg.toFixed(2) + "%");
if (avg >= 80) {
    document.write("<br><br>Grade: A-One");
    document.write("<br>Remarks: Excellent")
} else if (avg >= 70) {
    document.write("<br><br>Grade: A");
    document.write("<br>Remarks: Good")
} else if (avg >= 60) {
    document.write("<br><br>Grade: B");
    document.write("<br>Remarks: You need to improve")
} else {
    document.write("<br><br>Grade: Fail");
    document.write("<br>Remarks: Sorry")
}

//Q10
var item1Name = prompt("Enter the name of first item")
var item2Name = prompt("Enter the name of second item")
var item1Price = +prompt("Enter the price of first item")
var item2Price = +prompt("Enter the price of second item")
var item1Quantity = +prompt("Enter the quantity of first item")
var item2Quantity = +prompt("Enter the quantity of second item")
var shippingCharges = +prompt("Enter shipping charges")
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
var discountedPrice;
document.write("<h2>Shopping Cart</h2>")
document.write("<br>Price of " + item1Name + " is " + item1Price);
document.write("<br>Quantity of " + item1Name + " is " + item1Quantity);
document.write("<br>Price of " + item2Name + " is " + item2Price);
document.write("<br>Quantity of " + item2Name + " is " + item2Quantity);
document.write("<br>Shipping charges " + shippingCharges);
document.write("<br><br>Total cost of your order is " + totalCost);
if(totalCost > 2000){
    discountedPrice = (totalCost * 90) / 100
    document.write("<br>Discounted Price is " + discountedPrice);
}

//Q11
var secretNum = 3
var guessNum = +prompt("Guess a secret number (ranging from 1 to 10)")
if(guessNum === secretNum){
    alert("Bingo! Correct answer")
}else if (guessNum + 1 === secretNum || guessNum - 1 === secretNum){
    alert("Close enough to the correct answer")
}else{
    alert("You are wrong!")
}

//Q12
let number = prompt("Enter any number to check wheter it is divisable by 3"); 
if (number % 3 === 0) {
    alert(`The number ${number} is divisible by 3`);
} else {
    alert(`The number ${number} is not divisible by 3`);
}

//Q13
var teamAName = prompt("Enter Team A name:");
var teamBName = prompt("Enter Team B name:");
var teamAScore = +prompt("Enter Team A score:" , "10");
var teamBScore = +prompt("Enter Team B score:" , "10");
if (teamAScore > teamBScore) {
    alert(teamAName + " have won the game")
}else if (teamBScore > teamAScore) {
    alert(teamBName + " have won the game")
}else{
    alert("It's a tie!")
}

//Q14
var textVar = "Pakistan";
var numberVar = 92;
var booleanVar = true;
alert(textVar + " is a " + typeof(textVar));
alert(numberVar + " is a " + typeof(numberVar));
alert(booleanVar + " is a " + typeof(booleanVar));

//Q15
var inputNum = +prompt("Enter a value:");
if (inputNum % 2 === 0) {
    alert(inputNum + " is an even number.");
} else {
    alert(inputNum + " is an odd number.");
}

//Q16
tempInput = +prompt("Enter the temperature:");
if (tempInput > 40) {
    alert("It is too hot outside.");
} else if (tempInput > 30) {
    alert("The Weather today is Normal.");
} else if (tempInput > 20) {
    alert("Today’s Weather is cool.");
} else if (tempInput > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

//Q17
var firstNum = +prompt("Enter the first number:");
var operator = prompt("Enter the operator (+, -, *, /, %):");
var secondNum = +prompt("Enter the second number:");
var result;
if (operator === "+") {
    result = firstNum + secondNum;
} else if (operator === "-") {
    result = firstNum - secondNum;
} else if (operator === "*") {
    result = firstNum * secondNum;
} else if (operator === "/") {
    result = firstNum / secondNum;
} else if (operator === "%") {
    result = firstNum % secondNum;
}
alert(firstNum + " " + operator + " " + secondNum + " is " + result);

//Q18
var dayName = prompt("Enter the day name:");
if (dayName === "Monday" || dayName === "Tuesday" || dayName === "Wednesday" || dayName === "Thursday" || dayName === "Friday") {
    alert("It's a weekday");
} else if (dayName === "Saturday") {
    alert("It's a weekend");
} else if (dayName === "Sunday") {
    alert("Yay! It's a holiday");
}

//Q19
var userScore = +prompt("Enter your score:");
if (userScore > 50) {
    alert("You are passed");
} else {
    alert("Try again");
}

//Q20
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
if (num1 > num2) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num1);
} else if (num2 > num1) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num2);
} else {
    alert("Both numbers are equal.");
}

//Q21
var langCode = prompt("Enter the language code (e.g., 'en', 'es', 'de'):" , "en");
if (langCode === "en") {
    alert("Hello, World!");
} else if (langCode === "es") {
    alert("¡Hola, Mundo!");
} else if (langCode === "de") {
    alert("Hallo, Welt!");
} else {
    alert("Language code not recognized.");
}

//Q22
var numInput = +prompt("Enter a number:");
if (numInput > 0) {
    alert("The number is positive.");
} else if (numInput < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

//Q23
var numTimes = +prompt("Enter the number of times to pluralize:");
var noun = prompt("Enter a noun:");
if (numTimes === 1) {
    alert(numTimes + " " + noun);
} else {
    alert(numTimes + " " + noun + "s");
}