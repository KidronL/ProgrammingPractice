# Welcome to my Random Repo

This is a collection of random micro projects that I work on at random. Right now it ties directly into a document I've been writing to teach myself DSA and other computer science concepts. 

I figured since I was writing the algorithims, I might as well make them count towards my GitHub commits.

So, if you are reading this, nothing in here will be impressive in the slightest. However I thank you for taking the time to read this and I will leave you with a snippet from my programming handbook.

## Variables
	TLDR: Variables allow you to save and manipulate data

In programming, variables are one of the core concepts. Variables allows you to store data in a piece of reusable code. Making them much easier to work with in the future. In each language there are different ways to call variables.

```JavaScript
var num1 = 0;
let num2 = 1;
const num3 = 2;
```

Since I am writing primarily in TypeScript/JavaScript, there are different ways to call a variable. Var is a deprecated way to call a variable but it has a global scope. Meaning that if there is a variable that is called, it can be accessed from anywhere.

Modern JavaScript uses let and const. 

Const is an immutable variable that is used to create variables that are more static in nature. For example, calling an API key would use const as it would not change.

On the other hand, let is able to be changed. This means that variables can be reused within different functions or classes without them interfering with each other. This is useful when declaring more dynamic variables.

These concepts may feel fairly straight forward and tedious, but having a firm grasp on these concepts will allow you to write clean and readable code.

## Data Types

	TLDR: The expected types based on the data contained in the variable

Data types are the next major building block of programming. A data type is the expected type of a variable based on the data that is being stored.

There are 7 primitive data types and one complex data type in JavaScript (There can be some variances between languages. That is why JavaScript is specified here).

The 7 primitive types are:

- **Number** - Numbers in JS simplify the primitives int and float that you find in other languages by using 64-bit binary format IEEE 754.
- **String** - A string of characters. Note that in other languages, a string is an object that is a collections of characters or char. Languages like C do not have strings.
- **Boolean** - A boolean is a binary type that can only result in true or false.
- **Null** - A type with only the value of null.
- **Undefined** - A variable that has not been assigned a value
- **Symbol** - Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object.
- **BigInt** - BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53-1.

The one complex type in JavaScript is an Object. An object contains arrays and functions. This will be expanded on more but will usually have the structure of:

```JavaScript
const exObj = {
	name = name;
}
```

These two basic concepts make up all of programming. With these, and a little bit of what we will learn next, you can and will build any and everything out there.