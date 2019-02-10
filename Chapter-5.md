# Chapter 5

Een groot software programma is vaak een duur programma. Niet alleen vanwege de som geld die het kost maar ook vanwege de complexiteit. Hoe meer software je bouwt, hoe complexer het vaak wordt, hoe complexer het wordt, hoe groter de kans op bugs en hoe lastiger deze te vinden zijn.

### Abstraction

Abstraction betekent in programmeren dat je details weg laat binnen de code. Dit maakt het een soort mogelijk om over het probleem te praten op een 'hogere level' (meer abtract). 

### Abstracting repetition

Abstracties zijn heel handig voor het bouwen van functies. Het komt veel voor dat een programma één taak meerdere malen moet uitvoeren, daar hebben we een loop voor (de abstractie). Zo kan je bijvoorbeeld een functie bouwen die iets vijf keer console.logt in plaats van letterlijk vijf keer console.log neer te zetten:

```Javascript
function repeatLog(message) {
    for (let i = 0; i < 5; i++) {
        console.log(message);
    }
}

```


### Higher-order functions

Functions die draaien op andere functies door ze als hun argument te nemen of te returnen noem je 'Higher-order functions'. HIgher-order functions maken het mogelijk om acties abstracter te maken, niet alleen waardes. We kunnen bijvoorbeeld functies hebben die andere functies maken:

```Javascript

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));
// > true

```


### Script data set

Higher order functies hebben ook een andere voordeel. Dat is namelijk het processen van data. Bekijk hieronder een voorbeeld daarvan:

```Javascript
let gamingAmsterdam = {
    name: "Gaming bedrijf Amsterdam",
    games: [
        {name: "Fifa 19", genre: "sports"},
        {name: "Red dead redemption", genre: "Adventure"},
        {name: "Need for speed", hp: "Racing"}
    ]
}

```

Hierboven wordt een object gemaakt van een gaming bedrijf in Amsterdam. 


### Filtering arrays with .filter(array)

Stel je voor dat je alleen games wil weergeven die van genre sports zijn:

```Javascript

function filter(arr, test) {
    let passed = [];
    // Elk element dat voldoet aan de test wordt in de nieuwe 'passed' array gestopt.
    for (let element of arr) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// Dit is hoe je .filter() zou kunnen toepassen:
let {games} = gamingAmsterdam; // Pak de key auto's uit het object
console.log(autos.filter(auto => game.genre == "Sports"));
// > [{name: "Fifa 19", genre: sports}]

```


### ```Javascript .map() functie```

Voor het geval dat je bijvoorbeeld alleen de naam van de games terug wil krijgen. Dit kun je bijvoorbeeld doen door middel van de .map() functie. .map() is daarom ook een higher order function. 
Hieronder een voorbeeld:

```Javascript

function map(arr, transform) {
    let mapped = [];
    // Gooi alle elementen uit de array door de functie
    for (let element of arr) {
        // Zet de nieuwe waarden in de 'mapped' array
        mapped.push(transform(element));
    }
    return mapped;
}

// Dit is hoe je .map() zou kunnen toepassen:
let {games} = gamingAmsterdam;
let sportGames = autos.filter(auto => game.genre == "sports");

console.log(map(sportGames, sportGame => sportGame.name));
// > ["Fifa 19"]

```

### ```Javascript .reduce()```

Met .reduce() kan je een array om laten zetten tot één waarde. Een som van verschillende nummers is hier een voorbeeld van. Dit is hoe reduce onder de motorkap werkt:

```Javascript
function reduce(arr, combine, start) {
    let current = start;
    for (let element of arr) {
        current = combine(current, element);
    }
    return current;
}
```




