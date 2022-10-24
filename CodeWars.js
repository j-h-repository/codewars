// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Descends one at a time until reaching the minimum
// repeat until the string is the appropriate length

//******Notes*********/
// length will always be non-negative
// negative numbers can appear for minimum and maximum values
// hyphens/dashes ("-") for negative numbers do count towards the length
// the resulting string must be truncated to the exact length provided
// return an empty string if maximum < minimum or length == 0
// minimum and maximum can equal one another and result in a single number repeated for the length of the string

function ascendDescend(length, minimum, maximum) /*6 kyu*/ {
  let arr = [];
  let finalArr = [];
  let grade = [];

  if (minimum == maximum) {
    for (let c = 0; c < length; c++) {
      arr.push(minimum);
    }
    for (let d = 0; d < length; d++) {
        grade.push(arr.join("")[d]);
      }
    

  } else {
    for (let i = minimum; i < maximum + 1; i++) {
      arr.push(i);
      if (i == maximum) {
        finalArr.push(arr[0]);
        if (finalArr.length <= length) {
          for (let j = 0; j < length; j++) {
            if (finalArr[finalArr.length - 1] == minimum) {
              for (
                let a = minimum + 1;
                a < maximum + 1 && finalArr.length < length;
                a++
              ) {
                finalArr.push(a);
              }
            } else if (finalArr[finalArr.length - 1] == maximum) {
              for (
                let b = maximum - 1;
                b > minimum - 1 && finalArr.length < length;
                b--
              ) {
                finalArr.push(b);
              }
            }
          }
        }
      }
    }
    for (let c = 0; c < length; c++) {
      grade.push(finalArr.join("")[c]);
    }
  }
  return grade.join("");
}


// console.log(ascendDescend(6, -21, -21))
/*notes: being familiar with array methods would be best to create shorter, more efficient function */

//++++++++++++++++++++++++++++++++++++++++++++++
//count "1"s in binary output, number input

function bin (number){
  let count = 0;
   let set = (number.toString(2)).split("").sort((a,b)=>{return b-a})

  for(let i=0; set[i]>0; i++){
    count += parseInt(set[i])
  }
  return count
}



// console.log(bin(9))



//++++++++++++++++++++++++++++++++++++++++++++++
//check if a scrambled word could contain letters to an actual word
function scramble(str1, str2) {
  let scrambled = str1.split("").sort();
  let word = str2.split("").sort();
  let count =0;
  let read = word.length

 
  for (let i=0; i<word.length; i++){
    if(scrambled.includes(word[i])){
      scrambled.splice(scrambled.indexOf(word[i]),1);
      count++
    }
  }
  if(count!=read){
    return false
  } else{
    return true
  }
}

// console.log(scramble("scriptingjava", "javascript"))

//++++++++++++++++++++++++++++++++++++++++++++++
//replace a letter with its respective numerical place in the alphabet

function alphabetPosition(text) {
  let a = "a";
  let final = [];
  
  let check = /[a-z]/ig
  let arr = text.toLowerCase().match(check);

  for(let i=0; i<arr.length; i++){
    let start = arr[i].charCodeAt(0) - a.charCodeAt(0) + 1;
    final.push(start)
  }

  return final.join(" ");
 
}

//console.log(alphabetPosition("The narwhal bacons at midnight."))

//++++++++++++++++++++++++++++++++++++++++++++++
//sum of a number to a single digit
function digitalRoot(n) {
  let sum = 0;
  let list = n.toString().split("")

  const addIt = ()=>{
    for(let i=0; i < list.length; i++){
      console.log(parseInt(list[i]));
      sum += parseInt(list[i]);
    }
  } 
  addIt();
  if(sum.toString().length>1){
    list = sum.toString().split("");
    console.log("reducing");
    sum = 0
    addIt();
  } 
    return sum
}

console.log(digitalRoot(19))

//++++++++++++++++++++++++++++++++++++++++++++++