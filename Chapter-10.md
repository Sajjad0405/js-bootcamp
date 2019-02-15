# Modules

Een module is eigenlijk niets meer dan je code opdelen in verschillende delen. Deze delen kun je modules noemen. Modules kunnen voorkomen dat je code een grote hopeloos bestand wordt. Modules zijn ook handig omdat wanneer je een bepaald stuk code aanpast of verwijdert, verandert de rest van de code niet. 

De relatie tussen modules, noem je een 'dependency'. Dit betekent niets meer dat wanneer je bepaalde programma, een stuk code van een andere module nodig heeft. 

## Packages

Een package is een stuk code dat gedistribueerd kan worden (gekopieerd en geïnstalleerd). Een package bestaat uit één of meerdere modules en heeft informatie over welke andere packages ze afhankelijk zijn.

Alle packages die je kunt downloaden en gebruiken kun je vinden op "https://www.npmjs.com/". 

## CommonJS modules

De meest gebruikte methode om Javascript-modules vast te zetten, wordt CommonJS-modules genoemd. Node.js gebruikt het en is het systeem dat door de meeste pakketten op NPM wordt gebruikt.

The main concept in CommonJS modules is a function called require. When you call this with the module name of a dependency, it makes sure the module is loaded and returns its interface.

``` Javascript

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

```

## Ecmascript Modules

De belangrijkste concepten van afhankelijkheden en interfaces blijven hetzelfde, maar de details verschillen. Om te beginnen is de notatie nu geïntegreerd in de taal. In plaats van een functie te gebruiken om toegang te krijgen tot een afhankelijkheid, gebruik je een speciaal importzoekwoord.

``` Javascript

import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* ... */ }



```


