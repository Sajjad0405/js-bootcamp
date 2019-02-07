 var countBs = function(str) {
    return str.match(/B/g).length;
};

var countChar = function(str, character) {
    var matchLetter = new RegExp(character, 'g');
    return str.match(matchExp).length;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
