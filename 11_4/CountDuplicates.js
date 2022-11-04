/*++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function duplicateCount(text){

    const dup = [];

    let splitSort = text.toLowerCase().split("").sort();
    
    for(let i=0; i<splitSort.length; i++){
        if(splitSort[i]==splitSort[i+1]){
            if(!dup.includes(splitSort[i])){
                dup.push(splitSort[i])
            }
        }
    }
    return {count:dup.length, dup}
  
  }

console.log(duplicateCount("Indivisibvility"))