function insertionSort(array) {
 
    let copy = [...array]
    let begin ="";
    let end = "";
  
    let split1 = ""
    let split2 = ""
  
  
    for(let i=0; i<array.length; i++){
      for (let j=i; j<copy.length; j++){
        const after = copy[j]
        if(copy[i]>after){
          begin = copy.slice(0,j)
          end = copy.slice(j+1)
          for(let k=0; k<begin.length; k++){
            if(after<begin[k]){
              split1 = begin.slice(0,k)
              split1.push(after)
              split2 = begin.slice(k)
              begin = [...split1, ...split2]
              copy= [...begin,...end]
              break;
            }
          }
        }
     }
   }
  
  return  copy
  }
  
  console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))