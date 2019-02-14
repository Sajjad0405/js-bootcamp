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