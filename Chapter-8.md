# Chapter 8 - Bugs and Errors

## Language

Zoals in elke andere programeer taal, komen er ook bugs voor in Javascript. Bugs kunnen bijvoorbeeld voorkomen doordat de programmeur onbewust een fout heeft gemaakt in de code. Maar bugs kunnen ook in een programma voorkomen door bijvoorbeeld de gedrag die javascript vertoont. In beide gevallen is het vaak noodzakelijk om een bug op te lossen om het programma goed te laten draaien. 

Een paar voorbeelden van hoe bijvoorbeeld een bug eruit kan zien:
``` Javascript 
- Undefined
- Null
- reference error

```


## Strict Mode

Om zeker van te zijn dat javascript je vertelt dat je programma een bug bevat, kun je gebruik maken van strict mode.

``` Javascript
'use strict'
// Code

// Of:

function spotTheProblem() {
    'use strict';
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy coding");
    }
}

spotTheProblem();
// > ReferenceError: counter is not defined

```

## Types

Sommige programmeer talen willen alle types van allebindings kennen voordat ze de programma hebben uitgevoerd. Ze zullen je meteen vertellen wanneer een type op een inconsistente manier wordt gebruikt. JavaScript houdt alleen rekening met typen wanneer het programma wordt uitgevoerd en zelfs daar probeert vaak impliciet waarden te converteren naar het type dat het verwacht, dus het helpt niet veel.


## Testing

Wanneer je geen fouten ziet binnen je geschreven code, en je editor of de programeer taal helpt je niet om en fout te zoeken, kun je dit ook zelf doen door de programma te testen. Dit kun je doen om uit te vinden of de programma de verwachte uitkomst laadt. Maar dit blijven kost vaak veel tijd waardoor het niet altijd een slimme idee is. Daarom kun je er ook voor zorgen dat je een eigen test schrijft. 
Maar een eigen test schrijven is vaak ook niet heel makkelijk. Daarom kun je gebruik maken van 'test runner'. Dit zijn programma's waarmee je je code kan testen en ze geven je ook inzichten wanneer er een fout plaats vindt. 

## Debugging

Wanneer je een bug ontdekt, binnen je code, kun je beginnen met debugging. Hiervoor kun je vaak ook hulp mee gebruiken van de console. 

## Error handling

Soms kan het ook voorkomen dat de programmeeur geen fout heeft gemaakt maar de gebruiker van een bepaald programma een fout maakt. Als een programmeur moet je dit ook in de gaten houden en de gebruiker ook een oplossing bieden. Dit kun je bijvoorbeeld doen door een ```Try Catch``` statement te gebruiken. 
Een voorbeeld volgt zo:
```Javascript


function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} 
catch (error) {
  console.log("Something went wrong: " + error);
}

```

Het ```try``` statement laat je een stuk code testen op errors. Het ```catch``` statement laat je wat doen met een error (als) die naar boven komt in de code binnen het ```try``` block. Als er ergens binnen het ```try``` block een error voorkomt dan springt het gelijk naar je catch blok zonder dat het de rest van de code onder de fout uitvoert. Het ```throw``` statement laat je zelf error statements creëren, dit is vooral handig wanneer een functie bijvoorbeeld specifieke parameter types moet hebben (bijv. number). Code binnen een ```finally``` statement zal altijd draaien ongeacht het resultaat van je ```try/catch``` block.





