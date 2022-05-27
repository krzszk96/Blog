// Task:
// With given array: const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
// Write function that will display in console only even numbers from given array.

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

function onlyEvenNumbers(){
  let evennumbers = [];
  for (let number of numbers)
    if(number % 2 == 0) evennumbers.push(number);
  return evennumbers;
}
console.log("Filtered even numbers: "+ onlyEvenNumbers());