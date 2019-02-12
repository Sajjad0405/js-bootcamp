var size = 8; 

var board = "";

//loop 8 maal via de forloop
for (var y = 0; y < size; y++) {  
  
  for (var x = 0; x < size; x++) {
      
    //wanneer door 2 te delen, maak een lege plek aan
    if ((x + y) % 2 == 0)
      board += " ";
    else
      //maak anders een # aan
      board += "#";
  }
  //Voeg een break toe voor elke keer dat er geloopt wordt
  board += "\n";
}

console.log(board);
