 var range = function(start, end, step) {
    var array = [];
    for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++)
        array.push(i);
    return array;
};

var sum = function(arr) {
    return arr.reduce(function(x, y) {
        return x + y;
    });
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
