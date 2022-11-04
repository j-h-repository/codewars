/*++++++++++++++++++++++++++++++++++++++++++++++++++
Implement the function unique_in_order which takes as 
argument a sequence and returns a list of items without 
any elements with the same value next to each other and 
preserving the original order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*++++++++++++++++++++++++++++++++++++++++++++++++++*/

var uniqueInOrder=function(iterable){
   const uniq = [];

   let split = "";
   if(typeof iterable == "object"){
    split = iterable
   } else{
    split = iterable.split("")
   }
   let count = 0
   
   for(let i=0; i<split.length; i++){
    
       if(split[i]===split[i+1]){
            if(count<1){
                count++;
                uniq.push(split[i]); 
            } 
       } else{
            if(count>0){
                count--
            } else{
                uniq.push(split[i])         
            }
       }
   }
   return uniq
  }

console.log(uniqueInOrder('ABBCcAD'))