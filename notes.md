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

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
