const mergeFunc = require("./mergeSort.js")

const array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

const sorted = mergeFunc(array)

const binSearch = (arr, num) =>{


    if(arr.length<=1){
        if(arr[0]!=num){
            return `${num} does not exist in the array`
        } else{
            return arr[0]
        }
        
    } else{

        let carry = []
        let bp = Math.floor(arr.length/2)
        console.log("Breaking point: ", arr[bp])
       


        if(arr[bp] == num){
            return `Found ${arr[bp]}`
        } else if(arr[bp]>num){
            
            carry = arr.slice(0,bp)
        } else{
            carry = arr.slice(bp)
            
        }
        console.log(carry)
        return binSearch(carry,num)
    }
}


console.log(binSearch(sorted, 8))

