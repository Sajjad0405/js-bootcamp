### Expressions and Statements
A piece of code which produces any kind of value is called an expression. For example, literally every value that is written is actually an expression. 

If an expressions corresponds to a sentence fragment, a Javascript statement corresponds to a full sentence. A program is a list of statements. 

### Bindings

Anything that can catch or hold on to a values, Javascript provides a thing called binding or variable.

For example: ```let fruit = "fruit";```


The keyword let indicates that this sentence is going to define a binding. It is followed by the name of the binding and, if we want to immediately give it a value, by an ```=``` operator and an expression.

After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds. When a bindings points at a value, that does not mean that it is tied to that binding forever. The = operator can be used anytime in a program to change or modify the existing binding.

### The Environment
The collection of bindings and their values that exist at a given time is called the environment. So when you open a particular program, it does not have an empty environment. It already contains the bindings which are a part of the program. 


### Functions

A function is a piece of program wrapped in a value. A function can be used multiple times once it is created. 

To make use of a function you can invoke it, call it or apply it. You can call a function by puting parentheses after an expression that produces a function value. 

Values given to the functions are called arguments. Different functions might need different type and number of arguments. 

### Console.log Function

The console.log function is a javascript built-in function. For most cases, people use it to verify or validate the program/code they have written in order to confirm if the code is actually working or not. 

### Side effects

Some functions can produce results or make a dialog box appear, which can effect the browser or change it. These changes could be called side effects. 

### Control Flow

When your programs contains more than one statement, the statements are executed from top to bottom. 

### Conditional execution

However not all programs run from top to bottom. Sometimes you may want to change the way your statements execute. That i when we speak of a conditional execution. A conditional execution is something where the program takes the proper branch based on the situation hand.  A conditional execution can be created with an if else statement in javascript. 

Take a look at this example:
```Javascript

if (1 + 1 == 2) console.log("It's true");
// → It's true

```

In this example the program will only run when the condition is true otherwise, it wont run. 

### While and Do loops
To understand a while and a do loop, you first need to understand what a loop is. A loop can be a piece of code multiple times. This form of control is called a loop.

A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like an if else statement. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.


A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution.


### For Loops
The ```for``` loop is used to repeat a section of code known number of times. Sometimes it is the computer that knows how many times, not you, but it is still known. Like all loops, "for loops" execute blocks of code over and over again. The advantage to a for loop is we know exactly how many times the loop will execute before the loop starts.

### Breaking out of a loop

Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.


If you accidentally write an end condition that always produces true, your program would get stuck in an infinite loop. A program stuck in an infinite loop will never finish running, which is usually a bad thing.

### Comments

A comment is a piece of text that is part of a program but is completely ignored by the computer. JavaScript has two ways of writing comments. To write a single-line comment, you can use two slash characters (//) and then the comment text after it.

A // comment goes only to the end of the line. A section of text between /* and */ will be ignored in its entirety, regardless of whether it contains line breaks. This is useful for adding blocks of information about a file or a chunk of program.