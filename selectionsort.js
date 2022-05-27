//Task:
//Sort given array with selection sort algorithm

const arr = [0, 2, 5, 7, 10, 34, 16, 879, 1, 10, 15, 105, 150]; 

function selectionSort(array){
  let min = array[0];
  let minposition = 0;

  for(let j=0; j<array.length; j++){
    for(let i=j; i<array.length; i++){
      if(array[i] < min) {
        min = array[i];
        minposition = i;
      }      
    }
    [array[j], array[minposition]] = [array[minposition], array[j]] //replace two numbers without additional variable (Assignment Operator)
    min = array[j+1];
  }  
  return array;
}
console.log(selectionSort(arr));

// FIRST WORKING DESIGN
// function selectionSort(array){
//   let min = array[0];
//   let minposition = 0;
//   let replace;
//   for(let j=0; j<array.length; j++){
//     for(let i=j; i<array.length; i++){
//       if(array[i] < min) {
//         min = array[i];
//         minposition = i;
//       }      
//     }
//     replace = array[j];
//     array[minposition] = replace;    
//     array[j] = min; 
//     min = array[j+1];
//   }  
//   return array;
// }
// console.log(selectionSort(arr));