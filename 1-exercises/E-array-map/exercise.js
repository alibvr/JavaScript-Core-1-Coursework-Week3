// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];


function multipleHundred(number) {
    return number * 100;
}

const numbersMultHundred = numbers.map(multipleHundred);
console.log(numbersMultHundred);

const betterSyntax = numbers.map(function (number) {
    return number * 100;
})
console.log(betterSyntax);

const bestSyntax = numbers.map(number => number * 100);
console.log(bestSyntax);






