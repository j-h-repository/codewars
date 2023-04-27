

const combo = [5]



function grow(){
    
    //function to determine the next string combination    
    let comboLength = combo.length

    if(comboLength<=1){
        if(combo[0]<52){
            combo[0]+=1
        } else{
            for(let i = 0; i< comboLength; i++){
                combo[i]=1
            }
            combo.push(1)
        }
    } else{
       
        for(let i = comboLength-1; i>-1; i--){
            console.log("hey")
            if(combo[i]<52){
                combo[i] += 1
                break;
            } else if(combo[i] == 52){
                if(i==0){
                    for(let j = 0; i< comboLength; i++){
                        combo[j]=1
                    }
                    combo.push(1)
                    break;
                } else{
                    combo[i]=1
                }
                
            }
        }
    }

   
    console.log(combo)

}

//grow()

//65-90
//97-122

const url = []

//loop to create the short url string 
for(let i=0; i<combo.length; i++){
    if(combo[i]<=26){
        let characterValue = 64 + combo[i]
        url.push(String.fromCharCode(characterValue))
    }else{
        let characterValue =  96+(combo[i]-26)
        url.push(String.fromCharCode(characterValue))
    }
}



const fs = require("fs")

//grad the data from the database
let database = fs.readFileSync('./database.txt', "utf8");
//convert into a JSON object
database = JSON.parse(database)

console.log("round 1: ",database)

//write a new entry to the JSON object
database[1]= {"long_url": 'https://www.w3schools.com/jsref/jsref_fromcharcode.asp',"short_url": 'shorty.ly/A',"pattern": [ 1 ]}

console.log("round 2: ",database)

//add the updated JSON to the database file
fs.writeFile("./database.txt", JSON.stringify(database), function(err){
    if(err){
        return console.log(err)
    }
})