// sort with bubble sort alg

const arr = [0, 2, 5, 7, 10, 34, 16, 879, 1, 10, 15, 105, 150]
// const arr = [7, 4, 2, 1]

function bblSort(arr){
  let swaps = false

  for(let j=0; j< arr.length; j++){
    swaps = false
    for(let i=0; i< arr.length; i++){      
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        swaps = true
      }      
    }
    if(swaps == false) return arr
  }  
}
console.log(bblSort(arr));