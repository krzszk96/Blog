// Task:
// Write a simple randomizing machine, a function that takes an array as an argument that contains a list of people. 
// Your function should return a random person from that array. 
// Sample array to call the function: const students = ["John", "Bill", "Emma", "Stella", "Rob"].

const students = ["John", "Bill", "Emma", "Stella", "Rob"]

function randomStudent(studentsarray){
  return studentsarray[Math.floor(Math.random() * studentsarray.length)];
}
console.log(randomStudent(students));