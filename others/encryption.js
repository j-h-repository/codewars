let text = "text_here123!"

console.log(text)

//***************** divide the word *****************/
let length = text.length;

let firstLength = Math.floor(length/2);
let secondLength = length - firstLength;

let first = text.slice(0,firstLength)
let second = text.slice(secondLength-1)

console.log({first,second})

//***************** get the time combinations *****************/
let ms = Math.floor(new Date().getMilliseconds()/100) 

let sec = Math.floor(new Date().getSeconds()/10) 

let min = Math.floor(new Date().getMinutes()/10)

const main = ms*sec*min

console.log({main})

//***************** change the text *****************/

let tempFirst = first.split("")
let tempSecond = second.split("")

for(let i=0;i<tempFirst.length;i++){
    console.log(tempFirst[i])
    tempFirst[i] = String.fromCharCode(main + first.charCodeAt(i) +1)
}

for(let i=0;i<tempSecond.length;i++){
    console.log(tempSecond[i])
    tempSecond[i] = String.fromCharCode(main + second.charCodeAt(i) +1)
}

one = tempFirst.join("/")
two = tempSecond.join("/")


//***************** generate random text *****************/

let mockArr = [];
for(let i=0; i<length+1; i++){
    let char = String.fromCharCode((Math.random()*123)+48)
    char =  String.fromCharCode(main + char.charCodeAt(0) +1)
    mockArr.push(char)
}



mock = mockArr.join("/")

//***************** generate random text *****************/
final = one + two +  "**" + `${main}` + "##" + mock

console.log(final)