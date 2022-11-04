/*++++++++++++++++++++++++++++++++++++++++++++++++++
You always walk only a single block for each letter (direction)
 and you know it takes you one minute to traverse one city block, 
 so create a function that will return true if the walk the app gives 
 you will take you exactly ten minutes (you don't want to be early or late!) 
 and will, of course, return you to your starting point. Return false otherwise.

 starting point = 0;
 w => -1
 e => 1
 n => 2
 s => -2

 e.g [n,w,e,w,e,s,w,n] => 2 -1 +1 -1 +1 -2 -1 +2 = 1 => did not return me home
*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function isValidWalk(walk) {
    let origin = 0;
    
    if(walk.length==10){
        for(let i=0;i<walk.length; i++){
            switch (walk[i]) {
              case "n":
                origin += 2;
                break;
              case "s":
                origin -= 2;
                break;
              case "w":
                origin -= 1;
                break;
              case "e":
                origin += 1;
                break;
            }
        }
    } else{
        return "Walk must be exactly 10 minutes (entries) long"
    }
    return origin === 0
  }

console.log(isValidWalk(['w']))