# Notes

*You can write notes for each chapter here*.

## Chapter 1

# Chapter-1

### Bits
Bits are any kind of two-valued things usually described as zeros and ones. Any piece of discrete information van be reduced to a sequence of zeros and ones and thus represented in bits.

An example how bits could look like are: 00110101101.

### Values
To be able to work with such quantities of bits, the bits must be separated into chunks that represent pieces of information. 
Those chunks of information are called values in a javascript environment.
Every value has a type that determine its role. For example numbers, functions and pieces of text.

### Arithmetic

/ are called operators. These operators can be used to use mathimatical operations in javascript.
Operators such as addition, multiplication, substraction and division


### Strings
Strings are also a basic data type. Strings are used to represent text.
In javascript, strings are written by enclosing their content in quotes. 
However, when an 'n' character occurs after a backlash, it is interpreted as a newline. Similarly a 't' after a backlash means a tab.

An example of a string is as following: "Hello, My name is Sajjad Ali".

### Boolean
Boolean is also an data type in javascript. It basically checks either some value is true or false. Booleans can be used to compare values. You can even compare strings with booleans. For example:

console.log(1 < 2);
result -> true

console.log(1 > 2);
result -> false

console.log('Check me' == 'Don't check me);
result -> false

### Logical operators
There are also some operators that can be applied to boolean values themselves. Javascript supports three logical operators: AND, OR and NOT.

AND = &&
&& is a binary operator, and its result is true only if both the values given to it are true.

OR = ||
|| operator denotes logical or. It produces true if either of the values given to it is true.

NOT = !
Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.

### Unary operators
Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator can be used both as a binary operator and as a unary operator.

## Chapter 2

### Expressions and Statements
A piece of code which produces any kind of value is called an expression. For example, literally every value that is written is actually an expression. 
&nbsp;

If an expressions corresponds to a sentence fragment, a Javascript statement corresponds to a full sentence. A program is a list of statements. 

&nbsp;

### Bindings

Anything that can catch or hold on to a values, Javascript provides a thing called binding or variable.

&nbsp;

For example: let fruit = "fruit";

&nbsp;

The keyword let indicates that this sentence is going to define a binding. It is followed by the name of the binding and, if we want to immediately give it a value, by an = operator and an expression.
&nbsp;

After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds. When a bindings points at a value, that does not mean that it is tied to that binding forever. The = operator can be used anytime in a program to change or modify the existing binding.

### The Environment
The collection of bindings and their values that exist at a given time is called the environment. So when you open a particular program, it does not have an empty environment. It already contains the bindings which are a part of the program. 


### Functions

A function is a piece of program wrapped in a value. A function can be used multiple times once it is created. 
&nbsp;

To make use of a function you can invoke it, call it or apply it. You can call a function by puting parentheses after an expression that produces a function value. 

&nbsp;

Values given to the functions are called arguments. Different functions might need different type and number of arguments. 

### Console.log Function

The console.log function is a javascript built-in function. For most cases, people use it to verify or validate the program/code they have written in order to confirm if the code is actually working or not. 

### Side effects

Some functions can produce results or make a dialog box appear, which can effect the browser or change it. These changes could be called side effects. 

### Control Flow

When your programs contains more than one statement, the statements are executed from top to bottom. 

### Conditional execution

However not all programs run from top to bottom. Sometimes you may want to change the way your statements execute. That i when we speak of a conditional execution. A conditional execution is something where the program takes the proper branch based on the situation hand.  A conditional execution can be created with an if else statement in javascript. 
&nbsp;

Take a look at this example:

&nbsp;

if (1 + 1 == 2) console.log("It's true");
// → It's true

In this example the program will only run when the condition is true otherwise, it wont run. 

### While and Do loops
To understand a while and a do loop, you first need to understand what a loop is. A loop can be a piece of code multiple times. This form of control is called a loop.
&nbsp;

A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like an if else statement. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.
&nbsp;

A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution.


### For Loops
The for loop is used to repeat a section of code known number of times. Sometimes it is the computer that knows how many times, not you, but it is still known. Like all loops, "for loops" execute blocks of code over and over again. The advantage to a for loop is we know exactly how many times the loop will execute before the loop starts.

### Breaking out of a loop

Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.
&nbsp;

If you accidentally write an end condition that always produces true, your program would get stuck in an infinite loop. A program stuck in an infinite loop will never finish running, which is usually a bad thing.

### Comments

A comment is a piece of text that is part of a program but is completely ignored by the computer. JavaScript has two ways of writing comments. To write a single-line comment, you can use two slash characters (//) and then the comment text after it.
&nbsp;

A // comment goes only to the end of the line. A section of text between /* and */ will be ignored in its entirety, regardless of whether it contains line breaks. This is useful for adding blocks of information about a file or a chunk of program.
 


## Chapter 3

### Definig a function 

A function is created with an expression that starts with the keyword function. Functions can have parameters and have a body. 
The body of the function contains the statements that are to be executed when the function is called. The function body of a function must always be wrapped within braces. Even when it consists of a single statement. 
A return statement within the function determines the value the function returns. 

### Bindings and scope
Each binding has a scope. This the part in which the binding is visible. 
Bindings which are defined outside of any function or block, the scope is the whole program. These are called globals. Globals can be referred wherever you want. 
&bnsp;

Bindings which are created within a functions parameter or declared inside of a function, can only be referred within the function. These are known as local bindings. 
&nbsp;

Bindings declared with the keyword ‘let’ and ‘const’ are local to the block that they are declared in. That’s means that if you create one of these inside of an loop, the code before and after the code cannot see it.  

### Lexical scope

A lexical scope sets the scope of a binding/vairable so that it may only be called within the block of code in which it is defined. 


### Function as values
A function binding usually simply acts as a name for a specific piece of the program. But the two are different. A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on. Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value,

&nbsp;

### Declaration notation
You can also create a function binding with a slightly shorter way. When the function keyword is used at the start of the statement, it works differently. This is then called a function declartion. An example is as following: &nbsp;

function square(x) {
  return x * x;
}

### Arrow function

This is an notation in which you use an arrow (=>) instead of the function keyword. The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”. An example is as following: &nbsp;

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};


### The call stack

It’s a data structure which records the function calls, basically where in the program we are. If we call a function to execute , we push something on to the stack, and when we return from a function, we pop off the top of the stack.

### Optional arguments

JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.

The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And Javascript wont inform you about it.

The upside is that this behavior can be used to allow a function to be called with different numbers of arguments. For example, this minus function tries to imitate the - operator by acting on either one or two arguments:

&nbsp;

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

### Closure

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:
&nbsp;

1) It has access to its own scope — variables defined between its curly brackets
2) It has access to the outer function’s variables
3) it has access to the global variables

&nbsp;


### Recursion

Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.
&nbsp;

Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop. While it can be used in many situations, it is most effective for solving problems involving iterative branching, such as fractal math, sorting, or traversing the nodes of complex or non-linear data structures.

## Chapter 4

### Arrays
JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.

### Properties
Expressions such as string.length and Math.max are expressions that access a property of some value. Almost all javascript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error. 
You can access properties in Javascript with two different ways. With a dot and with square brackets. 

### Objects
Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.
An example of what an object looks like in a javascript environment:
&nbsp;

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;



### Methods

A method is a function associated with an object, or, simply put, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.

### Array Loops

You can also write a piece of code to loop through your array. An example:
&nbsp;

for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}

### Array methods

Push and pop are methods used for array to add elements at the end of an array. Similarly shift and unshift are used to add elements at the start of an array. An example looks like this:
&nbsp;

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

&nbsp;

Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.
&nbsp;

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

&nbsp;

To search for a specific value, arrays provide an indexOf method. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called lastIndexOf.
&nbsp;

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
&nbsp;

The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

### Strings properties
Strings also have built-in properties. Every string value has a number of methods. Some very useful ones are slice and indexOf, which resemble the array methods of the same name.
&nbsp;

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

&nbsp;

The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

console.log("  okay \n ".trim());
// → okay

The padStart function takes the desired length and padding characters as arguments. 
&nbsp;

console.log(String(6).padStart(3, "0"));

// → 006

&nbsp;

You can split a string on every occurrence of another string with split and join it again with join.
&nbsp;

let sentence = "Secretarybirds specialize in stomping";
&nbsp;
let words = sentence.split(" ");
&nbsp;
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
&nbsp;

console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

&nbsp;

A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

&nbsp;

console.log("LA".repeat(3));
// → LALALA

### Rest Parameters

It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given.
To write such a function, you put three dots before the function’s last parameter, like this:

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
&nbsp;

console.log(max(4, 1, 9, -2));
// → 9
&nbsp;

When such a function is called, the rest parameter is bound to an array containing all further arguments. If there are other parameters before it, their values aren’t part of that array. When, as in max, it is the only parameter, it will hold all arguments.

You can use a similar three-dot notation to call a function with an array of arguments.
&nbsp;

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
