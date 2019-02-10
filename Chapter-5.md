# Chapter 5

Een groot software programma is vaak een duur programma. Niet alleen vanwege de som geld die het kost maar ook vanwege de complexiteit. Hoe meer software je bouwt, hoe complexer het vaak wordt, hoe complexer het wordt, hoe groter de kans op bugs en hoe lastiger deze te vinden zijn.

### Abstraction

Abstraction betekent in programmeren dat je details weg laat binnen de code. Dit maakt het een soort mogelijk om over het probleem te praten op een 'hogere level' (meer abtract). 

### Abstracting repetition

Abstracties zijn heel handig voor het bouwen van functies. Het komt veel voor dat een programma één taak meerdere malen moet uitvoeren, daar hebben we een loop voor (de abstractie). Zo kan je bijvoorbeeld een functie bouwen die iets vijf keer console.logt in plaats van letterlijk vijf keer console.log neer te zetten:

```
function repeatLog(message) {
    for (let i = 0; i < 5; i++) {
        console.log(message);
    }
}

```
