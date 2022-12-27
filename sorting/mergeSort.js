

function merge(left, right){
  let sorted = []

  while(left.length && right.length){
      if(left[0]<right[0]){
        sorted.push(left.shift())
      } else{
        sorted.push(right.shift())
    }
  }
  return [...sorted, ...left, ...right]
}

 const mergeSort =(array) => {


   
   if(array.length<=1){
    return array
   } else{
    //here, the array splits into to parts, at the breaking point (bp)
    let bp = Math.floor((array.length)/2)
    //the left array is sent in the same function to divide itself again
    let lower = mergeSort(array.slice(0,bp))
    //the right array is sent into the same function to divide itself again, too
    let upper = mergeSort(array.slice(bp))
  
    //after the left and right arrays are split to have a length of 1
    //the merge function will take each subsequent L and R array that was returned
    //and sort those, store in a sorted array
    //then move up the sequence of returned arrays until finally being sorted
    return merge(lower, upper)
    
   }


  }

//console.log("final answer ==>>",mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

module.exports = mergeSort