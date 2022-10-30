/*++++++++++++++++++++++++++++++++++++++++++++++++++
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function moveZeros(arr) {
   let list = [...arr]
    for(let i=0; i<list.length; i++){
        if(list[i] === 0){
            console.log(i)
            list.splice(i,1)
            list.push(0)
        }
    }
    return list
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))


