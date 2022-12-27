const quickSort = (array) => {
   
    //make a function that sorts only one whole array
    if(array.length<=1){
        return array
    } else{
        pivot = array.pop()
    }
    let lower = [];
    let upper= [];

    for(let i=0; i<array.length; i++){
        if(array[i]>pivot){
            upper.push(array[i])
        }else{
            lower.push(array[i])
        }
    }
    return [...quickSort(lower), pivot,...quickSort(upper)]

    //make a function that sorts two arrays

    //make a function that accepts two arrays and repeats the two-array sort


    return array;
  
  }
  
  console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

module.exports= quickSort