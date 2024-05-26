// Loop Exersise: 
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
var i = 1;
while (i < 10) {
	console.log(i);
	i++;
}

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
var i = 10;
while (i > 0) {
	console.log(i);
	i--;
}

// 3. Write a js program to print all odd numbers between a to z. - using while loop
console.log('Alphabets are Printed from a-z')
var i = 97;
while (i <= 122) {
	console.log(String.fromCharCode(i));
	i++
}

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
console.log('These are even numbers')
var i = 1;
while (i <= 100) {
	if (i % 2 == 0) {
		console.log(i);

	}
	i++;
}

// 5. Write a js program to print all odd number between 1 to 100.
console.log('These are odd numbers')
var i = 1;
while (i <= 100) {
	if (i % 2 != 0) {
		console.log(i)
	}
	i++;
}

// 6. Write a js program to find sum of all natural numbers between 1 to n.
console.log('These are sum of all natural numbers')
var a = 1;
var sum = 0;
while (a < 100) {
	sum = sum + a;
	console.log(a);
	a++;
}

// 7. Write a js program to find sum of all even numbers between 1 to n.
console.log('this is sum of even numbers')
var i = 1;
var sum = 0;
while (i < 100) {
	sum = sum + i;
	if (i % 2 == 0) {
		console.log(i);
	}
	i++;
}

// 8. Write a js program to find sum of all odd numbers between 1 to n.
console.log('These are the sum of all odd numbers')
var i = 1;
var sum = 0;
while (i < 100) {
	sum = sum + 1
	if (i % 2 != 0) {
		console.log(i);
	}
	i++;
}


// If-else exercise
// 1. Write a js program to find maximum between two numbers.

var a = 10;
var b = 10;
if (a > b) {
	console.log('a is greater')
}
else if (a < b) {
	console.log('b is greater')
}
else {
	console.log('both are equal')
}
// 2. Write a js program to find maximum between three numbers.
var a = 10;
var b = 20;
var c = 30;
if (a > b && a > c) {
	console.log('a is greatest')

}
else if (b > a && b > c) {
	console.log('b is greatest')
}

else if (c > a && c > b) {
	console.log('c is greatest')
}
// 3. Write a js program to check whether a number is negative, positive or zero.
var i = 0;
if (i > 0) {
	console.log('i is negative')
}
else if (i < 0) {
	console.log('i is positive')
}
else {
	console.log('i is zero')
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var i = 55;
if (i % 5 == 0 && i % 11 == 0) {
	console.log('i is divisible by 5 and 11')
}
else {
	console.log('i is not divisible by 5 and 11')
}
// 5. Write a js program to check whether a number is even or odd.
var i = 22;

if (i % 2 == 0) {
	console.log('Number is even')
}
else {
	console.log('Number is odd')
}
// 6. Write a js program to check whether a year is leap year or not.
function isleapyear(year) {
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return true;
	}
	else {
		return false;
	}
}
var year = 2024;
if (isleapyear(year)) {
	console.log('Year is Leap Year')
}
else {
	console.log('Year is not Leap Year')
}
// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
var alphabet = 'e';
switch (alphabet) {
	case 'a':
		console.log("it is vowel")
		break;
	case 'e':
		console.log("it is vowel")
		break;
	case 'o':
		console.log("it is vowel")
		break;
	case 'i':
		console.log("it is vowel")
		break;
	case 'u':
		console.log("it is vowel")
		break;
	default:
		console.log("it is not vowel")
} 
