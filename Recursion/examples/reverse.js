
let sentence = "I'm having a great time!"
console.log(sentence.split(""))

const reverse = (string)=>{
    
    let place = string.length-1;
    let letter = string[place]
    let str = string.slice(0,place)

    if(place < 1){
        return letter
    } else{
        return (letter + reverse(str) )
    }
}

console.log(reverse(sentence))