//Q1
let num1 = 13
let num2 = 9
let sum = num1 + num2
alert("Sum of " + num1 + " and " + num2 + " is " + sum)

//Q2
let num3 = 13
let num4 = 9
let subtract = num3 - num4
alert("Result of subtracting " + num4 + " from " + num3 + " is " + subtract)

let num5 = 13
let num6 = 9
let multiplication = num5 * num6
alert("Result of multiplying " + num5 + " and " + num6 + " is " + multiplication)

let num7 = 13
let num8 = 9
let division = num7 / num8
alert("Result of dividing " + num7 + " by " + num8 + " is " + division)

let num9 = 13
let num10 = 9
let modulus = num9 % num10
alert("Remainder of dividing " + num9 + " by " + num10 + " is " + modulus)

//Q3
var num;
document.write("Value after variable declaration is: " + num);
num = 3;
document.write("<br>Initial value: " + num);
num++;
document.write("<br>Value after increment is: " + num);
num = num + 7;
document.write("<br>Value after addition is: " + num);
num--;
document.write("<br>Value after decrement is: " + num);
num = num % 3;
document.write("<br>The remainder is: " + num);

//Q4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("<br><br>Total cost to buy " + numberOfTickets + " tickets is " + totalCost);

//Q5
var number = 4;
document.write("<br><br>Multiplication table of " + number + ":<br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

//Q6
var celsiusTemp = 12;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write("<br><br>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F");
var fahrenheitTemp2 = 68;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write("<br>" + fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

//Q7
var item1Price = 560;
var item2Price = 200;
var item1Quantity = 2;
var item2Quantity = 5;
var shippingCharges = 150;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("<br><br>Price of item 1 is " + item1Price);
document.write("<br>Quantity of item 1 is " + item1Quantity);
document.write("<br>Price of item 2 is " + item2Price);
document.write("<br>Quantity of item 2 is " + item2Quantity);
document.write("<br>Shipping charges " + shippingCharges);
document.write("<br><br>Total cost of your order is " + totalCost);

//Q8
var totalMarks = 1200;
var marksObtained = 900;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<br><br><h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks);
document.write("<br>Marks obtained: " + marksObtained);
document.write("<br>Percentage: " + percentage + "%");

//Q9
var usDollars = 10;
var saudiRiyals = 25;
var totalPakistaniRupees = (usDollars * 104) + (saudiRiyals * 28);
document.write("<br><br>Total currency in PKR: " + totalPakistaniRupees);

//Q10
var number = 1;
var result = number + 5 * 10 / 2;
alert(result);

//Q11
var currentYear = 2015;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("<br><br>Current Year: " + currentYear);
document.write("<br>Birth Year: " + birthYear);
document.write("<br>They are either " + age + " or " + (age + 1) + " years old.");

//Q12
var radius = 12;
var pi = 3.142;
var circumference = 2 * pi * radius;
document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius);
document.write("<br>The circumference is: " + circumference);
var area = pi * radius * radius;
document.write("<br>The area is: " + area);

//Q13
var alphabet = +prompt("Enter any number");
document.write("<br></br>Result:<br>The value of a is: " + alphabet + "<br><br>");
document.write("The value of ++a is: " + ++alphabet);
document.write("<br>Now the value of a is: " + alphabet);
document.write("<br><br>The value of a++ is: " + alphabet++);
document.write("<br>Now the value of a is: " + alphabet);
document.write("<br><br>The value of --a is: " + --alphabet);
document.write("<br>Now the value of a is: " + alphabet);
document.write("<br><br>The value of a-- is: " + alphabet--);
document.write("<br>Now the value of a is: " + alphabet);

//Q14
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br><br>a is 2")
document.write("<br>b is 1")
document.write("<br>--a is 1")
document.write("<br>--a - --b is 0")
document.write("<br>--a - --b + ++b is 2")
document.write("<br>--a - --b + ++b + b-- is 3")
document.write("<br>Result is " + result)

//Q15
var favouriteSnack = "Oreo Buscuits";
var currentAge = 15;
var maximumAge = 85;
var amountPerDay = 2
document.write ("<h3>The Lifetime Supply Calculator</h3>")
document.write ("Favourite Snack: " + favouriteSnack)
document.write ("<br>Current Age: " + currentAge)
document.write ("<br>Estimated Maximum Age: " + maximumAge)
document.write ("<br>Amount of snacks per day: " + amountPerDay)
var result = (amountPerDay * 365) * (maximumAge - currentAge)
document.write ("<br>You will need " + result + " to last you until the ripe old age of " + maximumAge)