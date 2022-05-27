// Task:
// Write sayHello function that takes a single argument, which is an object that contains the data of the person. 
// If the passed object has the property name, your function should output “Hello, name!” To the console. 
// If not, the function is supposed to print only “Hello!”. 
// An example of an object to call a function is const person = {name: "Jill", age: 25, hobby: "sports"}.

const person = {name: "Jill", age: 25, hobby: "sports"}

function sayHello(newperson){
  if(!newperson.name) return "Hello!";
  return "Hello, " + newperson.name;
}
console.log(sayHello(person));