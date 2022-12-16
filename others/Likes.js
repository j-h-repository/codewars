/*++++++++++++++++++++++++++++++++++++++++++++++++++
Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function likes(names) {
   const zero = "no one likes this";
   const one = "likes this";
   const two_three = "like this";
   const four = "and two others like this";
   const users = [];

   let statememnt = "";

        if(names.length<1){
            return zero
        } else if(names.length==1){
            return (`${names[0]} ${one}`)
        }else if(names.length>1 && names.length<4){
            console.log("two or three")
            for(let i=0; i<names.length; i++){
                if(i!=names.length-1){
                    users.push(`${names[i]} and `)
                } else{
                    users.push(`${names[i]} `)
                }
            }
            return `${users.join("")}${two_three}`
        } else if(names.length>3){
                return `${names[0]} and ${names[1]} ${four}`
        }
  }

  console.log(likes(["brad", "jane", "dog", "susan"]))