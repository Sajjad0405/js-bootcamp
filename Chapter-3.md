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