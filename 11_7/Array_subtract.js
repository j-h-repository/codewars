/*++++++++++++++++++++++++++++++++++++++++++++++++++
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present 
in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]

*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function arrayDiff(a, b) {
  
  let copied = [...a]
  //loop through the "b" array
  for(let i=0; i<b.length; i++){
    //loop through the longer array (copied)
    copied = copied.filter(function(number){
        return number !=b[i]
    })
  }
  return copied
}

console.log(arrayDiff([2,5,1,3,1,5,2,1,1,5,3,2], [2,5]));