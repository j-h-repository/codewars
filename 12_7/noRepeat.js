/*
Given an array arr, find element pairs whose 
sum equal the second argument and return 
the sum of their indices.

or example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
The pairs that sum to 20 are [7, 13] and [9, 11].
 */

function pairwise(arr, arg) {
  let sum = 0;
  let copy = [...arr];
  console.log(copy);

  //begin a loop holding a top "current" value
  for (let i = 0; i < copy.length; i++) {
    let current = copy[i];
    if (current != false) {
     
      for (let j = 0; j < copy.length; j++) {
        let smallCur = copy[j];
        if (smallCur != false) {
         
          if (i != j && current != false && smallCur != false) {
            if (current + smallCur == arg ) {
               
              sum += i + j;
              copy[i] = false;
              copy[j] = false;
              current = copy[i]
             
            }
          }
        }
      }
    }
  }
  //run a another loop to add the current value to smaller loop values

  //if i == j, skip

  //elseif current + arr[j] == arg,

  //add i && j
  //make original arr[i] == false
  //make original arr[j] == false

  return sum;
}

console.log(pairwise([1, 3, 2, 4], 4));
