/*++++++++++++++++++++++++++++++++++++++++++++++++++
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*++++++++++++++++++++++++++++++++++++++++++++++++++*/


function duplicateEncode(word){
    let letters = word.toLowerCase()
    let words = letters.split("");

    let many = [];
    let final = [];

    for(let i=0;i<words.length;i++){
        
            //first it will check if the letter has been identified earlier
        if(many.length>0 && many.includes(words[i])==true){
            final.push(")");
            console.log("was found already")
            //if not
        } else if(words.lastIndexOf(words[i])>i){
            many.push(words[i]);
            final.push(")");
            console.log("has a later occurence")
            //it will check if the letter shows up any later
        }else{
            //or it will be an original
            final.push("(");
            console.log("is original")
            }
           
    }
    return final.join("")
}

console.log(duplicateEncode("(( @"))