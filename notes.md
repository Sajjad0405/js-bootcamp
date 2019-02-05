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

###Arithmetic

+ - x / are called operators. These operators can be used to use mathimatical operations in javascript.
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

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
