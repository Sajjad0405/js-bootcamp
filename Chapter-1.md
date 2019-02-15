# Chapter-1

### Bits
Bits are any kind of two-valued things usually described as zeros and ones. Any piece of discrete information van be reduced to a sequence of zeros and ones and thus represented in bits.

An example how bits could look like are: 00110101101.

### Values
To be able to work with such quantities of bits, the bits must be separated into chunks that represent pieces of information. 
Those chunks of information are called values in a javascript environment.
Every value has a type that determine its role. For example numbers, functions and pieces of text.

### Arithmetic

```x / + - ``` are called operators. These operators can be used to use mathimatical operations in javascript.
Operators such as addition, multiplication, substraction and division


### Strings
Strings are also a basic data type. Strings are used to represent text.
In javascript, strings are written by enclosing their content in quotes. 
However, when an 'n' character occurs after a backlash, it is interpreted as a newline. Similarly a 't' after a backlash means a tab.

An example of a string is as following: ```"Hello, My name is Sajjad Ali".```

### Boolean
Boolean is also an data type in javascript. It basically checks either some value is true or false. Booleans can be used to compare values. You can even compare strings with booleans. For example:

```Javascript
console.log(1 < 2);
result -> true

console.log(1 > 2);
result -> false

console.log('Check me' == 'Don't check me);
result -> false

```

### Logical operators
There are also some operators that can be applied to boolean values themselves. Javascript supports three logical operators: ```AND, OR and NOT.```

```AND = &&```
&& is a binary operator, and its result is true only if both the values given to it are true.

```OR = ||```
|| operator denotes logical or. It produces true if either of the values given to it is true.

```NOT = !```
Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.

### Unary operators
Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator can be used both as a binary operator and as a unary operator.