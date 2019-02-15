# Asynchronous programming

In een synchroon programma model gebeuren er dingen 1 voor 1. Wanneer er een functie wordt aangeroepen, die bijvoorbeeld ```set timeout``` functie heeft, blijft de rest van de functie op de ```set time``` functie wachten. Wanneer deze functie klaar is, wordt de rest van de programma uitgevoerd. 

Dat geberut niet in asynchroon programmeer model. In een asynchroon model, wanneer er een actie start, gaat het rest van de programma door met draaien. 


## Callbacks

Een manier van asynchroon programmeren is om functies die een langzame actie uitvoeren een extra argument te laten gebruiken, een callback-functie. De actie wordt gestart en wanneer deze is voltooid, wordt de ```callback-function``` aangeroepen met het resultaat.

``` Javascript

import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});


```

## Promises

### Hoe maak je een promise

``` Javascript

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value));

```

## Async functions

```async/await``` is eigenlijk gebowd vanuit Promises. Een ```async``` functie geeft altijd een promise terug en kan in de body van de functie andere promises afwachten: ```await``` op een manier die synchroon lijkt. Ze laten de code er dus synchroon uit zien terwijl ze eigenlijk asynchroon uitvoeren en niet de rest van je programma blokkeren.

```Javascript

// Zo werkt het eigenlijk
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Did some work"), 3000);
    })
}

// Hoe je hem af kan wachten (await)
const doSomething = () => {
    // Wacht totdat de Promise voltooid is (pauzeer totdat je het resultaat hebt)
    console.log(await doSomethingAsync());
}

// Ondertussen draait de rest van de code door
console.log("Before");
doSomething();
console.log("After");

// > Before
// > After
// > Did some work


```



