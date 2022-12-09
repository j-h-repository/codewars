/*
Compare and update the inventory stored in a 
2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity
into the inventory array. The returned inventory array 
should be in alphabetical order by item.
*/




function updateInventory(arr1, arr2) {

    let count =0
    let newLen=arr2.length
    let enter = [...arr2]
    let exist = [...arr1]
    let start = "";
    let end = "";
    let insert = "";
    

  
    for(let i=0; i<exist.length; i++){
      
        let oldName = exist[i][1]
       for(let j =0; j<enter.length; j++){
     
        let newName = enter[j][1]
        if(oldName==newName){
            
            exist[i][0]+=enter[j][0];
            enter.splice(j,1)
            break;
       }
    }
}
    for(let i=0; i<enter.length; i++){
       
       exist.push(enter[i]) 
        
        
    }
console.log(exist)

}




// Example inventory lists
let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);