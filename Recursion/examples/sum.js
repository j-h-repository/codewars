
const sumOf = (array) =>{
    let number = array[0]

    if(array.length<=1){
        return array[0]
    } else{
        let newArr = array.slice(1)
        return sumOf(newArr) + number
    }
}

console.log(sumOf([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

const sumConfirm =(array) =>{
    let sum = 0;
    for(let i=0; i<array.length;i++){
        sum +=array[i]
    }
    return sum
}

console.log(sumConfirm([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

