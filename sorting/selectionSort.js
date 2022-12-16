/*
Selection sort works by selecting the minimum
value in a list and swapping it with the first
value in the list
*/

function selectionSort(array) {
  
    let copy = [...array]
  
  
    for(let i=0; i<copy.length;i++){
      for(let j=i+1; j<copy.length;j++){
        if(copy[i] > copy[j]){
          //make immutable copy of "copy"[i] and [j]
          const big = copy[i]
          const small = copy[j]
          //put into temporary array
          copy[i] = small
          copy[j] = big
          //make original array the temporary one
        }
      }
    }
    return copy
  }
  
  console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))