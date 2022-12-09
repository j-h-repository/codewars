/*
The mathematical term symmetric difference (△ or ⊕) 
of two sets is the set of elements which are in either 
of the two sets but not in both. For example, 
for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Thus, for sets A and B above, and C = {2, 3}, A △ B △ C =
 (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

*/

function sym(...args) {
    const hold =[];
    const newArr = []
    const all = []
    let count = 0;
    let current="";
    
    for(let i=0; i<args.length; i++){
        let f = [...new Set(args[i])]
        newArr.push(f)
        all.push(...f)
    }
    all.sort((a,b)=>{return a-b})
    
    for(let i=0; i<all.length; i++){
        if(count <1){
            count = 1
        }
       
        current=all[i];
        console.log(current)

        if(current == all[i+1]){
        console.log("next one was the same")
         count++;
       
      } else{
        
        console.log("the next was not the same; count =>", count)
        if(count%2 != 0){
            console.log("an odd number was found")
            hold.push(current)
        }
        count=0
      }
    }

    console.log(hold)
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
