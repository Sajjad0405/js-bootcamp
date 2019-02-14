# Chapter 6 -  The secret life of Objects

### Methods

Een method is niets meer dan een property van een object die de waarde van ```function``` houdt. Als een function wordt gecreëerd als een method en aangeroepen wordt als ```object.method()``` is de waarde van ```this``` gekoppeld aan het object waarin de method gecreëerd is:

```Javascript

let rabbit = {};

rabbit.speak = function(line) {
    console.log(`The ${this.type} rabbit says: ${line}`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my lord, the air is very thin today");
// > "The white rabbit says: Oh my lord, the air is very thin today"

```

### Prototype

Naast dat elk object z'n eigen set van properties heeft, hebben de meeste objecten ook een prototype. Een prototype is een ander object dat gebruikt word als fallback voor properties. Wanneer je een property van een object aanvraagt die hij niet heeft, wordt er in z'n prototype gekeken naar de property, daarna naar de prototype z'n prototype etc.

Om een object te maken met een specifiek prototype kan je ```Object.create``` gebruiken:

```Javascript 
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`)
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE");
// > "The killer rabbit says SKREEEE"
```

### Classes

Een class bepaald de vorm van een bepaald soort object (welke methods en properties het heeft). Zo'n object dat daaruit voort komt noem je een instance van de class. 

### Constructor function

Om dus een instance te maken van een bepaalde class moet je een object maken dat verschilt van het prototype maar je moet er ook voor zorgen dat dat object de properties heeft die de instances van die specifieke class zouden moeten hebben. Dit is wanneer een constructor functie handig is:

```Javascript

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

```


JavaScript heeft een manier om zo'n functie eenvoudiger te definiëren, namelijk door het keyword ```new``` voor de function call te gebruiken, dit zorgt ervoor dat de juiste instance gemaakt wordt, gebonden wordt aan this in de functie en returned wordt aan 't einde van de functie:

```Javascript
// In de naam van een prototype is een eerste letter altijd een hoofdletter 
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}

// Een nieuwe instance van Rabbit wordt gemaakt:
let otherRabbit = new Rabbit("weird");

```


### Overriding derived properties

Als je een property toevoegt aan een object, of het nou al in het prototype stond of niet, dan nog wordt de property toegevoegd aan het object zelf. Als er al een property was met dezelfde naam binnen het prototype heeft dat geen invloed op het object aangezien die nu achter de property van het object zelf schuilt.


```Javascript 
Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);
// > small

killerRabbit.teeth = "long, sharp, and bloody";

console.log(killerRabbit.teeth);
// > long, sharp, and bloody

console.log(blackRabbit.teeth);
// > small

console.log(Rabbit.prototype.teeth);
// > small

```

Het voordeel van het overschrijven van bestaande properties is dat je een specifiekere instances hun eigen properties kan geven zonder daarbij het origineel (de class en generieke instances) aanpast.



### Polymorphism

Een voorbeeld van polymorphism:

```Javascript

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit

```
Bovenstaand is een simpele uitvoering van een krachtig idee. Wanneer een stuk code is geschreven om met objecten te werken die een bepaalde interface hebben (in dit geval een ```toString``` method) kan elk soort object die toevallig de interface (```toString``` method) ondersteunt kan in de code gepleurd worden. De code zal dan alsnog blijven werken. Deze techniek noem je polymorphism.


### Symbols

Symbols zijn waardes die gecreëerd zijn met de ````Symbol``` functie. In tegenstelling tot strings zijn nieuwe symbols altijd uniek, je kan nooit twee dezelfde symbols creëren. Dit maakt het mogelijk om twee keer dezelfde property naam te gebruiken binnen een interface.

```Javascript
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// > false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// > 55
```

### THe Iterator interface

Het wordt van een object dat je passed aan een for/of loop verwacht dat het 'itereerbaar' is (dat je er doorheen kan loopen). Dit betekent dat het over een method genaamd Symbol.iterator beschikt. Wanneer Symbol.iterator aangeroepen wordt returnt deze een object die de tweede interface aanbiedt: iterator. Dat is het ding dat itereert. Het heeft een next method die het volgende resultaat toont als er één is, die geeft op zijn beurt een object met een value property die de waarde toont als er iets te tonen valt en een done property dat true geeft wanneer er nog iets te itereren valt en false als dat niet het geval is.


```Javascript
let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
// > {value: "O", done: false}

console.log(okIterator.next());
// > {value: "K", done: false}

console.log(okIterator.next());
// > {value: undefined, done: true}

```


### The ```Instanceof``` operator

Het kan handig zijn om te weten of een bepaald object afkomstig is vanuit een bepaalde class. Hier heeft JavaScript de ```instanceof``` operator voor:

```Javascript
console.log(new Kind(12, 1.75) instanceof Kind);
// > true

console.log(new Kind(12, 1.75) instanceof Vader);
// > true

console.log(new Vader(44, 1.90) instanceof Kind);
// > false

console.log([1, 2] instanceof Array);
// > true
```




