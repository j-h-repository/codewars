/*
Write a function bubbleSort which takes
 an array of integers as input and returns
  an array of these integers in sorted
   order from least to greatest.
*/

const arr = [100,1,5,2,76,23,2,10,9]

// const lazySort = (array) =>{
//     let sorted = [...array].sort((a,b)=>{return a-b})
//     console.log("lazy function =>>", sorted)
// }


const bubbleSort = (array) => {
    let newArr = [...array]
    let hold = 0;
    for(let i=0; i<newArr.length-1-i; i++){
        for(let j=0; j<newArr.length; j++){
            let main = [...newArr][j]
            let smaller = [...newArr][j+1]
            if(main > smaller){
                hold = main
                newArr[j] = smaller
                newArr[j+1] = main
            }
        }
    }
    console.log(newArr)
}

bubbleSort(arr)
